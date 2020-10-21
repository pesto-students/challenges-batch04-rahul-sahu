// Calculates sum of all **odd** numbers in Fibonacci Series, upto or less than number n.

function sumFibs(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 2;
  }

  const series = [1, 1]; // Initialize Series with first two number of Fibonacci Series
  let nextTerm = 2;
  let i = 2;

  while (nextTerm <= n) {
    series.push(nextTerm);
    nextTerm = series[i] + series[i - 1];
    i += 1;
  }

  const oddSeries = series.filter((a) => { // Filter odd numbers
    if (a % 2 !== 0) { return a; }
  });
  const sum = oddSeries.reduce((a, b) => a + b, 0); // Add all the odd numbers in series
  return (sum);
}

function cacheFunction(fun) {
  const cache = {};
  return function (n) {
    if (cache[n] !== undefined) {
      return cache[n];
    }

    const result = fun(n);
    cache[n] = result;
    return result;
  };
}

export { sumFibs, cacheFunction };
