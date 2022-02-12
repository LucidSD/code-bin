import {
  AbstractCollection, IList, Iterator, ICollection, ObjectIterator,
} from './collection';

export abstract class AbstractList<T> extends AbstractCollection<T> implements IList<T> {
  protected checkRange(index: number): boolean {
    if (index >= this.size() || index < 0) {
      throw new Error('Index is out of bounds');
    }
    return true;
  }

  public abstract get(index: number): T;

  public remove(index: number): void {
    this.checkRange(index);

    let cursor = 0;
    const it: Iterator<T> = this.iterator();

    while (it.hasNext()) {
      it.next();

      if (index === cursor) {
        it.remove();
      }

      cursor += 1;
    }
  }

  public abstract set(index: number, element: T): void;
}

// class LinkedList<T> extends AbstractList<T> implements
class Vector<T> extends AbstractList<T> implements IList<T> {
  private elements: T[] = [];

  public constructor(c?: ICollection<T>) {
    super();

    if (c && c instanceof AbstractCollection) {
      this.addAll(c);
    }
  }

  public get(index: number): T {
    this.checkRange(index);
    return this.elements[index];
  }

  public lastElement(): T {
    if (this.size() === 0) {
      throw new Error('Elements is empty');
    }
    const lastElementIndex = this.size() - 1;
    return this.get(lastElementIndex);
  }

  public set(index: number, element: T): void {
    this.checkRange(index);
    this.elements[index] = element;
  }

  public add(element: T): void {
    const { elements } = this;
    elements.push(element);
  }

  public remove(index: number): void {
    this.checkRange(index);
    this.elements.splice(index, 1);
  }

  public isEmpty(): boolean {
    return this.elements.length <= 0;
  }

  public size(): number {
    return this.elements.length;
  }

  public iterator(): ObjectIterator<T> {
    let index = 0;
    const that = this;
    const elements = this.elements;

    // eslint-disable-next-line new-parens
    return new class implements ObjectIterator<T> {
      next(): T {
        if (!this.hasNext()) {
          throw new Error('Out of bounds');
        }

        const element = elements[index];
        index += 1;

        return element;
      }

      hasNext(): boolean {
        return index < elements.length;
      }

      remove(): void {
        that.elements.splice(index - 1, 1);
      }
    };
  }
}

interface IStack<T> {
  push(data: T): void;
  pop(): T | null;
}

export class Stack<T> extends Vector<T> implements IStack<T> {
  public push(data: T): void {
    this.add(data);
  }

  public pop(): T | null {
    if (this.size() === 0) {
      throw new Error('Stack is empty');
    }
    const element = this.lastElement();
    this.remove(this.size() - 1);
    return element;
  }
}

interface IQueue<T> extends ICollection<T> {
  add(element: T): void;
  peek(): T;
  remove(object?: any): T | void;
}

export interface Deque<T> extends IQueue<T> {
  addFirst(element: T): void;
  addLast(element: T): void;
  getFirst(): T;
  getLast(): T;
  pop(): T;
  push(element: T): void;
  removeFirst(): void;
  removeLast(): void;
}
