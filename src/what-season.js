const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let res = 'Unable to determine the time of year!';//'Unable to determine the time of year!';
  /*const reg = new RegExp('\w+\s\w+\s\d+\s\d+\s\d+:\d+:\d+\s\w+', 'gm');
  console.log(String(date).split('+')[0])
  console.log(reg.test(String(date).split('+')[0]))*/

  if (date) {
    try {
      date.getMonth();
    } catch {
      //return ('Invalid date!')
      throw new Error('Invalid date!');
    }

    const month = date.getMonth();
    if (month >= 2 && month < 5) {
      res = 'spring';
    } else if (month >= 5 && month < 8) {
      res = 'summer';
    } else if (month >= 8 && month < 11) {
      res = 'autumn';
    } else {
      res = 'winter';
    }
  }

  return res;
}

//console.log(getSeason(() => new Date()))


module.exports = {
  getSeason
};
