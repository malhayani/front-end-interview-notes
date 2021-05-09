// A data structure that consists of parents and child nodes
// nonlinear
// a node can only point to a child. Otherwise it's a graph
// root top of tree. leaf is node with node children
// edge connection between parent and child

// binary tree - each node can have at most 2 children. Can have 0, 1, or 2 children
// binary search tree - binary tree but they are sorted. every node to the left is always less than the parent.
// every node to the right is always greater than the parent

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val);

        const checkNodes = (node, newNode) => {
            if (newNode.value > node.value) {
                if (node.right) {
                    return checkNodes(node.right, newNode);
                } else {
                    node.right = newNode;
                    return node;
                }
            } else {
                if (node.left) {
                    return checkNodes(node.left, newNode);
                } else {
                    node.left = newNode;
                    return node;
                }
            }
        }

        if (!this.root) this.root = newNode;
        else {
            checkNodes(this.root, newNode);
        }
    }

    find(val) {
        const checkNodes = (node, val) => {
            if (val > node.value) {
                return checkNodes(node.right, val);
            } else if (val < node.value) {
                return checkNodes(node.left, val);
            } else {
                return node;
            }
        }


        if (!this.root) return null;
        else {
            return checkNodes(this.root, val)
        }
    }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(15);
tree.insert(5);
console.log(tree)
console.log(tree.find(5))