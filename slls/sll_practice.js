class Node {
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinkedList {
    constructor(){
        this.head=null;
    }
    addFront(val){
        new_node = new Node(val);
        if(!this.head){
            this.head=new_node;
            return this;
        }
        new_node.next=this.head;
        this.head=new_node;
        return self;
    }
}


class Node {
    constructor(val){
        this.val=val
        this.next=null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val) {
        let newNode = new Node(val)

        if(!this.head) {
            this.head = newNode
            this.tail = this.head
        }
        else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
}
