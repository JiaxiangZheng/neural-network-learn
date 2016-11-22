import { rand } from './utils';

class Matrix {
  static getInstanceFromArray(array) {
    if (!array || !Array.isArray(array) || array.length <= 0) {
      throw new Error('invalid input, should be a two dimensional array');
    }
    if (!array[0] || !Array.isArray(array[0]) || array[0].length <= 0) {
      throw new Error('invalid input, should be a two dimensional array');
    }
    const rows = array.length;
    const cols = array[0].length;
    let instance = new Matrix(rows, cols);
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        instance.set(i, j, array[i][j]);
      }
    }
    return instance;
  }

  constructor(m, n, initial) {
    this._data = new Array(m * n);
    this.rows = m;
    this.cols = n;
    for (let i = 0; i < m * n; i++) {
      this._data[i] = typeof initial !== 'undefined' ? initial : rand()
    }
  }
  get(i, j) {
    return this._data[this.cols * i + j];
  }
  set(i, j, v) {
    this._data[this.cols * i + j] = v;
  }
  multiply(matrix) {
    let _rows = this.rows,
      _cols = matrix.cols,
      out = new Matrix(_rows, _cols, 0);
    for (let i = 0; i < _rows; i++) {
      for (let j = 0; j < _cols; j++) {
        let val = 0;
        for (let k = 0; k < this.cols; k++) {
          val += this.get(i, k) * matrix.get(k, j);
        }
        out.set(i, j, val);
      }
    }
    return out;
  }
  // element wise multiply
  dot(matrix) {
    let _rows = this.rows,
      _cols = this.cols,
      out = new Matrix(_rows, _cols, 0);
    for (let i = 0; i < _rows; i++) {
      for (let j = 0; j < _cols; j++) {
        out.set(i, j, this.get(i, j) * matrix.get(i, j));
      }
    }
    return out;
  }
  add(matrix, scale) {
    if (typeof scale === 'undefined') scale = 1.0;
    let out = new Matrix(this.rows, this.cols, 0);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        out.set(i, j, this.get(i, j) + scale * matrix.get(i, j));
      }
    }
    return out;
  }
  transpose() {
    let out = new Matrix(this.cols, this.rows, 0);
    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        out.set(i, j, this.get(j, i));
      }
    }
    return out;
  }
  map(fn) {
    let out = new Matrix(this.rows, this.cols, 0);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        out.set(i, j, fn(this.get(i, j)));
      }
    }
    return out;
  }
}

export default Matrix;