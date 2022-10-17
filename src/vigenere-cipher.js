const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(typeMachine = true) {
    this.typeMachine = typeMachine;
  }
  encrypt(str, key) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    //console.log(str, key)
    for (let i = 0; i < str.length; i++) {
      console.log(String.fromCharCode(str[i].charCodeAt() + key[i % key.length].charCodeAt()))
    }

    //return this.typeMachine ? res : res.split('').reverse().join('');
  }
  decrypt() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

const directMachine = new VigenereCipheringMachine();
const reverseMachine = new VigenereCipheringMachine(false);

directMachine.encrypt('attack at dawn!', 'alphonse') //=> 'AEIHQX SX DLLU!'

//console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse')) //=> 'ATTACK AT DAWN!'

//console.log(reverseMachine.encrypt('attack at dawn!', 'alphonse')) // => '!ULLD XS XQHIEA'

//console.log(reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse')) //=> '!NWAD TA KCATTA'

module.exports = {
  VigenereCipheringMachine
};
