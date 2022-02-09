class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
export default class Stack {
    constructor() {
        this.size = 0;
        this.tail = null;
    }
    size() {
        return this.size;
    }
    push(node) {
        const newNode = new Node(node.val);
        if(!this.tail) {
            this.tail = newNode;
        } else {
            newNode.next = this.tail;
            this.tail = newNode;
        }
        this.size++;
    }
    pop() {
        const currNode = this.tail;
        this.tail = this.tail.next;
        this.size--;
        return currNode;
    }
    peek() {
        return this.tail.val;
    }
}

const map = new Map([[1,3]])
let stack = new Stack();
debugger;
stack.push(4);
stack.push(5);
stack.push(6);
let node = stack.pop();
console.log(node.val);

/* 

hedietDbgVis.createGraphFromPointers(
	hedietDbgVis.tryEval([
		"stack.tail",
		"newNode",
		"currNode",
		"prevNode",
        "this.tail"
	]),
	n => ({
		id: n.val,
		color: "lightblue",
		label: `${n.val}`,
		edges:
        [
            { to: n.next, label: "next" },
        ].filter(i => !!i.to),
	})
)


*/