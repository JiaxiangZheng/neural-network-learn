class Net {
  constructor() {
    this.layers = [];
    this.loss = Math.exp(100);  // Infinity
    this.epoch = 1000;
  }
  push(layer) {
    this.layers.push(layer);
  }
  forward(X, y) {
    for (let i = 0; i < this.layers.length; i++) {
      const layer = this.layers[i];
      X = layer.forward(X);
    }
    // should be a scalar
    this.loss = X - y;

    return this.loss;
  }
  backward() {
    const len = this.layers.length;
    let delta = this.loss;
    for (let i = len - 1; i >= 0; i--) {
      const layer = this.layers[i];
      delta = layer.backward(delta);
      // TODO: update the corresponding weight & bias parameters
      // layer.update()
    }
  }
  train(X, Y) {
    for (let i = 0; i < this.epoch; i++) {
      let loss = this.forward(X, Y);
      this.backward();
      console.log(loss);
    }
  }
}

export default Net;