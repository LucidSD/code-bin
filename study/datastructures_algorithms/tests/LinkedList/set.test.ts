import { LinkedList, ArrayList, DoublyLinkedList } from '../../src/data-structures/lists/LinkedList';
import { IndexOutOfBoundsException } from '../../src/exceptions';
import checkIntegrity from './listIntegrity';

describe('LinkedList.set', () => {
    it('set element to new value', () => {
        const list = new LinkedList(new ArrayList([1,2,3]));
        list.set(1, 4);
        checkIntegrity(list);
        expect(list.toArray()).toEqual([1,4,3]);
    });
    
    it('throws out of bounds exception when index out of bounds', () => {
        const list = new LinkedList(new ArrayList([1,2,3]));
        expect(() => {list.set(4, 4)}).toThrowError(IndexOutOfBoundsException);
    });
});