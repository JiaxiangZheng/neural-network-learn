import Matrix from '../matrix';

// N 为一个 batch 大小
// 输入 m，输出 n，X 为 N * m，W 为 m * n，b 为 1 * n，I 为一个 N*1 的列向量
// Z = X * W + I * b = N * n
class LinearLayer {
  constructor(m, n) {
    this.in_size = m;
    this.out_size = n;
    this.w = new Matrix(m, n);
    this.b = new Matrix(1, n, 0);
  }

  forward(X) {
    this.in = X;
    const I = new Matrix(X.rows, 1, 1);
    this.out = X.multiply(this.w).add(I.multiply(this.b));

    return this.out;
  }

  // delta_Z = N * n
  backward(delta_Z) {
    this.delta_w = this.in.transpose().multiply(delta_Z).map(val => val / this.in.rows);

    // regularization term
    // const lambda = 0.1;
    // this.delta_w = this.delta_w.add(this.w, lambda)

    const I = new Matrix(this.in.rows, this.b.cols, 1);
    this.delta_b = delta_Z.transpose().multiply(I).map(val => val / this.in.rows);

    const learning_rate = 0.05;

    this.w = this.w.add(this.delta_w, -learning_rate);
    this.b = this.b.add(this.delta_b, -learning_rate);

    // dleta_X
    this.delta = delta_Z.multiply(this.w.transpose());

    return this.delta;
  }
}

export default LinearLayer;