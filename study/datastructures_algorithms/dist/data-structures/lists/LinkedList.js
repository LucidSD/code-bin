"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const List_1 = require("../List");
const collection_1 = require("../collection");
class LinkedList extends List_1.AbstractList {
    constructor(collection) {
        super();
        this.head = null;
        this.tail = null;
        this.length = 0;
        if (collection && !collection_1.isCollection(collection)) {
            this.addAll(collection);
        }
    }
    set(index, element) {
        throw new Error('Method not implemented.');
    }
    getFirst() {
        throw new Error('Method not implemented.');
    }
    getLast() {
        throw new Error('Method not implemented.');
    }
    pop() {
        throw new Error('Method not implemented.');
    }
    push(element) {
        throw new Error('Method not implemented.');
    }
    removeFirst() {
        throw new Error('Method not implemented.');
    }
    removeLast() {
        throw new Error('Method not implemented.');
    }
    peek() {
        throw new Error('Method not implemented.');
    }
    get(index) {
        let currNode = this.head;
        const tail = this.tail;
        let cursor = 0;
        while (currNode && currNode !== tail) {
            currNode = currNode.next;
            if (index === cursor && currNode) {
                return currNode.val;
            }
            cursor += 1;
        }
        return null;
    }
    addFirst(element) {
        const newNode = new LinkedList.Node(element);
        newNode.next = this.head;
        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
        this.length += 1;
    }
    addLast(element) {
        const newNode = new LinkedList.Node(element);
        if (!this.tail) {
            this.addFirst(element);
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length += 1;
    }
    add(element, index) {
        if (index)
            this.checkRange(index);
        if (!this.head || index === 0) {
            this.addFirst(element);
            return;
        }
        if (!index || index === this.size()) {
            this.addLast(element);
            return;
        }
        let currNode = this.head;
        let prevNode = currNode;
        const newNode = new LinkedList.Node(element);
        if (index && this.checkRange(index)) {
            let cursor = 0;
            while (currNode && currNode !== this.tail) {
                currNode = currNode.next;
                if (index && index === cursor + 1) {
                    break;
                }
                prevNode = currNode;
                cursor += 1;
            }
        }
        newNode.next = currNode;
        if (prevNode) {
            prevNode.next = newNode;
        }
        this.length += 1;
    }
    *generator() {
        let current = this.head;
        while (current) {
            yield current.val;
            current = current.next;
        }
    }
    testLoop() {
        let it = this.generator();
        for (let i of it) {
            console.log('wow');
            console.log(i);
        }
    }
    testIterator() {
        const that = this;
        return new class {
            constructor() {
                this.it = that.generator();
                this.current = this.it.next();
            }
            next() {
                let value = this.current.value;
                this.current = this.it.next();
                return value;
            }
            hasNext() {
                return (!this.current.done);
            }
            remove() {
                throw new Error('Method not implemented.');
            }
        };
    }
    iterator() {
        const that = this;
        let cursor = this.head;
        const tail = this.tail;
        // eslint-disable-next-line new-parens
        return new class {
            next() {
                if (!cursor || (cursor.next === tail)) {
                    return null;
                }
                cursor = cursor.next;
                return cursor.val;
            }
            hasNext() {
                return !cursor || (cursor !== tail && cursor.next !== tail);
            }
            remove() {
                const tmp = cursor.prev;
                // that.removeNode(cursor);
                cursor = tmp;
            }
        };
    }
    size() {
        return this.length;
    }
}
exports.default = LinkedList;
// eslint-disable-next-line @typescript-eslint/no-shadow
LinkedList.Node = class LinkedListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
    toString() {
        return 'butt';
    }
    testtString() {
        return 'butt';
    }
};
class DoublyLinkedList extends LinkedList {
    constructor() {
        super();
        this.prev = null;
    }
    set(index, element) {
        throw new Error('Method not implemented.');
    }
    getFirst() {
        throw new Error('Method not implemented.');
    }
    getLast() {
        throw new Error('Method not implemented.');
    }
    pop() {
        throw new Error('Method not implemented.');
    }
    push(element) {
        throw new Error('Method not implemented.');
    }
    removeFirst() {
        throw new Error('Method not implemented.');
    }
    removeLast() {
        throw new Error('Method not implemented.');
    }
    peek() {
        throw new Error('Method not implemented.');
    }
    addFirst(element) {
        const newNode = new LinkedList.Node(element);
        newNode.next = this.head;
        if (this.head) {
            this.head.prev = newNode;
        }
        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
        this.length += 1;
    }
    addLast(element) {
        const newNode = new LinkedList.Node(element);
        if (!this.tail) {
            this.addFirst(element);
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length += 1;
    }
    add(element, index) {
        if (index)
            this.checkRange(index);
        if (!this.head || index === 0) {
            this.addFirst(element);
            return;
        }
        if (!index || index === this.size()) {
            this.addLast(element);
            return;
        }
        let currNode = this.head;
        let prevNode = currNode;
        const newNode = new LinkedList.Node(element);
        if (index && this.checkRange(index)) {
            let cursor = 0;
            while (currNode && currNode !== this.tail) {
                currNode = currNode.next;
                if (index && index === cursor + 1) {
                    break;
                }
                prevNode = currNode;
                cursor += 1;
            }
        }
        newNode.next = currNode;
        currNode.prev = newNode;
        prevNode.next = newNode;
        newNode.prev = prevNode;
        this.length += 1;
    }
}
exports.DoublyLinkedList = DoublyLinkedList;
const linkedList = new LinkedList();
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
console.log(linkedList.toArray());
linkedList.add(6);
let it = linkedList.testIterator();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
debugger;
// clear
// foreach
//# sourceMappingURL=LinkedList.js.map