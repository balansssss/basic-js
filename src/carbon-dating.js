const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let age = false
  if (sampleActivity && typeof sampleActivity === 'string' && Number(sampleActivity) > 0) {
    age = Math.log(MODERN_ACTIVITY / Number(sampleActivity)) / (Math.LN2 / HALF_LIFE_PERIOD);
    age = age > 0 ? Math.ceil(age) : false;
  }
  return age;
}

//console.log(dateSample('9000'))

module.exports = {
  dateSample
};
