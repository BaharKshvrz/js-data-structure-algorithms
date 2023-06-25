class Node {
    constructor(data) {
      this.value = data;
      this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.botttom = null,
        this.length = 0;
    }

    peak () {
      if (this.length === 0) {
        return 'stack is empty!'
      }

      return this.top.value;
    }

    pop () {
        if (this.length === 0) {
          return 'stack is empty!'
        }
        
        if (this.botttom === this.top) {
            this.pop = this.botttom = null;
            this.length = 0;
            return;
        }

        let pointer = this.botttom;
        for (let i= 1; i < this.length - 1; i++) {
           pointer = this.botttom.next;
        }
        this.top = pointer;
        this.length--;
    }

    push (data) {
      const newNode = new Node(data);
      if (this.length === 0) {
        this.botttom = this.top = newNode;
      } else {
        const holdingPointer = this.top;
        this.top = newNode;
        holdingPointer.next = newNode;
      }
       this.length++;
    }
}

const myStack = new Stack();
myStack.push('a');
myStack.push('b');
myStack.push('c');
myStack.pop();
myStack.pop();
myStack.pop();

console.log("preak me:", myStack.peak());