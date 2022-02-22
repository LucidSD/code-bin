import { ArrayList, LinkedList } from "../../src/data-structures/lists/LinkedList";
import { NoSuchElementException, IndexOutOfBoundsException } from "../../src/exceptions";
import checkIntegrity from "./listIntegrity";

describe('LinkedList.removeFirst', () => {
    it('removeFirst removes first value and returns it', () => {
        const list = new LinkedList(new ArrayList([1,2,3]));
        const value = list.removeFirst();
        expect(value).toBe(1);
        expect(list.size()).toBe(2);
        expect(list.toArray()).toEqual([2,3]);
        checkIntegrity(list);
    });

    it('removeFirst IllegalStateException if empty list', () => {
        const list = new LinkedList();
        expect(() => { list.removeFirst() }).toThrowError(NoSuchElementException);
    });

});

describe('LinkedList.removeLast', () => {
    it('removeLast returns tail', () => {
        const list = new LinkedList(new ArrayList([1,2,3]));
        const value = list.removeLast();
        expect(value).toBe(3);
        expect(list.size()).toBe(2);
        expect(list.toArray()).toEqual([1,2]);
        checkIntegrity(list);
    });

    it('removeLast IllegalStateException if empty list', () => {
        const list = new LinkedList();
        expect(() => { list.removeLast() }).toThrowError(NoSuchElementException);
    });

});

describe('LinkedList.remove', () => {
    it('Removes correct data in middle of list', () => {
        const list = new LinkedList(new ArrayList([1,2,3]));
        list.remove(1);
        expect(list.size()).toBe(2);
        expect(list.toArray()).toEqual([1,3]);
        checkIntegrity(list);
    });

    it('Removes correct data at tail', () => {
        const list = new LinkedList(new ArrayList([1,2,3]));
        list.remove(2);
        expect(list.size()).toBe(2);
        expect(list.toArray()).toEqual([1,2]);
        checkIntegrity(list);
    });

    it('Removes correct data at head', () => {
        const list = new LinkedList(new ArrayList([1,2,3]));
        list.remove(0);
        expect(list.size()).toBe(2);
        expect(list.toArray()).toEqual([2,3]);
        checkIntegrity(list);
    });

    it('Throws an exception when index is out of bounds', () => {
        const list = new LinkedList(new ArrayList([1,2,3]));
        expect(() => { list.remove(4); }).toThrowError(IndexOutOfBoundsException)
        checkIntegrity(list);
    });
});