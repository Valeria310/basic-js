import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
      calculateDepth(arr) {
    let n = 1;
    arr.forEach((elem)=>  {
      if (Array.isArray(elem)) {
        let m = this.calculateDepth(elem) + 1;
        n = Math.max(n, m);
      }
    });
    return n;
  }
}
