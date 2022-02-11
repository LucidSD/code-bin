// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface Iterator<T> {
  next(): any;

  hasNext(): boolean;

  remove(): void;
}

export function isCollection(c: any): boolean {
  if (!(c instanceof AbstractCollection)) {
    throw new TypeError(`Expect type ICollection, but got ${typeof c}`);
  }
  return true;
}

// Just for 'iterator' function
export interface ObjectIterator<T> extends Iterator<T> {
  next(): T;
}

// Just for 'of' operation
export interface SymbolIterator<T> extends Iterator<T> {
  next(): IteratorResult<T>;
}

export interface Iterable<T> {
  [Symbol.iterator](): SymbolIterator<T>;

  forEach(callbackFn: (elem: T, index: number) => boolean): void;
}

export interface ICollection<T> extends Iterable<T> {
  add(element: T, index?: number): void;
  addAll(collection: ICollection<T>, index?: number): void;
  iterator(): ObjectIterator<T>;
  isEmpty(): boolean;
  remove(index: number): void;
  size(): number;
  toArray(): T[];
}

export interface IList<T> extends ICollection<T> {
  get(index: number): T;
  remove(index: number): void;
  set(index: number, element: T): void;
}

export interface IQueue<T> extends ICollection<T> {
  add(e: T): void;
  peek(): T;
  remove(o?: any): T | boolean;
}

export interface IStack<T> extends ICollection<T> {
  pop(): T;
  push(element: T): void;
}

export abstract class AbstractCollection<T> implements ICollection<T> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public add(element: T, index?: number): void {
    throw new Error('Add element failed');
  }

  public addAll(collection: ICollection<T>, index?: number): void {
    if (!collection) {
      throw new Error('Collection is null');
    }
    isCollection(collection);

    if (index) {
      throw new Error('Invalid index');
    }

    const it: Iterator<T> = collection.iterator();
    while (it.hasNext()) {
      this.add(it.next());
    }
  }

  public abstract iterator(): ObjectIterator<T>;

  public clear(): void {
    const it: Iterator<T> = this.iterator();

    while (it.hasNext()) {
      it.next();
      it.remove();
    }
  }

  public isEmpty(): boolean {
    return this.size() <= 0;
  }

  public remove(o: any): any {
    const it: Iterator<any> = this.iterator();

    while (it.hasNext()) {
      if (it.next() === o) {
        it.remove();
        return true;
      }
    }

    return false;
  }

  public abstract size(): number;

  public toArray(): T[] {
    const elements: T[] = [];

    const it: Iterator<T> = this.iterator();
    while (it.hasNext()) {
      elements.push(it.next());
    }

    return elements;
  }

  public [Symbol.iterator](): Iterator<T> {
    const it: Iterator<T> = this.iterator();

    return new class implements SymbolIterator<T> {
      next(): IteratorResult<T> {
        const done = !it.hasNext();
        return { done, value: done ? undefined : it.next() };
      }

      hasNext(): boolean {
        return it.hasNext();
      }

      remove(): void {
        // ignore
      }
    }();
  }

  public forEach(callbackFn: (elem: T, index: number) => boolean): void {
    if (!(callbackFn instanceof Function)) {
      throw new TypeError(`Expect type function, but got ${typeof callbackFn}`);
    }

    let index: number = 0;
    const it: Iterator<T> = this.iterator();

    while (it.hasNext()) {
      // eslint-disable-next-line no-plusplus
      if (callbackFn(it.next(), index++) === true) {
        break;
      }
    }
  }
}
