import { LinkedList, ArrayList } from '../../src/data-structures/lists/LinkedList';
import { IllegalStateException, IndexOutOfBoundsException } from '../../src/exceptions';

describe('LinkedList.get', () => {
    it('Returns correct data at index 2', () => {
        // const list = new LinkedList(new ArrayList([1,2,3]));
        const list = new LinkedList();
        list.add(1);
        list.add(2);
        list.add(3);
        const value = list.get(2);
        expect(value).toBe(3);
    });

    it('Throw IndexOutOfBoundsException error if index < 0 or index > size', () => {
        const list = new LinkedList(new ArrayList([1,2,3]));
        expect(() => { list.get(4) }).toThrow(IndexOutOfBoundsException);
        expect(() => { list.get(-4) }).toThrow(IndexOutOfBoundsException);
    })

    it('Out of bounds if get called on a empty list', () => {
        const list = new LinkedList();
        expect(() => { list.get(0) }).toThrow(IndexOutOfBoundsException);
    });

});

describe('LinkedList.getFirst', () => {
    it('Returns correct data at head', () => {
        // const list = new LinkedList(new ArrayList([1,2,3]));
        const list = new LinkedList();
        list.add(1);
        list.add(2);
        list.add(3);
        const value = list.getFirst();
        expect(value).toBe(1);
    });

    it('IllegalStateException if empty list', () => {
        const list = new LinkedList();
        expect(() => { list.getFirst() }).toThrow(IllegalStateException);
    });

});

describe('LinkedList.getLast', () => {
    it('Returns correct data at tail', () => {
        const list = new LinkedList(new ArrayList([1,2,3]));
        const value = list.getLast();
        expect(value).toBe(3);
    });

    it('IllegalStateException if empty list', () => {
        const list = new LinkedList();
        expect(() => { list.getLast() }).toThrow(IllegalStateException);
    });

});