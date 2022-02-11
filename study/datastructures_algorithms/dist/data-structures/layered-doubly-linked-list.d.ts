declare interface Node<T> {
    val: T;
    next: Node<T> | null;
    prev: Node<T> | null;
    child: Node<T> | null;
}
interface ILayeredLinkedList<T> {
    insertAtHead(data: T): void;
    insertAtTail(data: T): void;
    insertAtIndex(index: number, data: T): void;
    insertChild(node: Node<T>, val: T): void;
    insertChildAtIndex(index: number, val: T): void;
    insertAll(arr: Array<T>): void;
    getHead(): Node<T> | null;
    getTail(): Node<T> | null;
    getAtIndex(index: number): Node<T> | null;
    removeAtHead(): void;
    removeAtTail(): void;
    removeAtIndex(index: number): void;
    size(): number;
}
export default class LayeredLinkedList<T> implements ILayeredLinkedList<T> {
    private _size;
    private head;
    private tail;
    constructor(c?: Array<T>);
    insertAtHead(val: T): void;
    insertAtTail(val: T): void;
    insertAtIndex(index: number, val: T): void;
    insertAll(arr: T[]): void;
    insertChild(currNode: Node<T>, val: T): void;
    insertChildAtIndex(index: number, val: T): void;
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
//# sourceMappingURL=layered-doubly-linked-list.d.ts.map