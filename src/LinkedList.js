function Node(value) {
  this.next = null;
  this.value = value;
}
// eslint-disable-line no-use-before-define
class LinkedList {
  constructor(headValue) {
    if (headValue === undefined)
      return new Error("Must provide value for the first node.");
    this.head = new Node(headValue);
    this.tail = this.head;
  }

  appendToTail(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    return newNode;
  }

  removeHead() {
    const newHead = this.head.next;
    this.head = newHead;
  }

  findNode(value) {
    const searchList = (target) => {
      if (!target) {
        return `No node with value: ${value} found`;
      } else if (target.value === value && target !== undefined) {
        return target;
      } else {
        return searchList(target.next);
      }
    };

    let foundNode = searchList(this.head);

    return foundNode;
  }

  /*
+-------------------------+
| Advanced Requirements!! |
+-------------------------+

The following are part of the advanced requirements.
Do not proceed until you are done with the basic
requirements for ALL data structures in this exercise.
*/

  forEach(callback) {}

  print() {}

  insertHead(value) {}

  insertAfter(refNode, value) {}

  removeAfter(refNode) {}
}

module.exports = LinkedList;

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   Basic Requirements:         X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
