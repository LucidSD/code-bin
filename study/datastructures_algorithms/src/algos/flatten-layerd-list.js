// const LinkedList = require('../data-structures/LinkedList');

import { LinkedList } from '../data-structures/lists/LinkedList';

const linkedList = new LinkedList();
debugger;
linkedList.insertAtTail('1');
linkedList.insertAtTail('1');
linkedList.insertAtTail('1');
linkedList.insertAtTail('1');

const stack = new LinkedList();

stack.insertAtTail(linkedList.head);
stack.insertAtTail(linkedList.getAtIndex(1));
stack.removeHead();
