class Node {
    constructor(data) {
        this.value = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
      return this.first.value;
    }

    enqueue(data) {
        const newNode = new Node(data);
        if (this.length === 0) {
            this.first = this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.length++;
        return this;
    }

    dequeue() {
       if (!this.first) {
          return null;
       } 

       if (this.first === this.last) {
         this.last = null;
       }
        
       this.first = this.first.next;
       this.length--;

       return this;
    }
}

const myQueue = new Queue();
myQueue.enqueue('google');
myQueue.enqueue('yahoo');
myQueue.enqueue('stack');
myQueue.enqueue('ddddd');

myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();

console.log("peak me", myQueue.peek());
