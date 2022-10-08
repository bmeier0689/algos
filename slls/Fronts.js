class Node {
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinkedList {
    constructor() {
        this.head=null
    }
    getFront(this){
        if(this.head){
            return this.head.val
        }
    }
    removeFront(){
        if(this.size === 0)
            return null
        let data = this.header.data;
        if(this.size === 1){
            this.header = null;
            this.tail = null;
        }
        else
            this.header = this.header.next;
        this.size--;
        return data
    }
    addFront(val){
        new_node = new Node(val);
        if(!this.head){
            this.head=new_node;
            return this;
        }
        new_node.next=this.head;
        this.head=new_node;
        return self
    }
}