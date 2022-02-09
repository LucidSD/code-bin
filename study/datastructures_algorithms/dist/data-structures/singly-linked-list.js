"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const debug_visualizer_data_extraction_1 = require("@hediet/debug-visualizer-data-extraction");
debug_visualizer_data_extraction_1.getDataExtractorApi().registerDefaultExtractors();
let id = 0;
class LinkListNode {
    constructor(val) {
        this.id = (id++).toString();
        this.val = val;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this._size = 0;
        this.head = null;
        this.tail = null;
    }
    insertAtHead(val) {
        let newNode = new LinkListNode(val);
        newNode.next = this.head;
        this.head = newNode;
        if (!this.tail) {
            this.tail = this.head;
        }
        this._size++;
    }
    insertAtTail(val) {
        let newNode = new LinkListNode(val);
        let currNode = this.getTail();
        if (!currNode) {
            this.head = newNode;
        }
        else {
            currNode.next = newNode;
        }
        this.tail = newNode;
        this._size++;
    }
    insertAtIndex(index, val) {
        try {
            if (index > this._size || index < 0) {
                return;
            }
            let newNode = new LinkListNode(val);
            let currNode = this.getAtIndex(index);
            let prevNode = this.getAtIndex(index - 1);
            if (!prevNode) {
                this.insertAtHead(val);
                return;
            }
            prevNode.next = newNode;
            newNode.next = currNode;
            this._size++;
        }
        catch (error) {
            console.log(error);
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
        this._size--;
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
        this._size--;
    }
    removeAtIndex(index) {
        if (index > this._size || index < 0) {
            return;
        }
        if (index === 0) {
            this.removeAtHead();
            return;
        }
        const currNode = this.getAtIndex(index);
        const prevNode = this.getAtIndex(index - 1);
        if (!currNode || !prevNode) {
            return;
        }
        prevNode.next = currNode.next;
        this._size--;
    }
    size() {
        return this._size;
    }
}
const map = new Map([[1, 2]]);
const linkedList = new LinkedList();
debugger;
linkedList.insertAtTail("2");
linkedList.insertAtHead("4");
linkedList.insertAtHead("3");
linkedList.insertAtIndex(2, "5");
linkedList.removeAtHead();
linkedList.removeAtTail();
linkedList.insertAtTail("7");
linkedList.insertAtIndex(1, "8");
linkedList.removeAtIndex(1);
//
//# sourceMappingURL=singly-linked-list.js.map