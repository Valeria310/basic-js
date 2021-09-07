import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  if (options.separator === undefined) {
    options.separator = "+";
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = "|";
  }
  str = String(str);

  let addition = String(options.addition);
  if (options.addition === undefined) {
    addition = "";
  }
  let dop = addition;
  let string = str;
  if (options.additionRepeatTimes > 1) {
    for (let i = 0; i < options.additionRepeatTimes - 1; i++) {
      dop += options.additionSeparator + addition;
    }
  }
  if (options.repeatTimes > 1) {
    string += dop;
    for (let i = 0; i < options.repeatTimes - 1; i++) {
      string += options.separator + str + dop;
    }
  } else {
    string += dop;
  }

  return string;
}
