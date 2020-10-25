// eslint-disable-next-line arrow-body-style
const limitFunctionCallCount = (func, n) => {
  return function (...args) {
    if (n === 0) {
      return null;
    }
    // eslint-disable-next-line no-param-reassign
    n -= 1;
    return func(...args);
  };
};

export {
  limitFunctionCallCount,
};
