// You can use the function from the `Math` module.
function sqrt(n) {
  let x = n;
  let y = 1;
  const e = 0.0000001;
  while (x - y > e) {
    x = (x + y) / 2;
    y = n / x;
  }
  // eslint-disable-next-line radix
  return parseInt(x);
}
function power(n, e) {
  return n ** e;
}
function round(n) {
  // eslint-disable-next-line radix
  return parseInt(n + 0.5);
}

// Don't change the exported names.
export {
  sqrt,
  power,
  round,
};
