import { shuffle } from './utils'
import Matrix from './matrix'

class Net {
  constructor(epoch) {
    this.layers = [];
    this.loss = Math.exp(100);  // Infinity
    this.epoch = epoch || 3000;
  }
  push(layer) {
    this.layers.push(layer);
  }
  forward(X) {
    for (let i = 0; i < this.layers.length; i++) {
      const layer = this.layers[i];
      X = layer.forward(X);
    }

    return X;
  }
  backward(Y_, Y) {
    const len = this.layers.length;
    this.loss = this.lossLayer.forward(Y_, Y);
    let delta = this.lossLayer.backward();
    for (let i = len - 1; i >= 0; i--) {
      const layer = this.layers[i];
      delta = layer.backward(delta);
    }
  }
  train(X, Y) {
    let batch_size = Math.max(Math.floor(X.rows * 0.25), 3);
    if (X.rows < batch_size) {
      batch_size = X.rows;
    }
    for (let i = 0; i < this.epoch; i++) {
      const data = this.batchPick({ X, Y }, batch_size);
      let newY = this.forward(data.X);
      this.backward(newY, data.Y);
      if (i % 100 == 0) console.log(i, this.loss);
    }
  }
  batchPick(data, batch_size) {
    const X = data.X;
    const Y = data.Y;
    let indices = new Array(X.rows);
    for (let i = 0; i < X.rows; i++) {
      indices[i] = i;
    }
    shuffle(indices);
    indices = indices.slice(0, batch_size);

    let _X = new Matrix(batch_size, X.cols);
    for (let i = 0; i < batch_size; i++) {
      let index = indices[i];
      for (let j = 0; j < X.cols; j++) {
        _X.set(i, j, X.get(index, j));
      }
    }
    let _Y = new Matrix(batch_size, Y.cols);
    for (let i = 0; i < batch_size; i++) {
      let index = indices[i];
      for (let j = 0; j < Y.cols; j++) {
        _Y.set(i, j, Y.get(index, j));
      }
    }

    return {
      X: _X,
      Y: _Y,
      indices
    }
  }
}

export default Net;
