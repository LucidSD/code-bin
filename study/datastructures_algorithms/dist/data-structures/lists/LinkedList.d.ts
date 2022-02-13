import { Deque, AbstractList } from '../List';
import { ICollection, ObjectIterator } from '../collection';
declare interface Node<T> {
    val: T;
    next: Node<T> | null;
    prev: Node<T> | null;
    testtString(): string;
}
export default class LinkedList<T> extends AbstractList<T> implements Deque<T> {
    set(index: number, element: T): void;
    getFirst(): T;
    getLast(): T;
    pop(): T;
    push(element: T): void;
    removeFirst(): void;
    removeLast(): void;
    peek(): T;
    protected length: number;
    protected head: Node<T> | null;
    protected tail: Node<T> | null;
    constructor(collection?: ICollection<T>);
    get(index: number): T;
    addFirst(element: T): void;
    addLast(element: T): void;
    add(element: T, index?: number): void;
    private generator;
    testLoop(): void;
    testIterator(): ObjectIterator<T>;
    iterator(): ObjectIterator<T>;
    static Node: {
        new <T_1>(val: T_1): {
            val: T_1;
            next: Node<T_1> | null;
            prev: Node<T_1> | null;
            toString(): string;
            testtString(): string;
        };
    };
    size(): number;
}
export declare class DoublyLinkedList<T> extends LinkedList<T> {
    set(index: number, element: T): void;
    getFirst(): T;
    getLast(): T;
    pop(): T;
    push(element: T): void;
    removeFirst(): void;
    removeLast(): void;
    peek(): T;
    private prev;
    constructor();
    addFirst(element: T): void;
    addLast(element: T): void;
    add(element: T, index?: number): void;
}
export {};
//# sourceMappingURL=LinkedList.d.ts.map