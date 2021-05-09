class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    push(val) {
        const findSpot = (currentNode) => {
            if (node.val > currentNode.val) {
                if (currentNode.right) findSpot(currentNode.right);
                else currentNode.right = node;
            } else {
                if (currentNode.left) findSpot(currentNode.left);
                else currentNode.left = node;
            }
        }

        let node = new Node(val);
        if (!this.root) {
            this.root = node;
        } else {
            findSpot(this.root);
        }
    }

    // this only works because it is a sorted tree
    find(val) {
        const findNode = (currentNode, val) => {
            if (val === currentNode.val) {
                return currentNode;
            } else if (val > currentNode.val) {
                if (currentNode.right) return findNode(currentNode.right, val);
            } else {
                if (currentNode.left) return findNode(currentNode.left, val);
            }
        }

        if (!this.root) {
            return null;
        } else {
            return findNode(this.root, val);
        }
    }

    // if the tree is not sorted, you can do this
    bfs() {
        let queue = [this.root];
        let visited = [];

        while (queue.length > 0) {
            let currentNode = queue.shift();
            visited.push(currentNode);
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return visited;
    }
    // visits the node while going down the branch
    dfs_pre() {
        let visited = [];
        const traverse = (node) => {
            visited.push(node.val);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return visited;
    }
    // traverses to the bottom and visits the nodes on the way back up
    dfs_post() {
        let visited = [];
        const traverse = (node) => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            visited.push(node.val);
        }
        traverse(this.root);
        return visited;
    }

    dfs_in_order() {
        let visited = [];
        const traverse = (node) => {
            if (node.left) traverse(node.left);
            visited.push(node.val);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return visited;
    }
}

let tree = new BinaryTree();
tree.push(10);
tree.push(5);
tree.push(15);
tree.push(2);
tree.push(7);
tree.push(12);
tree.push(17);
tree.push(1);
tree.push(3);
console.log(tree);
console.log(tree.find(12))

console.log(tree.bfs())
console.log(tree.dfs_pre())
console.log(tree.dfs_post())
console.log(tree.dfs_in_order())