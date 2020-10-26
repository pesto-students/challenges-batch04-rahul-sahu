function flipArgs(fn) {
  // eslint-disable-next-line func-names
  return function (...args) {
    // eslint-disable-next-line no-param-reassign
    args = args.reverse();
    return fn(args);
  };
}

export { flipArgs };
