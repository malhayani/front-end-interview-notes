// Stack 
// push - returns the stack
// pop - returns the head of the stack

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    // adds an item to the top of the stack
    push(val) {
        let node = new Node(val);
        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        this.length++;
        return this;
    }

    // removes the item at the top of the stack
    pop() {
        if (this.length > 0) {
            let current = this.first;
            let previous = null;
            let last = this.last;
            while (current.next) {
                previous = current;
                current = current.next;
            }
            if (previous) {
                this.last = previous;
                this.last.next = null;
            } else {
                this.last = null;
                this.first = null;
            }
            this.length--;
            return last;
        } else {
            return undefined;
        }
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.pop()) // 5
console.log(stack.pop()) // 4
console.log(stack.pop()) // 3
console.log(stack.pop()) // 2
console.log(stack.pop()) // 1
console.log(stack.pop()) // undefined