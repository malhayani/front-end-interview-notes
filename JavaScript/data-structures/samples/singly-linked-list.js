// Push - takes in value and adds to end of list
// Pop - removes a node from the end of the SLL and returns the node
// Get - get a node by index
// Insert - takes in a value and index and adds the item there
// Rotate - Should rotate all the nodes in the list by some number passed in. If the list looks like 1, 2, 3, 4, 5 and you rotate by 2, the list should be 3, 4, 5, 1, 2. 
// Set - takes in an index and changes the value to the passed in value.
// Remove - remove a node from the list at an index. Return the node.

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

    get(index) {
        let count = 0;
        let currentNode = this.head;
        if (this.length < index) return null;

        while (count < index) {
            currentNode = currentNode.next;
            count++;
        }

        return currentNode;
    }

    pop() {
        if (this.length === 0) return null;
        else if (this.length === 1) {
            let node = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return node;
        } else {
            let secondToLast = this.get(this.length - 2);
            let last = this.tail;
            this.tail = secondToLast;
            this.tail.next = null;
            this.length--;
            return last;
        }
    }

    insert(val, index) {
        let node = new Node(val);
        if (index === 0) {
            let nextNode = this.head;
            node.next = nextNode;
            this.head = node;
        } else if (index >= this.length) {
            let previousNode = this.tail;
            previousNode.next = node;
            this.tail = node;
        } else {
            let nextNode = this.get(index);
            let previousNode = this.get(index - 1);
            node.next = nextNode;
            previousNode.next = node;
        }
        this.length++;
    }

    remove(index) {
        this.length--;
        if (index === 0) {
            let currentNode = this.head;
            let nextNode = this.get(index + 1);
            this.head = nextNode;
            return currentNode;
        } else if (index >= this.length) {
            let currentNode = this.tail;
            let previousNode = this.get(index - 1);
            previousNode.next = null;
            this.tail = previousNode;
            return currentNode;
        } else {
            let currentNode = this.get(index);
            let previousNode = this.get(index - 1);
            let nextNode = this.get(index + 1);
            previousNode.next = nextNode;
            return currentNode;
        }
    }

    set(val, index) {
        let node = this.get(index);
        if (node) {
            node.val = val;
            return node;
        } else {
            return null;
        }
    }

    rotate(num) {
        let counter = 0;
        let currentNode = this.head;
        while (counter < num) {
            this.head = currentNode.next;
            currentNode.next = null;
            this.tail.next = currentNode;
            this.tail = currentNode;
            counter++;
            currentNode = this.head;
        }
    }

    traverse() {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.val);
            currentNode = currentNode.next;
        }
    }
}

// let list = new SinglyLinkedList();
// list.push(1)
// list.push(2)
// list.push(3);
// console.log(list)
// console.log(list.get(1))
// console.log(list.pop())
// list.insert(3, 1)
// list.insert(4, 4)
// console.log(list)
// list.remove(3)
// list.set(2, 3);


let list2 = new SinglyLinkedList();
list2.push(1);
list2.push(2);
list2.push(3);
list2.push(4);
list2.push(5);
list2.rotate(2);
list2.traverse();