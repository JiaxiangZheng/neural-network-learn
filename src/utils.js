export function rand(a, b) {
  if (typeof a === 'undefined' && typeof b === 'undefined') {
    a = 0;
    b = 1;
  }
  return Math.random() * (b - a) + a;
}

export function shuffle(array) {
  var i = array.length,
      j = 0,
      temp;
  while (i--) {
      j = Math.floor(Math.random() * (i+1));
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}
