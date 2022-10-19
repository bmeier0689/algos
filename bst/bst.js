class Node {
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }
    add(val){
        var newNode = new Node(val);
        if(this.root === null)
            this.root = newNode;
        else
            this.insertNode(this.root, newNode);
    }
    insertNode(node, newNode) {
        if(newNode.data < node.data){
            if(node.left === null)
                node.left = newNode;
            else
                this.insertNode(node.left, newNode);
        }
        else {
            if(node.right === null)
                node.right = newNode;
            else
                this.insertNode(node.right, newNode);
        }
    }
    contains(node, val) {
        if(node === null)
            return null;
        else if(data < node.val)
            return this.search(node.left, val);
        else if(data > node.val)
            return this.search(node.right, val);
        else
            return node;
    }
    min(node){
        if(node.left === null)
            return node;
        else
            return this.min(node.left);
    }
    max(node){
        var current = node;
        while(current.right != null)
            current = current.right;
        return (current.data)
    }
}