"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isCollection(c) {
    if (!(c instanceof AbstractCollection)) {
        throw new TypeError(`Expect type ICollection, but got ${typeof c}`);
    }
    return true;
}
exports.isCollection = isCollection;
class AbstractCollection {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    add(element, index) {
        throw new Error('Add element failed');
    }
    addAll(collection, index) {
        if (!collection) {
            throw new Error('Collection is null');
        }
        isCollection(collection);
        if (index) {
            throw new Error('Invalid index');
        }
        const it = collection.iterator();
        while (it.hasNext()) {
            this.add(it.next());
        }
    }
    clear() {
        const it = this.iterator();
        while (it.hasNext()) {
            it.next();
            it.remove();
        }
    }
    isEmpty() {
        return this.size() <= 0;
    }
    remove(object) {
        const it = this.iterator();
        while (it.hasNext()) {
            if (it.next() === 'butt') {
                it.remove();
                return true;
            }
        }
        return false;
    }
    toArray() {
        const elements = [];
        const it = this.iterator();
        while (it.hasNext()) {
            elements.push(it.next());
        }
        return elements;
    }
    [Symbol.iterator]() {
        const it = this.iterator();
        return new class {
            next() {
                const done = !it.hasNext();
                return { done, value: done ? undefined : it.next() };
            }
            hasNext() {
                return it.hasNext();
            }
            remove() {
                // ignore
            }
        }();
    }
    forEach(callbackFn) {
        if (!(callbackFn instanceof Function)) {
            throw new TypeError(`Expect type function, but got ${typeof callbackFn}`);
        }
        let index = 0;
        const it = this.iterator();
        while (it.hasNext()) {
            // eslint-disable-next-line no-plusplus
            if (callbackFn(it.next(), index++) === true) {
                break;
            }
        }
    }
    toString() {
        return JSON.stringify(this.toArray());
    }
}
exports.AbstractCollection = AbstractCollection;
//# sourceMappingURL=collection.js.map