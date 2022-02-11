"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LinkedList {
    constructor() {
        this._size = 0;
        this.head = null;
        this.tail = null;
    }
    insertAtHead(val) {
        const newNode = new LinkedList.Node(val);
        newNode.next = this.head;
        this.head = newNode;
        if (!this.tail) {
            this.tail = this.head;
        }
        this._size += 1;
    }
    insertAtTail(val) {
        const newNode = new LinkedList.Node(val);
        const currNode = this.getTail();
        if (!currNode) {
            this.head = newNode;
        }
        else {
            currNode.next = newNode;
        }
        this.tail = newNode;
        this._size += 1;
    }
    insertAtIndex(index, val) {
        try {
            if (index > this._size || index < 0) {
                throw new Error('Not a valid index');
            }
            if (index === 0) {
                this.insertAtHead(val);
                return;
            }
            if (index === this._size) {
                this.insertAtTail(val);
                return;
            }
            const newNode = new LinkedList.Node(val);
            const currNode = this.getAtIndex(index);
            const prevNode = this.getAtIndex(index - 1);
            if (!prevNode) {
                this.insertAtHead(val);
                return;
            }
            prevNode.next = newNode;
            newNode.next = currNode;
            this._size += 1;
        }
        catch (error) {
            console.error(error);
        }
    }
    getHead() {
        return this.head;
    }
    getTail() {
        if (this._size <= 0) {
            return null;
        }
        return this.tail;
    }
    getAtIndex(index) {
        if (index > this._size || index < 0) {
            return null;
        }
        let currNode = this.head;
        for (let i = 0; i < index && currNode; i++) {
            currNode = currNode.next;
        }
        return currNode;
    }
    removeAtHead() {
        if (!this.head) {
            return;
        }
        if (this.head.next) {
            this.head = this.head.next;
        }
        else {
            this.head = null;
        }
        this._size -= 1;
    }
    removeAtTail() {
        if (!this.head) {
            return;
        }
        const prevNode = this.getAtIndex(this._size - 2);
        if (!prevNode) {
            // if no previous node, then the tail is the head
            this.removeAtHead();
            this.tail = null;
        }
        else {
            prevNode.next = null;
            this.tail = prevNode;
        }
        this._size -= 1;
    }
    removeAtIndex(index) {
        if (index > this._size || index < 0) {
            return;
        }
        if (index === 0) {
            this.removeAtHead();
            return;
        }
        if (index === this._size - 1) {
            this.removeAtTail();
            return;
        }
        const currNode = this.getAtIndex(index);
        const prevNode = this.getAtIndex(index - 1);
        if (!currNode) {
            return;
        }
        if (prevNode) {
            prevNode.next = currNode.next;
        }
        this._size -= 1;
    }
    size() {
        return this._size;
    }
}
exports.default = LinkedList;
// eslint-disable-next-line @typescript-eslint/no-shadow
LinkedList.Node = class _Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
};
const linkedList = new LinkedList();
debugger;
linkedList.insertAtTail('8');
linkedList.insertAtTail('1');
linkedList.insertAtTail('2');
linkedList.insertAtTail('3');
linkedList.insertAtTail('4');
linkedList.insertAtTail('5');
linkedList.insertAtTail('6');
linkedList.insertAtTail('8');
linkedList.removeAtHead();
linkedList.removeAtTail();
linkedList.removeAtIndex(1);
linkedList.removeAtIndex(4);
linkedList.insertAtIndex(4, '7');
linkedList.insertAtIndex(3, '9');
linkedList.insertAtIndex(1, '10');
//# sourceMappingURL=LinkedList.js.map