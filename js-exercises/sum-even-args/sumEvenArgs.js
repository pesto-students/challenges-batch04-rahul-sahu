const sumEvenArgs = (...args) => {
  let sum = 0;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < args.length; i++) {
    if (args[i] % 2 === 0) {
      sum += args[i];
    }
  }
  return sum;
};

export { sumEvenArgs };
