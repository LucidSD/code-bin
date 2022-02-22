// @ts-nocheck

import { LinkedList, ArrayList, DoublyLinkedList } from '../../src/data-structures/lists/LinkedList';

export default function checkIntegrity(list: LinkedList<T>) {
    expect(list).toBeDefined();
    expect(list).toBeInstanceOf(LinkedList);
    const size = list.size();
    if(size > 0) {
        expect(list.head).toBeInstanceOf(LinkedList.Node);
        expect(list.tail).toBeInstanceOf(LinkedList.Node);
        expect(list.head).toBeDefined();
        expect(list.tail).toBeDefined();
        expect(list.tail.next).toBe(null);
        expect(list.toArray().length).toEqual(list.size());
        if(size === 1) {
            expect(list.head).toEqual(list.tail);
            expect(list.head.next).toBe(null);
            expect(list.tail.prev).toBe(null);
        } else {
            
            expect(list.head).not.toEqual(list.tail);
            expect(list.head.next).not.toBe(null);
            if (list instanceof DoublyLinkedList) {
                expect(list.tail.prev).not.toBe(null);
            } else if (list instanceof LinkedList) {
                expect(list.tail.prev).toBe(null);
            }
        }
    } else {
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
        expect(list.size()).toBe(0);
    }
}