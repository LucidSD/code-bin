import { link } from 'fs';
import { runInThisContext } from 'vm';
import { Deque, AbstractList } from '../List';
import { isCollection, ICollection, ObjectIterator } from '../collection';
import { NoSuchElementException, IndexOutOfBoundsException, MethodNotImplementedException } from '../../exceptions';

declare interface Node<T> {
  val: T;
  next: Node<T> | null;
  prev: Node<T> | null;
  testtString(): string;
}

export default class LinkedList<T> extends AbstractList<T> implements Deque<T> {
  public set(index: number, element: T): void {
    throw new MethodNotImplementedException();
  }

  /*
    Returns the first element or throws exeption if null
  */
  getFirst(): T {
    throw new MethodNotImplementedException();
  }

  getLast(): T {
    throw new MethodNotImplementedException();
  }

  pop(): T {
    this.removeFirst();
  }

  push(element: T): void {
    throw new MethodNotImplementedException();
  }

  removeFirst(): void {
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
  }

  removeLast(): void {
    if (!this.tail) {
      throw new NoSuchElementException();
    }
    this.removeNode();
  }

  private removeHeadNode() {
    if (!this.head) {
      throw new NoSuchElementException();
    }
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

  protected length: number;

  protected head: Node<T> | null;

  protected tail: Node<T> | null;

  constructor(collection?: ICollection<T>) {
    super();
    this.head = null;
    this.tail = null;
    this.length = 0;

    if (collection && !isCollection(collection)) {
      this.addAll(collection);
    }
  }

  get(index: number): T {
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
    return <any>null;
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

      private current;

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

  removeFirst(): void {
    throw new MethodNotImplementedException();
  }

  removeLast(): void {
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
const linkedList = new LinkedList();
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
console.log(linkedList.toArray());
const it = linkedList.iterator();
console.log(it.next());
console.log(it.hasNext());
console.log(it.next());
console.log(it.hasNext());
console.log(it.next());
console.log(it.hasNext());
// clear
// foreach
