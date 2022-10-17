const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.array = [];
  }

  push(element) {
    //throw new NotImplementedError('Not implemented');
    this.array.push(element);
    return this;
  }

  pop() {
    //throw new NotImplementedError('Not implemented');
    let element = this.array[this.array.length-1];
    this.array = this.array.filter(x => x != element);
    return element;
  }

  peek() {
    //throw new NotImplementedError('Not implemented');
    return this.array[this.array.length-1];
  }
}

module.exports = {
  Stack
};
