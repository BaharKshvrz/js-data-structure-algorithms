class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
    }
 }

class DoublyLinkedList {
    constructor(data) {
       let firstNode = new ListNode(data);
       this.head = firstNode;
       this.tail = this.head;
       this.length = 1;
    }

   append = function(data) {
     let newNode = new ListNode(data);
     this.tail.next = newNode;
     newNode.prev = this.tail;
     this.tail = newNode;
     this.length++;

     return this;
   }

   prepend = function(data) {
    let newNode = new ListNode(data);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.length++;

    return this;
   }

   insert(index, data) {
    if (index > this.length) {
      return this.append(data)
    }

    if (index === 1) {
      return this.prepend(data);
    }

    const leader = this.traverseToIndex(index - 2); 
    let newNode = new ListNode(data);
    let follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
   }

   traverseToIndex(index) {
    let currentNode = this.head;
    let counter = 0;

    while(counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
   }

   traverseToDeletedIndex(index) {
    let currentNode = this.head;
    let counter = 1;

    while(counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
   }

   delete(index) {
      if (index === 1) {
        this.head = this.head.next;
        return this.list
      }

      let leader = this.traverseToIndex(index - 2);
      let unwantedNode = leader.next;
      leader.next = unwantedNode.next;
      let nextOfUnwanted = unwantedNode.next;
      nextOfUnwanted.prev = leader;
      this.length--;
   }

   printList =  function() {
     let nodes = [];
     let currentNode = this.head;  

     while(currentNode !== null) {
           nodes.push(currentNode.value);
           currentNode = currentNode.next;
        }

    return nodes;   

    }
}

let list = new DoublyLinkedList(10);
list.append(20);
list.append(30);
list.insert(4, 35);
list.append(40);
list.append(50);
list.insert(7, 60);
list.delete(1);
console.log(list.printList());  // 10 20 30 40 50 60

