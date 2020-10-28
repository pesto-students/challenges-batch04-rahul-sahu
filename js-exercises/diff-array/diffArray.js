function diffArray(arr1, arr2) {
  const result = arr1;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i])) {
      while (result.includes(arr2[i])) {
        result.splice(result.indexOf(arr2[i]), 1);
      }
    } else {
      result.push(arr2[i]);
    }
  }
  return result;
}

export {
  diffArray,
};
