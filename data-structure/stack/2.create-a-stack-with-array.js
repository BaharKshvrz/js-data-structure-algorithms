class Stack {
    constructor() {
        this.items = [];
    }

    peak () {
      return this.items[this.items.length - 1];
    }

    pop () {
      this.items.pop();
    }

    push (data) {
      this.items.push(data);
    }
}

const myStack = new Stack();
myStack.push('a');
myStack.push('b');
myStack.push('c');
myStack.pop();
myStack.pop();

console.log("preak me:", myStack.peak());