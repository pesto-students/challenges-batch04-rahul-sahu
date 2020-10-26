import { isString } from 'util';

function abbreviateString(str) {
  if (!isString(str)) {
    // eslint-disable-next-line no-throw-literal
    throw 'Invaling Parameters';
  }

  const splitStr = str.split(' ');
  const firstString = splitStr[0];
  const lastStringFirstChar = splitStr[splitStr.length - 1].charAt(0).toUpperCase();

  // eslint-disable-next-line prefer-template
  return firstString + ' ' + lastStringFirstChar + '.';
}

export { abbreviateString };
