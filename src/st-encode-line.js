import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  const str1 = [];
  let numb = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i + 1] === str[i]) {
      numb++;
    } else if (numb === 1) {
      str1.push(str[i]);
    } else {
      str1.push(numb + str[i]);
      numb = 1;
    }
  }
  return str1.join('');
}
