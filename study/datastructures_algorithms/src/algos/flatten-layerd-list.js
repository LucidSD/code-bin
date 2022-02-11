// const LinkedList = require('../data-structures/LinkedList');

import { LinkedList } from '../data-structures/lists/LinkedList';

const linkedList = new LinkedList();
debugger;

const stack = new LinkedList();

stack.insertAtTail(linkedList.head);
stack.insertAtTail(linkedList.getAtIndex(1));
stack.removeHead();
