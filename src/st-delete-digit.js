import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let num = n;
  num = String(num);
  let num1 = num.split('');
  const arr = [];
  for (let i = 0; i < num.length; i++) {
    num1.splice(i, 1);
    arr.push(+num1.join(''));
    num1 = num.split('');
  }
  return Math.max.apply(null, arr);
}
