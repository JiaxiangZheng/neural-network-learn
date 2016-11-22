export function rand(a, b) {
  if (typeof a === 'undefined' && typeof b === 'undefined') {
    a = 0;
    b = 1;
  }
  return Math.random() * (b - a) + a;
}
