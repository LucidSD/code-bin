import LinkedList, { Node } from "../data-structures/layered-doubly-linked-list.js";
import pkg from "@hediet/debug-visualizer-data-extraction";
const {getDataExtractorApi, markedGrid} = pkg;
getDataExtractorApi().registerDefaultExtractors();
import("@hediet/debug-visualizer-data-extraction").LoadDataExtractorsFn
getDataExtractorApi().registerDefaultExtractors();

getDataExtractorApi().registerExtractor({
	id: "my-extractor",
	getExtractions: (data, collector) => {
		if (data instanceof LinkedList) {
			collector.addExtraction({
				id: "my-extractor",
				name: "My Extractor",
				priority: 2000,
				extractData: () => ({
					kind: { grid: true },
					rows: [{
						columns: data.map(d => ({ tag: d.name, content: d.val }))
					}]
				}),
			});
		}
	},
});


const linkedList = new LinkedList();
// debugger;x
linkedList.insertAtTail("1");
linkedList.insertAtTail("2");
linkedList.insertAtTail("3");
linkedList.insertAtTail("4");
linkedList.insertAtTail("5");
linkedList.insertAtTail("6");
let node = linkedList.getAtIndex(2);
node.createChild("7");
let newLayer = node.getChild();
newLayer.insertAtTail("8");
newLayer.insertAtTail("9");
newLayer.insertAtTail("10");
node = newLayer.getAtIndex(1);
node.createChild("11");
newLayer = node.getChild();
newLayer.insertAtTail("12");

const stack = [linkedList.head];

const map = new Map([[1,20]])
// const stack = new Stack();
// stack.push(linkedList.head);
const dummyHead = new Node(0);
dummyHead.next = linkedList.head;
let currNode = dummyHead;
let prevNode = null;
// while(stack.size) {
while(stack.length) {
    currNode = stack.pop();
    console.log(currNode);
    if (prevNode) {
        currNode.prev = prevNode;
        prevNode.next = currNode;
    }
    if(currNode.next) stack.push(currNode.next);
    if(currNode.child) {
        stack.push(currNode.child)
        currNode.child = null;
    }
    prevNode = currNode;
}


