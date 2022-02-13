import { Deque, AbstractList } from '../List';
import { isCollection, ICollection, ObjectIterator } from '../collection';

declare interface Node<T> {
  val: T;
  next: Node<T> | null;
  prev: Node<T> | null;
  testtString(): string;
}

export default class LinkedList<T> extends AbstractList<T> implements Deque<T> {
  public set(index: number, element: T): void {
    throw new Error('Method not implemented.');
  }
  getFirst(): T {
    throw new Error('Method not implemented.');
  }
  getLast(): T {
    throw new Error('Method not implemented.');
  }
  pop(): T {
    throw new Error('Method not implemented.');
  }
  push(element: T): void {
    throw new Error('Method not implemented.');
  }
  removeFirst(): void {
    throw new Error('Method not implemented.');
  }
  removeLast(): void {
    throw new Error('Method not implemented.');
  }
  peek(): T {
    throw new Error('Method not implemented.');
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

  private *generator(): Generator<T> {
    let current: Node<T> | null = this.head;
    while(current) {
      yield current.val;
      current = current.next;
    }
  }

  public testLoop(): void {
    let it = this.generator();
    for(let i of it) {
      console.log('wow')
      console.log(i);
    }
  }

  public testIterator(): ObjectIterator<T> {
    const that = this;
    return new class implements ObjectIterator<T> {
      
      private it: Generator;
      private current: any;
      constructor() {
        this.it = that.generator();
        this.current = this.it.next();
      }
      next(): any {
        let value = this.current.value;
        this.current = this.it.next();
        return value;
      }
      hasNext(): boolean {
        return (!this.current.done);
      }
      remove(): void {
        throw new Error('Method not implemented.');
      }
    }

  }


  public iterator(): ObjectIterator<T> {
    const that = this;
    let cursor: Node<T> | null = this.head;

    const tail = this.tail;

    // eslint-disable-next-line new-parens
    return new class implements ObjectIterator<T> {
      next(): T {
        if (!cursor || (cursor.next === tail)) {
          return <any>null;
        }
        cursor = cursor.next;

        return cursor!.val;
      }

      hasNext(): boolean {
        return !cursor || (cursor !== tail && cursor.next !== tail);
      }

      remove(): void {
        const tmp = cursor!.prev;
        // that.removeNode(cursor);
        cursor = tmp;
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
    throw new Error('Method not implemented.');
  }

  getFirst(): T {
    throw new Error('Method not implemented.');
  }

  getLast(): T {
    throw new Error('Method not implemented.');
  }

  pop(): T {
    throw new Error('Method not implemented.');
  }

  push(element: T): void {
    throw new Error('Method not implemented.');
  }

  removeFirst(): void {
    throw new Error('Method not implemented.');
  }

  removeLast(): void {
    throw new Error('Method not implemented.');
  }

  peek(): T {
    throw new Error('Method not implemented.');
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
linkedList.add(6);
let it = linkedList.testIterator();
console.log(it.next());
console.log(it.next())
console.log(it.next())
console.log(it.next())

debugger;

// clear
// foreach
