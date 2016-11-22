import chai from 'chai';
import Matrix from '../src/matrix';

chai.should();

describe('Matrix', function () {
  describe('getFromArray', function () {
    it('should throw an error if parameter is invalid', function () {
      (() => {
        Matrix.getInstanceFromArray([1])
      }).should.throw(Error);
      (() => {
        Matrix.getInstanceFromArray([1, 2], [3, 4])
      }).should.throw(Error);
    });
    it('should generate a Matrix instance if parameter is valid', function () {
      let matrix = Matrix.getInstanceFromArray([[1, 2], [3, 4]]);
      matrix.rows.should.equal(2);
      matrix.cols.should.equal(2);
    });
  });
  it('get should return correct value', function () {
    let matrix = Matrix.getInstanceFromArray([[1, 2, 3], [4, 5, 6]]);
    matrix.get(0, 0).should.equal(1);
    matrix.get(0, 1).should.equal(2);
    matrix.get(0, 2).should.equal(3);
    matrix.get(1, 0).should.equal(4);
    matrix.get(1, 1).should.equal(5);
    matrix.get(1, 2).should.equal(6);
  });
  it('set should work well', function () {
    let matrix = Matrix.getInstanceFromArray([[1, 2], [3, 4]]);
    matrix.set(1, 1, 0);
    matrix.get(1, 1).should.equal(0);
  });
  it('add should work for same dimensional matrix', function () {
    let A = Matrix.getInstanceFromArray([[1, 2], [3, 4]]);
    let B = Matrix.getInstanceFromArray([[1, 2], [3, 4]]);
    let C = A.add(B);

    C.rows.should.equal(2);
    C.cols.should.equal(2);

    C.get(0, 0).should.equal(2);
    C.get(0, 1).should.equal(4);
    C.get(1, 0).should.equal(6);
    C.get(1, 1).should.equal(8);
  })
  it('dot should work for same dimensional matrix', function () {
    let A = Matrix.getInstanceFromArray([[1, 2], [3, 4]]);
    let B = Matrix.getInstanceFromArray([[1, 2], [3, 4]]);
    let C = A.dot(B);

    C.rows.should.equal(2);
    C.cols.should.equal(2);

    C.get(0, 0).should.equal(1);
    C.get(0, 1).should.equal(4);
    C.get(1, 0).should.equal(9);
    C.get(1, 1).should.equal(16);
  });
  it('multiply should work for same dimensional matrix', function () {
    let A = Matrix.getInstanceFromArray([[1, 2, 3], [4, 5, 6]]);
    let B = A.transpose();
    let C = A.multiply(B);

    C.rows.should.equal(2);
    C.cols.should.equal(2);

    C.get(0, 0).should.equal(1 + 4 + 9);
    C.get(0, 1).should.equal(1 * 4 + 2 * 5 + 3 * 6);
    C.get(1, 0).should.equal(1 * 4 + 2 * 5 + 3 * 6);
    C.get(1, 1).should.equal(4 * 4 + 5 * 5 + 6 * 6);
  });
  it('map should work well', function () {
    let A = Matrix.getInstanceFromArray([[1, 2, 3], [4, 5, 6]]);
    let matrix = A.map(val => val + 1);

    matrix.rows.should.equal(2);
    matrix.cols.should.equal(3);

    matrix.get(0, 0).should.equal(2);
    matrix.get(0, 1).should.equal(3);
    matrix.get(0, 2).should.equal(4);
    matrix.get(1, 0).should.equal(5);
    matrix.get(1, 1).should.equal(6);
    matrix.get(1, 2).should.equal(7);
  });
});