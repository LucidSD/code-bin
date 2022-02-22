import { ArrayList, LinkedList } from "../../src/data-structures/lists/LinkedList";
import { NoSuchElementException } from "../../src/exceptions";
import checkIntegrity from "./listIntegrity";

describe('LinkedList.iterator()', () => {
    it('removeFirst removes first value and returns it', () => {
        const list = new LinkedList(new ArrayList([1,2,3]));
        const it = list.iterator();
        const res = [];
        while(it.hasNext()) {
            res.push(it.next());
        }
        expect(res).toEqual([1,2,3]);
    });


});