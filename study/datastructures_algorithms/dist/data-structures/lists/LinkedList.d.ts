import { Deque, AbstractList } from '../List';
import { ICollection, ObjectIterator } from '../collection';
declare interface Node<T> {
    val: T;
    next: Node<T> | null;
    prev: Node<T> | null;
}
export default class LinkedList<T> extends AbstractList<T> implements Deque<T> {
    iterator(): ObjectIterator<T>;
    protected length: number;
    protected head: Node<T> | null;
    protected tail: Node<T> | null;
    constructor(collection?: ICollection<T>);
    getFirst(): T;
    getLast(): T;
    pop(): T;
    push(element: T): void;
    removeFirst(): void;
    removeLast(): void;
    peek(): T;
    get(index: number): T;
    addFirst(element: T): void;
    addLast(element: T): void;
    add(element: T, index?: number): void;
    protected static Node: {
        new <T_1>(val: T_1): {
            val: T_1;
            next: Node<T_1> | null;
            prev: Node<T_1> | null;
        };
    };
    size(): number;
}
export declare class DoublyLinkedList<T> extends LinkedList<T> {
    private prev;
    constructor();
    addFirst(element: T): void;
    addLast(element: T): void;
    add(element: T, index?: number): void;
}
export {};
//# sourceMappingURL=LinkedList.d.ts.map