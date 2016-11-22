import Matrix from '../matrix';

class LinearLayer {
  constructor(m, n) {
    this.in_size = m;
    this.out_size = n;
    this.w = new Matrix(m, n);
    this.b = new Matrix(n, 1, 0);
  }

  forward(X) {
    this.in = X;
    this.out = X.multiply(this.w).add(this.b);
    return this.out;
  }

  // delta_Z = 1 * n
  backward(delta_Z) {
    this.delta_w = this.in.transpose().multiply(delta_Z);
    this.delta_b = delta_Z;

    // delta_X
    this.delta = delta_Z.multiply(this.w.transpose());
  }
}

export default LinearLayer;