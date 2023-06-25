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
var inputArr = [1, 2, 3, 4, 5];
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList(val, next) {
        this.length = 1;
        this.insert = function (val, next) {
            var newNode = new ListNode(val, next);
            var leader = this.head;
            for (var i = 0; i < this.length - 1; i++) {
                leader = leader.next;
            }
            leader.next = newNode;
            this.tail = newNode;
            this.length++;
            return this.list;
        };
        var firstNode = new ListNode(val, next);
        this.head = firstNode;
        this.tail = this.head;
        this.length = 1;
    }
    LinkedList.prototype.addToArray = function () {
        var nodes = [];
        var head = this.head;
        for (var i = 0; i < this.length; i++) {
            if (head && head.val) {
                nodes.push(head.val);
                head = head.next;
            }
        }
        return nodes;
    };
    return LinkedList;
}());
function reverseList(head) {
    if (head === null)
        return null;
    var currentNode = head;
    var prevNode = null;
    var nextNode = null;
    while (currentNode) {
        nextNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = nextNode;
        nextNode = null;
    }
    head = prevNode; // reset head
    return head;
}
;
var list = new LinkedList(inputArr[0]);
for (var i = 1; i < inputArr.length; i++) {
    list.insert(inputArr[i]);
}
list.head = reverseList(list.head);
console.log(list.addToArray());
