import { LinkedList, ArrayList, DoublyLinkedList } from '../../src/data-structures/lists/LinkedList';
import checkIntegrity from './listIntegrity';

describe('LinkedList.add', () => {
    it('Add to the tail when add() is called', () => {
        const list = new LinkedList();
        list.add(1);
        list.addLast(2);
        list.add(3);
        checkIntegrity(list);
        const arr = list.toArray();
        expect(arr).toEqual([1,2,3]);
    });
});

describe('LinkedList.addFirst', () => {
    it('Add to the tail when add() is called', () => {
        const list = new LinkedList();
        list.addFirst(1);
        list.addFirst(2);
        list.addFirst(3);
        checkIntegrity(list);
        const arr = list.toArray();
        expect(arr).toEqual([3,2,1]);
    });
});


describe('LinkedList.addLast', () => {
    it('Add to the tail when addLast() is called', () => {
        const list = new LinkedList();
        list.addLast(1);
        list.addFirst(2);
        list.addLast(3);
        checkIntegrity(list);
        const arr = list.toArray();
        expect(arr).toEqual([2,1,3]);
    });
});