class LossLayer {
  type: string;
  delta: any;
  loss: any;
}

/**
 * This implements a simple L2 loss function $J(Z, Y) = \frac{1}{2}\sum_{i=1}^N \|z^i - y^i\|^2$
 *
 * @class SquareLossLayer
 */
class SquareLossLayer extends LossLayer {
  constructor() {
    super();

    this.type = 'square';
  }
  forward(Z, Y) {
    const diff = Z.add(Y, -1);

    this.delta = diff;
    this.loss = diff.dot(diff).sum() / Z.rows;

    return this.loss;
  }
  backward() {
    return this.delta;
  }
}

class CrossEncryLossLayer extends LossLayer {
  constructor() {
    super();
    this.type = 'cross-entropy';
  }
  forward(Z, Y) {
    const diff = Z.add(Y, -1);

    this.delta = diff;
    this.loss = diff.map(val => val * val).sum() / Z.rows;

    return this.loss;
  }
  backward() {
    return this.delta;
  }
}

function makeLossLayer(type): LossLayer {
  if (type == 'square') return new SquareLossLayer();
  else if (type == 'cross-entropy') return new CrossEncryLossLayer();
  else {
    throw new TypeError('unkown loss type: ' + type);
  }
}

export default makeLossLayer;
