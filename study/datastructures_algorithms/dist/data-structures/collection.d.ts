export interface Iterator<T> {
    next(): any;
    hasNext(): boolean;
    remove(): void;
}
export declare function isCollection(c: any): boolean;
export interface ObjectIterator<T> extends Iterator<T> {
    next(): T;
}
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
    add(element: T): void;
    peek(): T;
    remove(object?: any): void;
}
export interface IStack<T> extends ICollection<T> {
    pop(): T;
    push(element: T): void;
}
export declare abstract class AbstractCollection<T> implements ICollection<T> {
    add(element: T, index?: number): void;
    addAll(collection: ICollection<T>, index?: number): void;
    abstract iterator(): ObjectIterator<T>;
    clear(): void;
    isEmpty(): boolean;
    remove(object: any): any;
    abstract size(): number;
    toArray(): T[];
    [Symbol.iterator](): Iterator<T>;
    forEach(callbackFn: (elem: T, index: number) => boolean): void;
    toString(): string;
}
//# sourceMappingURL=collection.d.ts.map