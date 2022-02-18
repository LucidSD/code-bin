import { LinkedList, ArrayList } from '../../src/data-structures/lists/LinkedList';
import { IllegalStateException, IndexOutOfBoundsException } from '../../src/exceptions';

describe('LinkedList.toString', () => {
    it('toString will match nodes added', () => {
        const list = new LinkedList();
        list.add(1);
        list.add(2);
        list.add(3);
        const arr = list.toArray();
        expect(arr).toEqual([1,2,3]);
    });

    it('New list with no nodes equals []', () => {
        const list = new LinkedList();
        const arr = list.toArray();
        expect(arr).toEqual([]);
    });
});