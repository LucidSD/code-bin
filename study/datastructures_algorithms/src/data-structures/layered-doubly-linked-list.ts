// export class DoublyLinkedListNode {
//     constructor(public val = null) {
//     }
//     public createChild: function(val) {
//         if(this.child) {
//             return;
//         }
//         this.child = new LinkedList();
//         this.child.insertAtHead(val);
//     }
//     getChild: function() {
//         if(!this.child) {
//             return;
//         }
//         return this.child;
//     }
// }

// export default class LinkedList {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }

//     insertAtHead: function(val) {
//         let newNode = new Node(val);
//         if(this.head) {
//             newNode.next = this.head;
//             this.head.prev = newNode;
//         }
//         this.head = newNode;
//         this.size++;
//     }
//     insertAtTail: function(val) {
//         let newNode = new Node(val);
//         if(!this.head) {
//             this.head = newNode;
//             return;
//         }
//         let currNode = this.getTail();
//         currNode.next = newNode;
//         newNode.prev = currNode;
//         this.size++;
//     }
//     insertAtIndex: function(index,val) {
//         let newNode = new Node(val);
//         if(!this.head) {
//             this.head = newNode;
//             return;
//         } 
//         let currNode = this.getAtIndex(index);
//         let prevNode = this.getAtIndex(index - 1);
//         if(!currNode || !prevNode) return;
//         prevNode.next = newNode;
//         newNode.prev = prevNode;
//         newNode.next = currNode;
//         currNode.prev = newNode;
//         this.size++;
//     }
// }

// LinkedList.prototype.

// LinkedList.prototype.getTail = function() {
//     let currNode = this.head;
//     while(currNode && currNode.next) {
//         currNode = currNode.next;
//     }
//     return currNode;
// }

// LinkedList.prototype.getAtIndex = function(index) {
//     if(!this.head || index > this.size) {
//         return null;
//     }
//     let currNode = this.head;
//     for(let i = 0; i < index && currNode; i++) {
//         currNode = currNode.next;
//     }
//     return currNode;
// }

// LinkedList.prototype.removeAtHead = function() {
//     if(!this.size) {
//         return;
//     }
//     console.log(this.head.val)
//     this.head = this.head.next;
//     this.head.prev = null;
//     this.size--;
// }

// LinkedList.prototype.removeAtTail = function() {
//     if(!this.size) {
//         return;
//     }
//     const prevNode = this.getAtIndex(this.size - 1);
//     prevNode.next = null;
//     this.size--;
// }

// LinkedList.prototype.removeAtIndex = function(index) {
//     if(!this.size) {
//         return;
//     }
//     const currNode = this.getAtIndex(index);
//     const prevNode = this.getAtIndex(index - 1);
//     prevNode.next = currNode.next;
//     currNode.next.prev = prevNode;
//     this.size--;
// }

// /*

// hedietDbgVis.createGraphFromPointers(
// 	hedietDbgVis.tryEval([
// 		"linkedList.head",
// 		"newNode",
// 		"currNode",
// 		"prevNode",
//         "this.head"
// 	]),
// 	n => ({
// 		id: n.val,
// 		color: "lightblue",
// 		label: `${n.val}`,
// 		edges:
//         [
//             { to: n.next, label: "next" },
//             { to: n.prev, label: "prev" },
//             { to: n.child?.head, label: "child" }
//         ].filter(i => !!i.to),
// 	})
// )

// */