class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    // Add item to the end of the queue
    enqueue(val) {
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

    // Remove item from the beginning of queue
    dequeue() {
        if (this.first) {
            let first = this.first;
            this.first = this.first.next;
            this.length--;
            return first;
        } else {
            return undefined;
        }
    }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.log(queue.dequeue()) // 1
console.log(queue.dequeue()) // 2
console.log(queue.dequeue()) // 3
console.log(queue.dequeue()) // 4
console.log(queue.dequeue()) // 5
console.log(queue.dequeue()) // undefined