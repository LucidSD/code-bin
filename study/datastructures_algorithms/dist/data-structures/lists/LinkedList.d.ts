import { Deque, AbstractList } from '../List';
import { ICollection } from '../collection';
declare interface Node<T> {
    val: T;
    next: Node<T> | null;
    prev: Node<T> | null;
}
export default class LinkedList<T> extends AbstractList<T> implements Deque<T> {
    protected length: number;
    protected head: Node<T> | null;
    protected tail: Node<T> | null;
    constructor(collection?: ICollection<T>);
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