function removeFalsyValues(array) {
  const result = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      result.push(array[i]);
    }
  }
  return result;
}

export {
  removeFalsyValues,
};
