"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoublyLinkedList = void 0;
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
        prevNode.next = newNode;
        this.length += 1;
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
};
class DoublyLinkedList extends LinkedList {
    constructor() {
        super();
        this.prev = null;
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
// export default class LinkedList<T> implements ILinkedList<T> {
//   private _size: number;
//   private head: Node<T> | null;
//   private tail: Node<T> | null;
//   public constructor() {
//     this._size = 0;
//     this.head = null;
//     this.tail = null;
//   }
//   insertAtHead(val: T): void {
//     const newNode = new LinkedList.Node(val);
//     newNode.next = this.head;
//     this.head = newNode;
//     if (!this.tail) {
//       this.tail = this.head;
//     }
//     this._size += 1;
//   }
//   insertAtTail(val: T): void {
//     const newNode = new LinkedList.Node(val);
//     const currNode = this.getTail();
//     if (!currNode) {
//       this.head = newNode;
//     } else {
//       currNode.next = newNode;
//     }
//     this.tail = newNode;
//     this._size += 1;
//   }
//   insertAtIndex(index: number, val: T): void {
//     try {
//       if (index > this._size || index < 0) {
//         throw new Error('Not a valid index');
//       }
//       if (index === 0) {
//         this.insertAtHead(val);
//         return;
//       }
//       if (index === this._size) {
//         this.insertAtTail(val);
//         return;
//       }
//       const newNode = new LinkedList.Node(val);
//       const currNode = this.getAtIndex(index);
//       const prevNode = this.getAtIndex(index - 1);
//       if (!prevNode) {
//         this.insertAtHead(val);
//         return;
//       }
//       prevNode.next = newNode;
//       newNode.next = currNode;
//       this._size += 1;
//     } catch (error) {
//       console.error(error);
//     }
//   }
//   getHead(): Node<T> | null {
//     return this.head;
//   }
//   getTail(): Node<T> | null {
//     if (this._size <= 0) {
//       return null;
//     }
//     return this.tail;
//   }
//   getAtIndex(index: number): Node<T> | null {
//     if (index > this._size || index < 0) {
//       return null;
//     }
//     let currNode = this.head;
//     for (let i = 0; i < index && currNode; i++) {
//       currNode = currNode.next;
//     }
//     return currNode;
//   }
//   removeAtHead(): void {
//     if (!this.head) {
//       return;
//     }
//     if (this.head.next) {
//       this.head = this.head.next;
//     } else {
//       this.head = null;
//     }
//     this._size -= 1;
//   }
//   removeAtTail(): void {
//     if (!this.head) {
//       return;
//     }
//     const prevNode = this.getAtIndex(this._size - 2);
//     if (!prevNode) {
//       // if no previous node, then the tail is the head
//       this.removeAtHead();
//       this.tail = null;
//     } else {
//       prevNode.next = null;
//       this.tail = prevNode;
//     }
//     this._size -= 1;
//   }
//   removeAtIndex(index: number): void {
//     if (index > this._size || index < 0) {
//       return;
//     }
//     if (index === 0) {
//       this.removeAtHead();
//       return;
//     }
//     if (index === this._size - 1) {
//       this.removeAtTail();
//       return;
//     }
//     const currNode = this.getAtIndex(index);
//     const prevNode = this.getAtIndex(index - 1);
//     if (!currNode) {
//       return;
//     }
//     if (prevNode) {
//       prevNode.next = currNode.next;
//     }
//     this._size -= 1;
//   }
//   size(): number {
//     return this._size;
//   }
//   // eslint-disable-next-line @typescript-eslint/no-shadow
//   private static Node = class LinkedListNode<T> implements Node<T> {
//     public val: T;
//     public next: Node<T> | null;
//     public constructor(val: T) {
//       this.val = val;
//       this.next = null;
//     }
//   };
// }
const linkedList = new DoublyLinkedList();
linkedList.add('1');
linkedList.add('2');
linkedList.add('3');
linkedList.add('4');
linkedList.add('5', 0);
linkedList.add('6');
debugger;
// clear
// foreach
//# sourceMappingURL=LinkedList.js.map