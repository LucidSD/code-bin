"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = exports.AbstractList = void 0;
const collection_1 = require("./collection");
class AbstractList extends collection_1.AbstractCollection {
    checkRange(index) {
        if (index >= this.size() || index < 0) {
            throw new Error('Index is out of bounds');
        }
        return true;
    }
    remove(index) {
        this.checkRange(index);
        let cursor = 0;
        const it = this.iterator();
        while (it.hasNext()) {
            it.next();
            if (index === cursor) {
                it.remove();
            }
            cursor += 1;
        }
    }
}
exports.AbstractList = AbstractList;
class Vector extends AbstractList {
    constructor(c) {
        super();
        this.elements = [];
        if (c && c instanceof collection_1.AbstractCollection) {
            this.addAll(c);
        }
    }
    get(index) {
        this.checkRange(index);
        return this.elements[index];
    }
    lastElement() {
        if (this.size() === 0) {
            throw new Error('Elements is empty');
        }
        const lastElementIndex = this.size() - 1;
        return this.get(lastElementIndex);
    }
    set(index, element) {
        this.checkRange(index);
        this.elements[index] = element;
    }
    add(element) {
        const { elements } = this;
        elements.push(element);
    }
    remove(index) {
        this.checkRange(index);
        this.elements.splice(index, 1);
    }
    isEmpty() {
        return this.elements.length <= 0;
    }
    size() {
        return this.elements.length;
    }
    iterator() {
        let index = 0;
        const that = this;
        const elements = this.elements;
        // eslint-disable-next-line new-parens
        return new class {
            next() {
                if (!this.hasNext()) {
                    throw new Error('Out of bounds');
                }
                const element = elements[index];
                index += 1;
                return element;
            }
            hasNext() {
                return index < elements.length;
            }
            remove() {
                that.elements.splice(index - 1, 1);
            }
        };
    }
}
class Stack extends Vector {
    push(data) {
        this.add(data);
    }
    pop() {
        if (this.size() === 0) {
            throw new Error('Stack is empty');
        }
        const element = this.lastElement();
        this.remove(this.size() - 1);
        return element;
    }
}
exports.Stack = Stack;
//# sourceMappingURL=List.js.map