import { ArrayList, LinkedList } from "../../src/data-structures/lists/LinkedList";

describe('LinkedList.size', () => {
    it('size equal to list length', () => {
        const list = new LinkedList(new ArrayList([1,2,3]));
        expect(list.size()).toEqual(3);
    });
});