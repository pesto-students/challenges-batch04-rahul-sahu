/* *
  For input string str, return false if input contains no duplicate letters
  else the total count of the letter with the most duplicates.
* */
function duplicateLetters(str) {
  if (str.length === 0) { // In the case of empty string.
    return 'Input string is empty';
  }
  let result = {};
  // eslint-disable-next-line no-param-reassign
  str = str.split('');
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < str.length; i++) {
    if (!result[str[i]]) {
      result[str[i]] = 1;
    } else {
      result[str[i]] += 1;
    }
  }
  result = Object.values(result);
  const max = Math.max(...result);
  if (max === 1 || max === 0) {
    return false;
  }
  return max;
}

export {
  duplicateLetters,
};
