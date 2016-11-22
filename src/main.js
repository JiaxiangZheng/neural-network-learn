'use strict';

import { rand } from './utils';
import Matrix from './matrix';
import Net from './net';
import { LinearLayer, NonLinearLayer } from './layer'

function main() {
  const net = new Net();

  net.push(new LinearLayer(2, 4));
  net.push(new NonLinearLayer('leru'));
  net.push(new LinearLayer(4, 1));
  net.push(new NonLinearLayer('sigmoid'));
  net.push(new LossLayer('square'));

  const X = Matrix.getInstanceFromArray([
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1]
  ]);
  const Y = Matrix.getInstanceFromArray([[0], [0], [0], [1]]);

  net.train(X, Y);

  return;
}

main();