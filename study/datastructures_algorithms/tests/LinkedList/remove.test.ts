import { ArrayList, LinkedList } from "../../src/data-structures/lists/LinkedList";
import { NoSuchElementException } from "../../src/exceptions";
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
        expect(() => { list.removeFirst() }).toThrow(NoSuchElementException);
    });

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
        expect(() => { list.removeFirst() }).toThrow(NoSuchElementException);
    });

    it('Returns correct data at tail', () => {
        const list = new LinkedList(new ArrayList([1,2,3]));
        const value = list.remove(2);
        expect(value).toBe(3);
        expect(list.size()).toBe(2);
        expect(list.toArray()).toEqual([1,2]);
        checkIntegrity(list);
    });


});