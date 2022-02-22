import { LinkedList, ArrayList, DoublyLinkedList } from '../../src/data-structures/lists/LinkedList';
import checkIntegrity from './listIntegrity';

describe('LinkedList.clear', () => {
    it('List is empty when cleared', () => {
        const list = new LinkedList(new ArrayList([1,2,3]));
        list.clear();
        checkIntegrity(list);
        expect(list.size()).toEqual(0);
    });
});