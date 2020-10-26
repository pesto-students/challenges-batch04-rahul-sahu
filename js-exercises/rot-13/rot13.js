function rot13(args) {
  const letterSwap = {
    A: 'N',
    B: 'O',
    C: 'P',
    D: 'Q',
    E: 'R',
    F: 'S',
    G: 'T',
    H: 'U',
    I: 'V',
    J: 'W',
    K: 'X',
    L: 'Y',
    M: 'Z',
    N: 'A',
    O: 'B',
    P: 'C',
    Q: 'D',
    R: 'E',
    S: 'F',
    T: 'G',
    U: 'H',
    V: 'I',
    W: 'J',
    X: 'K',
    Y: 'L',
    Z: 'M',
    ' ': ' ',
  };

  let result = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < args.length; i++) {
    // eslint-disable-next-line no-prototype-builtins
    if (!letterSwap.hasOwnProperty(args[i])) {
      result = result.concat(args[i]);
    } else {
      result = result.concat(letterSwap[args[i]]);
    }
  }
  return result;
}

export {
  rot13,
};
