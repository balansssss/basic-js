const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chains: [],
  getLength() {
    return this.chains.length;
  },
  addLink(value) {
    this.chains.push(String(value));
    return chainMaker;
  },
  removeLink(position) {
    if (typeof position === 'number' && position > 0 && position - 1 < this.chains.length) {
      this.chains.splice(position - 1, 1);
      return chainMaker;
    } else {
      this.chains = [];
      throw new Error('You can\'t remove incorrect link!');
    }
  },
  reverseChain() {
    this.chains = this.chains.reverse();
    return chainMaker;
  },
  finishChain() {
    //console.log(this.chains)
    const res = `( ${this.chains.join(' )~~( ')} )`;
    this.chains = [];
    return res;
  }
};

//console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain()) // '( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )')) 

module.exports = {
  chainMaker
};
