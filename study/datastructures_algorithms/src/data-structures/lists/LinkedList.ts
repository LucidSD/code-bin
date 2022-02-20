import { Deque, AbstractList } from '../List';
import {
  isCollection, ICollection, ObjectIterator, AbstractCollection, IList,
} from '../collection';
import { NoSuchElementException, IllegalStateException, MethodNotImplementedException } from '../../exceptions';

declare interface Node<T> {
  val: T;
  next: Node<T> | null;
  prev: Node<T> | null;
  testtString(): string;
}

export class ArrayList<T> extends AbstractList<T> implements IList<T> {
  public elements: T[] = [];

  constructor(c: T[]) {
    super();
    if (c && c instanceof Array) {
      this.arrayToList(c);
    }
    if (c && c instanceof AbstractCollection) {
      this.addAll(c);
    }
  }

  public arrayToList(arr: T[]): void {
    this.elements = arr;
  }

  public get(index: number): T {
    throw new MethodNotImplementedException();
  }

  public set(index: number, element: T): void {
    throw new MethodNotImplementedException();
  }

  public iterator(): ObjectIterator<T> {
    const that = this;
    let index = 0;

    function* generator(): Generator<T> {
      while (index < that.elements.length) {
        yield that.elements[index];
        index += 1;
      }
    }

    // eslint-disable-next-line new-parens
    return new class implements ObjectIterator<T> {
      private it: Generator<T>;

      private current: any;

      constructor() {
        this.it = generator();
        this.current = this.it.next();
      }

      next(): T {
        const value: T = this.current.value;
        this.current = this.it.next();
        return value;
      }

      hasNext(): boolean {
        return !this.current.done;
      }

      remove(): void {
        throw new MethodNotImplementedException();
        // that.removeNode(this.current.value);
      }
    };
  }

  public size(): number {
    return this.elements.length;
  }
}

export class LinkedList<T> extends AbstractList<T> implements Deque<T> {
  protected length: number;

  public head: Node<T> | null;

  public tail: Node<T> | null;

  constructor(collection?: ICollection<T>) {
    super();
    this.head = null;
    this.tail = null;
    this.length = 0;
    if (collection && isCollection(collection)) {
      this.addAll(collection);
    }
  }

  public set(index: number, element: T): void {
    throw new MethodNotImplementedException();
  }

  /*
    Returns the first element or throws exeption if null
  */
  getFirst(): T {
    if (!this.head) {
      throw new IllegalStateException();
    }
    return this.head.val;
  }

  getLast(): T {
    if (!this.tail) {
      throw new IllegalStateException();
    }
    return this.tail.val;
  }

  pop(): T {
    // this.removeFirst();
    throw new MethodNotImplementedException();
  }

  push(element: T): void {
    throw new MethodNotImplementedException();
  }

  removeFirst(): T {
    const currNode = this.head;
    if (!currNode) {
      throw new NoSuchElementException();
    }
    if (!currNode.next) {
      this.tail = null;
      this.head = null;
    } else {
      this.head = currNode.next;
    }
    this.length -= 1;
    return currNode.val;
  }

  removeLast(): T {
    const tail = this.tail;
    if (!tail) {
      throw new NoSuchElementException();
    }
    this.removeNode(tail);
    return tail.val;
  }

  private removeHeadNode() {
    if (!this.head) {
      throw new NoSuchElementException();
    }
    this.removeNode(this.head);
  }

  private removeNode(targetNode: Node<T>) {
    if (!this.head) {
      throw new NoSuchElementException();
    }
    let currNode = this.head;
    let prevNode = currNode;

    while (currNode !== targetNode && currNode.next) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    if (currNode.next) {
      prevNode.next = currNode.next;
    }
    if (currNode === this.tail) {
      this.tail = prevNode;
      prevNode.next = null;
    }
    if (currNode === this.head) {
      this.head = currNode.next;
    }
    this.length -= 1;
  }

  clear(): void {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /*
    Returns the first element or null if it doesn't exist
  */
  peek(): T {
    throw new MethodNotImplementedException();
  }

  get(index: number): T {
    this.checkRange(index);
    let currNode = this.head;
    if (!currNode) {
      throw new IllegalStateException();
    }
    for (let i = 0; i < index && currNode.next; i++) {
      currNode = currNode.next;
    }
    return currNode.val;
  }

  public addFirst(element: T): void {
    const newNode = new LinkedList.Node(element);
    newNode.next = this.head;
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
    this.length += 1;
  }

  public addLast(element: T): void {
    const newNode = new LinkedList.Node(element);
    if (!this.tail) {
      this.addFirst(element);
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }

  public add(element: T, index?: number): void {
    if (index) this.checkRange(index);
    if (!this.head || index === 0) {
      this.addFirst(element);
      return;
    }
    if (!index || index === this.size()) {
      this.addLast(element);
      return;
    }
    let currNode: Node<T> | null = this.head;
    let prevNode: Node<T> | null = currNode;
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

  public iterator(): ObjectIterator<T> {
    const head = this.head;
    const that = this;

    function* generator(): Generator<Node<T>> {
      let current: Node<T> | null = head;
      while (current) {
        yield current;
        current = current.next;
      }
    }

    // eslint-disable-next-line new-parens
    return new class implements ObjectIterator<T> {
      private it: Generator<Node<T>>;

      private current: any;

      constructor() {
        this.it = generator();
        this.current = this.it.next();
      }

      next(): T {
        const value: T = this.current.value.val;
        this.current = this.it.next();
        return value;
      }

      hasNext(): boolean {
        return !this.current.done;
      }

      remove(): void {
        // throw new MethodNotImplementedException();
        that.removeNode(this.current.value);
      }
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-shadow
  public static Node = class LinkedListNode<T> implements Node<T> {
    public val: T;

    public next: Node<T> | null;

    public prev: Node<T> | null;

    public constructor(val: T) {
      this.val = val;
      this.next = null;
      this.prev = null;
    }

    public toString(): string {
      return 'butt';
    }

    public testtString(): string {
      return 'butt';
    }
  };

  public size(): number {
    return this.length;
  }
}

export class DoublyLinkedList<T> extends LinkedList<T> {
  public set(index: number, element: T): void {
    throw new MethodNotImplementedException();
  }

  getFirst(): T {
    throw new MethodNotImplementedException();
  }

  getLast(): T {
    throw new MethodNotImplementedException();
  }

  pop(): T {
    throw new MethodNotImplementedException();
  }

  push(element: T): void {
    throw new MethodNotImplementedException();
  }

  removeFirst(): T {
    throw new MethodNotImplementedException();
  }

  removeLast(): T {
    throw new MethodNotImplementedException();
  }

  peek(): T {
    throw new MethodNotImplementedException();
  }

  private prev: Node<T> | null;

  constructor() {
    super();
    this.prev = null;
  }

  public addFirst(element: T): void {
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

  public addLast(element: T): void {
    const newNode = new LinkedList.Node(element);
    if (!this.tail) {
      this.addFirst(element);
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length += 1;
  }

  public add(element: T, index?: number): void {
    if (index) this.checkRange(index);
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
        currNode = currNode.next!;
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
