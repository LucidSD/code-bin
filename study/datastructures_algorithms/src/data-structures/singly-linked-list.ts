
import {
	getDataExtractorApi,
	createGraphFromPointers,
} from "@hediet/debug-visualizer-data-extraction";

getDataExtractorApi().registerDefaultExtractors();


interface ILinkedList<T> {
    insertAtHead(data: T): void;
    insertAtTail(data: T): void;
    insertAtIndex(index: number,data: T): void;
    getHead(): LinkListNode<T> | null;
    getTail(): LinkListNode<T> | null;
    getAtIndex(index: number): LinkListNode<T> | null;
    removeAtHead(): void;
    removeAtTail(): void;
    removeAtIndex(index: number): void;
    size(): number;
}
interface LinkListNode<T> {
    val: T;
    next: LinkListNode<T> | null;
}

class LinkListNode<T> implements LinkListNode<T> {
    public val: T;
    public next: LinkListNode<T> | null; 
    constructor(val: T,) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList<T> implements ILinkedList<T> {
    private _size: number;
    private head: LinkListNode<T> | null;
    private tail: LinkListNode<T> | null;
    constructor() {
        this._size = 0;
        this.head = null;
        this.tail = null;
    }


    
    insertAtHead(val: T): void {
        let newNode = new LinkListNode(val);
        newNode.next = this.head;
        this.head = newNode;
        if(!this.tail) {
            this.tail = this.head;
        }
        this._size++;
    }

    insertAtTail(val: T): void {
        let newNode = new LinkListNode(val);
        let currNode = this.getTail();
        if(!currNode) {
            this.head = newNode;
        } else {
            currNode.next = newNode;
        }
        this.tail = newNode;
        this._size++;
    }

    insertAtIndex(index: number, val: T): void {
        try {
            if(index > this._size || index < 0) {
                return;
            }
            let newNode = new LinkListNode(val); 
            let currNode = this.getAtIndex(index);
            let prevNode = this.getAtIndex(index - 1);
            if(!prevNode) {
                this.insertAtHead(val);
                return;
            }
            prevNode.next = newNode;
            newNode.next = currNode;
            this._size++;
        } catch(error) {
            console.log(error);
        }           
    }

    getHead(): LinkListNode<T> | null {
        return this.head;
    }

    getTail(): LinkListNode<T> | null {
        if(this._size <= 0) {
            return null;
        }
        return this.tail;
    }

    getAtIndex(index: number): LinkListNode<T> | null {
        if(index > this._size || index < 0) {
            return null;
        }
        let currNode = this.head;
        for(let i = 0; i < index && currNode; i++) {
            currNode = currNode.next;
        }
        return currNode;
    }

    removeAtHead(): void {
        if(!this.head) {
            return;
        }
        if(this.head.next) {
            this.head = this.head.next;
        } else {
            this.head = null;
        }
        this._size--;
    }

    removeAtTail(): void {
        if(!this.head) {
            return;
        }
        const prevNode = this.getAtIndex(this._size - 2);
        if(!prevNode) {
            // if no previous node, then the tail is the head
            this.removeAtHead();
            this.tail = null;
        } else {
            prevNode.next = null;
            this.tail = prevNode;
        }
        this._size--;
    }

    removeAtIndex(index: number): void {
        if(index > this._size || index < 0) {
            return;
        }
        if(index === 0) {
            this.removeAtHead();
            return;
        }
        const currNode = this.getAtIndex(index);
        const prevNode = this.getAtIndex(index - 1);
        if(!currNode || !prevNode) {
            return;
        }
        prevNode.next = currNode.next;
        this._size--;
    }

    size(): number {
        return this._size;
    }
}

const map = new Map([[1,2]]);
const linkedList = new LinkedList();
debugger;
linkedList.insertAtTail("2");
linkedList.insertAtHead("4");
linkedList.insertAtHead("3");
linkedList.insertAtIndex(2, "5");
linkedList.removeAtHead();
linkedList.removeAtTail();
linkedList.insertAtTail("7");
linkedList.insertAtIndex(1,"8");
linkedList.removeAtIndex(1);
//
