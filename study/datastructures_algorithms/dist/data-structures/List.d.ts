import { AbstractCollection, IList, ICollection, ObjectIterator } from './collection';
export declare abstract class AbstractList<T> extends AbstractCollection<T> implements IList<T> {
    protected checkRange(index: number): boolean;
    abstract get(index: number): T;
    remove(index: number): void;
    abstract set(index: number, element: T): void;
}
declare class Vector<T> extends AbstractList<T> implements IList<T> {
    private elements;
    constructor(c?: ICollection<T>);
    get(index: number): T;
    lastElement(): T;
    set(index: number, element: T): void;
    add(element: T): void;
    remove(index: number): void;
    isEmpty(): boolean;
    size(): number;
    iterator(): ObjectIterator<T>;
}
interface IStack<T> {
    push(data: T): void;
    pop(): T | null;
}
export declare class Stack<T> extends Vector<T> implements IStack<T> {
    push(data: T): void;
    pop(): T | null;
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
export {};
//# sourceMappingURL=List.d.ts.map