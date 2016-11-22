import Matrix from '../matrix';

const LeRU = {
  forward(val) {
    return val > 0 ? val : 0;
  },
  backward(z) {
    return z > 0 ? 1 : 0;
  }
}

const Sigmoid = {
  forward(val) {
    return 1 / (1 + Math.exp(-val));
  },
  backward(z) {
    return z * (1 - z)
  }
}

// N 为一个 batch 大小
// 输入 m，输出 n，X 为 N * m，W 为 m * n，b 为 1 * n，I 为一个 N*1 的列向量
// Z = X * W + I * b = N * n
// X^1 = NonLinear(Z)
class NonLinearLayer {
  constructor(activation) {
    if (activation == 'sigmoid') {
      this.activation = Sigmoid;
    } else {
      this.activation = LeRU;
    }
  }
  forward(Z) {
    this.in = Z;
    this.out = Z.map(this.activation.forward);

    return this.out;
  }
  // 对后一层输入的偏导数，\delta = delta_X *
  backward(delta_X) {
    // 因为 delta_X 与 this.in 维度一致，本质上对输入的梯度即 delta_X 与 this.out.map(this.activation.backward) 的 element-wise 乘积
    // ，this.in 中大于 0 的项，对应的 delta_X 保留，否则为 0
    let backward = this.out.map(this.activation.backward);

    this.delta = delta_X.dot(backward);
  }
}

export default NonLinearLayer;