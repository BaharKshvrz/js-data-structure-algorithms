class NodeItem {
    value: number;
    next : null | NodeItem;
    constructor(data: number) {
      this.value = data;
      this.next = null;
    }
}
/*
 * 
 * QUEUE
 * 
 */
class MyQueue {
   first : null | NodeItem;
   last: null | NodeItem;
   length: number;
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    push(x: number): void {
      const newNode = new NodeItem(x);
      if (this.length === 0) {
          this.first = this.last = newNode;
      } else {
          if (this.last) {
            this.last!.next = newNode;
            this.last = newNode;
          }

      }
      this.length++;
    }

    pop(): number {
      if (this.first === this.last) {
        const popData = this.first?.value?? 0;
        this.last = this.first = null;
        this.length = 0;
        return popData;
      }
      
      const popData = this.first!.value;
      this.first = this.first!.next;
      this.length--;

      return popData;
    }

    peek(): number {
       return this.first ? this.first.value: 0;
    }

    empty(): boolean {
      return this.first ? false : true;
    }
}

 var obj = new MyQueue();
 obj.push(1);
 var param_1 = obj.pop();
 obj.push(2);
 var param_3 = obj.peek();
 console.log('peak', param_3);
