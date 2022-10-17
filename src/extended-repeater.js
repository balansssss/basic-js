const { NotImplementedError } = require('../extensions/index.js');

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
function repeater(str, options = null) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (!options.separator) options.separator = '+';
  if (!options.additionSeparator) options.additionSeparator = '|';
  if (!options.repeatTimes) options.repeatTimes = 1;
  if (!options.additionRepeatTimes) options.additionRepeatTimes = 1;

  const arrAddition = [];

  for (let i = 0; i < options.additionRepeatTimes; i++) {
    if (options.addition !== undefined) arrAddition.push(String(options.addition));
  }

  console.log(arrAddition)

  const addition = arrAddition.join(options.additionSeparator);
  const arrStr = [];

  console.log(addition)

  for (let i = 0; i < options.repeatTimes; i++) {
    arrStr.push(String(str) + addition);
  }

  return arrStr.join(options.separator);
}

/*console.log(
  //repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
  //repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' })
  //repeater('la', { repeatTimes: 3 }), 'la+la+la'
  repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' }), 'truefalse!!!false??? truefalse!!!false??? truefalse!!!false')
*/

module.exports = {
  repeater
};
