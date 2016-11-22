class SquareLossLayer {

}

class CrossEncryLossLayer {

}

class LossLayer {
  constructor(type) {
  }
  forward(z, y) {
    const diff = z.add(y, -1);

    this.delta = diff;
    this.loss = diff.map(val => val * val).sum() / 2 / z.rows;

    return this.loss;
  }
  backward() {
    return this.delta;
  }
}

export default LossLayer;
