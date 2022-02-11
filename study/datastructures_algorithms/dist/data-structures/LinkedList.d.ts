declare interface Node<T> {
    val: T;
    next: Node<T> | null;
}
interface ILinkedList<T> {
    insertAtHead(data: T): void;
    insertAtTail(data: T): void;
    insertAtIndex(index: number, data: T): void;
    getHead(): Node<T> | null;
    getTail(): Node<T> | null;
    getAtIndex(index: number): Node<T> | null;
    removeAtHead(): void;
    removeAtTail(): void;
    removeAtIndex(index: number): void;
    size(): number;
}
export default class LinkedList<T> implements ILinkedList<T> {
    private _size;
    private head;
    private tail;
    constructor();
    insertAtHead(val: T): void;
    insertAtTail(val: T): void;
    insertAtIndex(index: number, val: T): void;
    getHead(): Node<T> | null;
    getTail(): Node<T> | null;
    getAtIndex(index: number): Node<T> | null;
    removeAtHead(): void;
    removeAtTail(): void;
    removeAtIndex(index: number): void;
    size(): number;
    private static Node;
}
export {};
//# sourceMappingURL=LinkedList.d.ts.map