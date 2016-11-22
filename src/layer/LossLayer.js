class SquareLossLayer {

}

class CrossEncryLossLayer {

}

class LossLayer {
  constructor(type) {
  }
  forward(Z, Y) {
    const diff = Z.add(Y, -1);

    this.delta = diff;
    this.loss = diff.map(val => val * val).sum() / 2 / Z.rows;

    return this.loss;
  }
  backward() {
    return this.delta;
  }
}

export default LossLayer;
