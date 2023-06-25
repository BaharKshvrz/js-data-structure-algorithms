var NodeItem = /** @class */ (function () {
    function NodeItem(data) {
        this.value = data;
        this.next = null;
    }
    return NodeItem;
}());
/*
 *
 * QUEUE
 *
 */
var MyQueue = /** @class */ (function () {
    function MyQueue() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    MyQueue.prototype.push = function (x) {
        var newNode = new NodeItem(x);
        if (this.length === 0) {
            this.first = this.last = newNode;
        }
        else {
            if (this.last) {
                this.last.next = newNode;
                this.last = newNode;
            }
        }
        this.length++;
        console.log('first after push:', this.first);
    };
    MyQueue.prototype.pop = function () {
        var _a, _b;
        if (this.first === this.last) {
            var popData_1 = (_b = (_a = this.first) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : 0;
            this.last = this.first = null;
            this.length = 0;
            return popData_1;
        }
        var popData = this.first.value;
        this.first = this.first.next;
        this.length--;
        console.log('first after pop:', this.first);
        return popData;
    };
    MyQueue.prototype.peek = function () {
        return this.first ? this.first.value : 0;
    };
    MyQueue.prototype.empty = function () {
        return this.first ? false : true;
    };
    return MyQueue;
}());
var obj = new MyQueue();
obj.push(1);
var param_1 = obj.pop();
obj.push(2);
//  obj.push(150);
//  var param_2 = obj.pop();
//  var param_3 = obj.pop();
var param_3 = obj.peek();
console.log('peak', param_3);
