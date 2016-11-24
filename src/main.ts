'use strict';

import { rand } from './utils';
import Matrix from './matrix';
import Net from './net';
import { LinearLayer, NonLinearLayer, makeLossLayer } from './layer'

function main() {
  const net = new Net();

  net.push(new LinearLayer(2, 3));
  net.push(new NonLinearLayer('sigmoid'));
  net.push(new LinearLayer(3, 1));
  net.push(new NonLinearLayer('sigmoid'));

  net.setLossLayer(makeLossLayer('square'));

  const X = Matrix.getInstanceFromArray([
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1]
  ]);
  const Y = Matrix.getInstanceFromArray([[0], [0], [0], [1]]);

  net.train(X, Y);

  console.log(net.forward(X));

  return;
}

main();