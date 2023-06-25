// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */


const inputArr = [ 1, 2, 3, 4, 5 ];

class ListNode {
    val: number;
    next:  ListNode | null;

   constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
   }
}

class LinkedList<T> {
    head:  ListNode;
    tail:  ListNode;
    length = 1;

    constructor(val?: number, next?: ListNode | null) {
        let firstNode = new ListNode(val, next);
        this.head = firstNode;
        this.tail = this.head;
        this.length = 1;
    }   

    insert = function (val?: number, next?: ListNode | null) {
        let newNode = new ListNode(val, next);
        let leader = this.head;
        for (let i= 0; i < this.length -1; i++) {
              leader= leader.next;
          }

        leader.next = newNode;
        this.tail = newNode;
        this.length++;

        return this.list;
    }

    reverseList= function(head: ListNode | null) {
        head = this.head;
        if (head === null) return;
    
       let currentNode: ListNode | null = head;
       let prevNode: ListNode | null = null;
       let nextNode: ListNode | null  = null;

      while(currentNode) {
        nextNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = nextNode;
        nextNode = null;
      }

      this.head = head = prevNode; // reset head
      
      return this.head;
    };


    addToArray() {
        let nodes : number[] = [];
        let head: ListNode| null = this.head;

        for (let i= 0; i < this.length; i++) {
            if (head && head.val) {
                nodes.push(head.val);
                head= head.next;
            }
        }

        return nodes;   
    }
}

const list = new LinkedList<number>(inputArr[0]);
for (let i = 1; i < inputArr.length; i++) {
    list.insert(inputArr[i]);
}

list.reverseList(list.head);
console.log(list.addToArray());

