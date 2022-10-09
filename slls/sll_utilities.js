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
    contains(value) {
        runner = this.head;
        while(runner) {
            if (runner.val === val) {
                return true
            }
            runner = runner.next
        }
        return false
    }
    length() {
        var temp = this.head;
        var count = 0;
        while (temp != null) {
            count++
            temp = temp.next
        }
        return count
    }
    display() {
        runner = this.head;
        str = "";
        while(runner) {
            str += runner.val;
            runner = runner.next;
        }
        return str
    }
}