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