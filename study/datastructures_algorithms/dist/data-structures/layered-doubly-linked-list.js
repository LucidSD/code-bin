"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LayeredLinkedList {
    constructor(c) {
        this._size = 0;
        this.head = null;
        this.tail = null;
        if (c instanceof Array) {
            this.insertAll(c);
        }
    }
    insertAtHead(val) {
        const newNode = new LayeredLinkedList.Node(val);
        newNode.next = this.head;
        if (this.head) {
            this.head.prev = newNode;
        }
        this.head = newNode;
        if (!this.tail) {
            this.tail = this.head;
        }
        this._size += 1;
    }
    insertAtTail(val) {
        const newNode = new LayeredLinkedList.Node(val);
        const currNode = this.tail;
        if (!currNode) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            currNode.next = newNode;
            newNode.prev = currNode;
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
            const newNode = new LayeredLinkedList.Node(val);
            const currNode = this.getAtIndex(index);
            if (!currNode) {
                return;
            }
            const prevNode = this.getAtIndex(index - 1);
            if (prevNode) {
                prevNode.next = newNode;
                newNode.prev = prevNode;
            }
            newNode.next = currNode;
            currNode.prev = newNode;
            this._size += 1;
        }
        catch (error) {
            console.error(error);
        }
    }
    insertAll(arr) {
        arr.forEach((el) => {
            this.insertAtTail(el);
        });
    }
    insertChild(currNode, val) {
        if (currNode.child) {
            throw new Error('Node already has a child');
        }
        if (val instanceof LayeredLinkedList.Node) {
            currNode.child = val;
        }
        else {
            currNode.child = new LayeredLinkedList.Node(val);
        }
        this._size += 1;
    }
    insertChildAtIndex(index, val) {
        if (index > this._size || index < 0) {
            return;
        }
        const currNode = this.getAtIndex(index);
        if (currNode && currNode.child) {
            throw new Error('Node already has a child');
        }
        if (!currNode) {
            throw new Error('Node not valid');
        }
        this.insertChild(currNode, val);
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
            this.head.prev = null;
        }
        else {
            this.head = null;
        }
        this._size -= 1;
    }
    removeAtTail() {
        if (!this.head || !this.tail) {
            return;
        }
        if (this._size === 1) {
            this.tail = null;
        }
        if (this.tail && this.tail.prev) {
            this.tail = this.tail.prev;
            this.tail.next = null;
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
        if (currNode.next) {
            currNode.next.prev = prevNode;
        }
        this._size -= 1;
    }
    size() {
        return this._size;
    }
}
exports.default = LayeredLinkedList;
// eslint-disable-next-line @typescript-eslint/no-shadow
LayeredLinkedList.Node = class LinkedListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
        this.child = null;
    }
};
const linkedList = new LayeredLinkedList();
linkedList.insertAtTail('1');
linkedList.insertAtTail('2');
linkedList.insertAtTail('3');
const linkedList2 = new LayeredLinkedList();
linkedList2.insertAtTail('4');
linkedList2.insertAtTail('5');
linkedList2.insertAtTail('6');
const node = linkedList2.getHead();
linkedList.insertChildAtIndex(2, node);
linkedList2.insertAtTail('7');
//# sourceMappingURL=layered-doubly-linked-list.js.map