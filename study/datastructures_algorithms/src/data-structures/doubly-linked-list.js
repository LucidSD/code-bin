class Node {
    constructor(data) {
        this.val = data;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
}

LinkedList.prototype.insertAtHead = function(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.size++;
}

LinkedList.prototype.insertAtTail = function(val) {
    let newNode = new Node(val);
    if(!this.head) {
        this.head = newNode;
        return;
    }
    let currNode = this.getTail();
    currNode.next = newNode;
    newNode.prev = currNode;
    this.size++;
}

LinkedList.prototype.insertAtIndex = function(index,val) {
    let newNode = new Node(val);
    if(!this.head) {
        this.head = newNode;
        return;
    } 
    let currNode = this.getAtIndex(index);
    let prevNode = this.getAtIndex(index - 1);
    if(!currNode || !prevNode) return;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = currNode;
    currNode.prev = newNode;
    this.size++;
}

LinkedList.prototype.getTail = function() {
    let currNode = this.head;
    while(currNode && currNode.next) {
        currNode = currNode.next;
    }
    return currNode;
}

LinkedList.prototype.getAtIndex = function(index) {
    if(!this.head || index > this.size) {
        return null;
    }
    let currNode = this.head;
    for(let i = 0; i < index && currNode; i++) {
        currNode = currNode.next;
    }
    return currNode;
}

LinkedList.prototype.removeAtHead = function() {
    if(!this.size) {
        return;
    }
    console.log(this.head.val)
    this.head = this.head.next;
    this.head.prev = null;
    this.size--;
}

LinkedList.prototype.removeAtTail = function() {
    if(!this.size) {
        return;
    }
    const prevNode = this.getAtIndex(this.size - 1);
    prevNode.next = null;
    this.size--;
}

LinkedList.prototype.removeAtIndex = function(index) {
    if(!this.size) {
        return;
    }
    const currNode = this.getAtIndex(index);
    const prevNode = this.getAtIndex(index - 1);
    prevNode.next = currNode.next;
    currNode.next.prev = prevNode;
    this.size--;
}

const linkedList = new LinkedList();
debugger;
linkedList.insertAtTail("7");
linkedList.insertAtTail("1");
linkedList.insertAtTail("2");
linkedList.insertAtTail("3");
linkedList.insertAtTail("4");
linkedList.insertAtTail("5");
linkedList.insertAtTail("6");
linkedList.insertAtTail("8");
linkedList.insertAtTail("9");
linkedList.removeAtTail();
linkedList.removeAtHead();
linkedList.removeAtTail();
linkedList.removeAtIndex(4);
linkedList.insertAtIndex(4, "5");