/*
    A data structure the contains a head, tail and length property.
    Consists of nodes, and each node has a value and a pointer to another node or null.
    There isno index. You have to move through the nodes 
    Random access is not allowed. You have to traverse.
    Insertion and deletion is good because you don't have to reindex.
*/

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // add an item to the end of the list
    push(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }

    // add an item to the beginning of the list
    unshift(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
    }

    // loops through the list and logs it
    traverse() {
        let current = this.head;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }

    // remove and replace the tail
    pop() {
        if (!this.head) return undefined;
        else {
            let current = this.head;
            let previous = null;
            let tail = this.tail;
            while (current.next) {
                previous = current;
                current = current.next;
            }
            this.tail = previous;
            this.tail.next = null;
            this.length--;
            return tail;
        }
    }

    // remove and replace the head 
    shift() {
        if (!this.head) return undefined;
        else {
            let currentHead = this.head;
            this.head = this.head.next;
            this.length--;
            return currentHead;
        }
    }

    // Return the node at the index
    get(index) {
        if (index > this.length || index < 0) return null;
        else {
            let counter = 0;
            let current = this.head;
            while (counter !== index) {
                current = current.next;
                counter++;
            }
            return current;
        }
    }

    // set the value of the node at the index
    set(val, index) {
        let node = this.get(index);
        if (!node) return false;
        else {
            node.val = val;
            return true;
        }
    }

    // insert a new node at the position
    insert(val, index) {
        let newNode = new Node(val);
        let previousNode = this.get(index - 1);
        let nextNode = this.get(index);
        if (!previousNode) {
            this.head = newNode;
            this.head.next = nextNode;
            this.length++
        } else if (!nextNode) {
            previousNode.next = newNode;
            this.tail = newNode;
            this.length++;
        } else if (previousNode && nextNode) {
            newNode.next = nextNode;
            previousNode.next = newNode;
            this.length++;
        }
    }

    // remove the item at the index
    remove(index) {
        // removing the head
        if (index === 0) {
            let node = this.get(index + 1);
            if (node) {
                this.head = node;
                this.length--;
            }
            // removing the tail
        } else if (index - 1 === this.length) {
            let node = this.get(index - 1);
            if (node) {
                this.tail = node;
                this.tail.next = null;
                this.length--;
            }
            // removing from the middle
        } else {
            let previousNode = this.get(index - 1);
            let node = this.get(index);
            if (node) {
                previousNode.next = node.next;
                this.length--;
            }
        }
    }

    // reverse the list without creating a new one
    reverse() {
        let tail = this.tail;
        let head = this.head;
        this.tail = head;
        this.head = tail;

        let previous = null;
        let node = head;
        let next = node.next;
        let counter = 0;

        while (counter < this.length) {
            next = node.next;
            node.next = previous;
            previous = node;
            node = next;
            counter++;
        }
    }
}

let list = new SinglyLinkedList();
list.push('hi');
list.push('there');
list.push('my');
list.push('friend');
list.traverse();

list.pop();
console.log('---')
list.traverse();

list.shift();
console.log('---')
list.traverse();

list.unshift('hi');
console.log('---')
list.traverse();


console.log('---')
console.log(list.get(2));
console.log('---')

list.set('hello', 0);
list.traverse();

console.log('---')
list.insert('good bye', 1);
list.traverse();

console.log('---')
list.remove(1);
list.traverse();

console.log('---')
list.reverse();
list.traverse();