// Layer
// has
// PrevLayer
// NextLayer

// N Filter
//  has weight, bias, dweight, vals, outputs

// 当计算 Layer 的 Forward 时，我们向

// For each layer, it should be provided with previous layer info, but no need to know about next layer info
class AbstractLayer {
  constructor(prevLayer) {
    this.in_size = opts.in_size;
    this.out_size = opts.out_size;

    this.outputs = [];
    this.filters = [];

    for (let i = 0; i < this.out_size; i++) {
      this.filters.push({
        bias: 0,
        weight: new Array(this.in_size),
        dweight: new Array(this.in_size)
      });
      this.outputs.push(0);
    }
  }
  forward() {
    throw new Error('should never be call, implement your own');
  }
  backward(y) {
    throw new Error('should never be call, implement your own');
  }
}

class InputLayer extends AbstractLayer {
}

class FullyConnectLayer extends AbstractLayer {
}