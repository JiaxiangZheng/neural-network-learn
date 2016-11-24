import Matrix from '../matrix';

// Layer
// has
// PrevLayer
// NextLayer

// N Filter
//  has weight, bias, dweight, vals, outputs

// 当计算 Layer 的 Forward 时，我们向

// For each layer, it should be provided with previous layer info, but no need to know about next layer info
class AbstractLayer {
  constructor() {}

  forward() {
    throw new Error('should never be call, implement your own');
  }

  backward(y) {
    throw new Error('should never be call, implement your own');
  }
}
