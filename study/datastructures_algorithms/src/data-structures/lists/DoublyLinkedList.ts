declare interface Node<T> {
  val: T;
  next: Node<T> | null;
  prev: Node<T> | null;
}

interface IDoublyLinkedList<T> {
  insertAtHead(data: T): void;
  insertAtTail(data: T): void;
  insertAtIndex(index: number, data: T): void;
  getHead(): Node<T> | null;
  getTail(): Node<T> | null;
  getAtIndex(index: number): Node<T> | null;
  removeAtHead(): void;
  removeAtTail(): void;
  removeAtIndex(index: number): void;
  size(): number;
}

export default class DoublyLinkedList<T> implements IDoublyLinkedList<T> {
  private _size: number;

  private head: Node<T> | null;

  private tail: Node<T> | null;

  public constructor() {
    this._size = 0;
    this.head = null;
    this.tail = null;
  }

  insertAtHead(val: T): void {
    const newNode = new DoublyLinkedList.Node(val);
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

  insertAtTail(val: T): void {
    const newNode = new DoublyLinkedList.Node(val);
    const currNode = this.getTail();
    if (!currNode) {
      this.head = newNode;
    } else {
      currNode.next = newNode;
      newNode.prev = currNode;
    }
    this.tail = newNode;
    this._size += 1;
  }

  insertAtIndex(index: number, val: T): void {
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
      const newNode = new DoublyLinkedList.Node(val);
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
    } catch (error) {
      console.error(error);
    }
  }

  getHead(): Node<T> | null {
    return this.head;
  }

  getTail(): Node<T> | null {
    if (this._size <= 0) {
      return null;
    }
    return this.tail;
  }

  getAtIndex(index: number): Node<T> | null {
    if (index > this._size || index < 0) {
      return null;
    }
    let currNode = this.head;
    for (let i = 0; i < index && currNode; i++) {
      currNode = currNode.next;
    }
    return currNode;
  }

  removeAtHead(): void {
    if (!this.head) {
      return;
    }
    if (this.head.next) {
      this.head = this.head.next;
      this.head.prev = null;
    } else {
      this.head = null;
    }
    this._size -= 1;
  }

  removeAtTail(): void {
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

  removeAtIndex(index: number): void {
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

  size(): number {
    return this._size;
  }

  // eslint-disable-next-line @typescript-eslint/no-shadow
  private static Node = class _Node<T> implements Node<T> {
    public val: T;

    public next: Node<T> | null;

    public prev: Node<T> | null;

    public constructor(val: T) {
      this.val = val;
      this.next = null;
      this.prev = null;
    }
  };
}
