"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DoublyLinkedList = /** @class */ (function () {
    function DoublyLinkedList() {
        this._size = 0;
        this.head = null;
        this.tail = null;
    }
    DoublyLinkedList.prototype.insertAtHead = function (val) {
        var newNode = new DoublyLinkedList.Node(val);
        newNode.next = this.head;
        if (this.head) {
            this.head.prev = newNode;
        }
        this.head = newNode;
        if (!this.tail) {
            this.tail = this.head;
        }
        this._size += 1;
    };
    DoublyLinkedList.prototype.insertAtTail = function (val) {
        var newNode = new DoublyLinkedList.Node(val);
        var currNode = this.getTail();
        if (!currNode) {
            this.head = newNode;
        }
        else {
            currNode.next = newNode;
            newNode.prev = currNode;
        }
        this.tail = newNode;
        this._size += 1;
    };
    DoublyLinkedList.prototype.insertAtIndex = function (index, val) {
        try {
            if (index > this._size || index < 0) {
                throw new Error('Not a valid index');
            }
            if (index === 0) {
                this.insertAtHead(val);
                return;
            }
            if (index === this._size) {
                this.insertAtTail(val);
                return;
            }
            var newNode = new DoublyLinkedList.Node(val);
            var currNode = this.getAtIndex(index);
            if (!currNode) {
                return;
            }
            var prevNode = this.getAtIndex(index - 1);
            if (prevNode) {
                prevNode.next = newNode;
                newNode.prev = prevNode;
            }
            newNode.next = currNode;
            currNode.prev = newNode;
            this._size += 1;
        }
        catch (error) {
            console.error(error);
        }
    };
    DoublyLinkedList.prototype.getHead = function () {
        return this.head;
    };
    DoublyLinkedList.prototype.getTail = function () {
        if (this._size <= 0) {
            return null;
        }
        return this.tail;
    };
    DoublyLinkedList.prototype.getAtIndex = function (index) {
        if (index > this._size || index < 0) {
            return null;
        }
        var currNode = this.head;
        for (var i = 0; i < index && currNode; i++) {
            currNode = currNode.next;
        }
        return currNode;
    };
    DoublyLinkedList.prototype.removeAtHead = function () {
        if (!this.head) {
            return;
        }
        if (this.head.next) {
            this.head = this.head.next;
            this.head.prev = null;
        }
        else {
            this.head = null;
        }
        this._size -= 1;
    };
    DoublyLinkedList.prototype.removeAtTail = function () {
        if (!this.head || !this.tail) {
            return;
        }
        if (this._size === 1) {
            this.tail = null;
        }
        if (this.tail && this.tail.prev) {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this._size -= 1;
    };
    DoublyLinkedList.prototype.removeAtIndex = function (index) {
        if (index > this._size || index < 0) {
            return;
        }
        if (index === 0) {
            this.removeAtHead();
            return;
        }
        if (index === this._size - 1) {
            this.removeAtTail();
            return;
        }
        var currNode = this.getAtIndex(index);
        var prevNode = this.getAtIndex(index - 1);
        if (!currNode) {
            return;
        }
        if (prevNode) {
            prevNode.next = currNode.next;
        }
        if (currNode.next) {
            currNode.next.prev = prevNode;
        }
        this._size -= 1;
    };
    DoublyLinkedList.prototype.size = function () {
        return this._size;
    };
    // eslint-disable-next-line @typescript-eslint/no-shadow
    DoublyLinkedList.Node = /** @class */ (function () {
        function _Node(val) {
            this.val = val;
            this.next = null;
            this.prev = null;
        }
        return _Node;
    }());
    return DoublyLinkedList;
}());
exports.default = DoublyLinkedList;
