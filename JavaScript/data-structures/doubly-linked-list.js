class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Add value to end
    push(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.previous = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }

    // Add item to the beginning
    unshift(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.previous = node;
            node.next = this.head;
            this.head = node;
        }
        this.length++;
    }

    // log the nodes
    traverse() {
        let current = this.head;
        while (current) {
            console.log(current.val);
            // console.log('\n');
            current = current.next;
        }
    }

    // get item at index
    get(index) {
        let current = this.head;
        let counter = 0;
        while (counter < index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    // remove from end
    pop() {
        if (this.tail) {
            this.tail = this.tail.previous;
            this.tail.next = null;
            this.length--;
            return true;
        } else {
            return false;
        }
    }

    // remove from beginning
    shift() {
        if (!this.head) {
            return false;
        } else {
            this.head = this.head.next;
            this.head.previous = null;
            this.length--;
        }
    }

    // set value at index
    set(val, index) {
        let newNode = new Node(val);
        let oldNode = this.get(index);
        if (oldNode) {
            newNode.next = oldNode.next;
            newNode.previous = oldNode.previous;
            oldNode = newNode;
        }
        if (index === 0) {
            this.head = newNode;
        }
        if (index === this.length - 1) {
            this.tail = newNode;
        }
    }

    // insert at index
    insert(val, index) {
        let newNode = new Node(val);
        let node = this.get(index);
        newNode.previous = node.previous;
        newNode.next = node;
        node.previous.next = newNode;
        node.previous = newNode;
        this.length++;

        if (index === 0) {
            this.head = newNode;
        }

        if (index === this.length - 1) {
            this.tail = newNode;
        }
    }

    // remove at index
    remove(index) {
        let node = this.get(index);
        if (node) {
            node.previous.next = node.next;
            node.next.previous = node.previous;
        }
        if (index === 0) {
            this.head = node.next;
            this.head.previous = null;
        }

        if (index === this.length - 1) {
            this.tail = node.previous;
            this.tail.next = null;
        }
    }

    // reverse the order
    reverse() {
        let head = this.head;
        let tail = this.tail;
        this.head = tail;
        this.tail = head;
        let node = tail;
        let previous = node.previous;
        let next = node.next;

        while (node.previous) {
            node.previous = next;
            node.next = previous;
            node = previous;
            next = previous.next;
            previous = previous.previous;
        }

        this.head.previous = null;
        this.tail.next = null;
    }
}

let list = new DoublyLinkedList();

list.push('Sarah');
list.push('Paul');
list.unshift('Erin');
console.log('---')
list.traverse(); // Erin Sarah Paul

// console.log(list.get(0)); // Erin

list.pop();
console.log('---')
list.traverse(); // Erin Sarah

list.shift();
console.log('---')
list.traverse(); // Sarah

list.set('Rhea', 0);
console.log('---')
list.traverse(); // Pineapple

list.push('Bean');
list.insert('Legume', 1);
list.unshift('Pineapple');
console.log('---')
list.traverse(); // Pineapple Rhea Legume Bean

list.remove(2);
console.log('---')
list.traverse(); // Pineapple Rhea Bean

list.insert('Legume', 2);
list.reverse();
console.log('---')
list.traverse(); // Bean Legume Rhea Pineapple
