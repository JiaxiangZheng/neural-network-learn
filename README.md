## README

This little demo project tries to implement the neural network & convolutional neural network algorithm with TypeScript.

It currently supports the fully connect layers with three activation function: LeRU, Sigmoid, Tahn. But the LeRU case, it seems not work very well for the supplied example.

### USAGE

A simple usage of the neural network module is:

```
// instance a neural network
const net = new Net({
  learningRate: 0.3,
  epoch:10000
});

// add the hidden layers & final loss layer
net.addHiddenLayer({ in: 2, out: 3, activation: 'sigmoid' });
net.addHiddenLayer({ in: 3, out: 1, activation: 'tanh' });
net.setLossLayer(makeLossLayer('square'));
```

### TODO

- [ ] support cross-entropy loss layer
- [ ] implement the CNN, RNN in the future