'use strict';

import { rand } from './utils';
import Matrix from './matrix';
import Net from './net';
import { LinearLayer, NonLinearLayer, makeLossLayer } from './layer'

function main() {
  const net = new Net({
    learningRate: 0.3,
    epoch:10000
  });

  net.addHiddenLayer({ in: 2, out: 3, activation: 'sigmoid' });
  net.addHiddenLayer({ in: 3, out: 1, activation: 'sigmoid' });
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
