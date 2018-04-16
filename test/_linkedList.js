/* eslint-disable no-unused-expressions, no-prototype-builtins */

const { expect } = require("chai");
const { isClass } = require("./utilities");
const LinkedList = require("../src/LinkedList");

let linkedList;
describe("Linked Lists", () => {
  beforeEach(() => {
    linkedList = new LinkedList(5);
  });

  describe("The Linked List constructor", () => {
    it("should be a function", () => {
      expect(isClass(LinkedList)).to.be.true;
    });

    it("should have properties head and tail", () => {
      expect(linkedList.hasOwnProperty("head")).to.equal(true);
      expect(linkedList.hasOwnProperty("tail")).to.equal(true);
    });

    it("should add starting node to head and tail with argument value", () => {
      expect(linkedList.head.value).to.equal(5);
      expect(linkedList.tail.value).to.equal(5);
    });
  });

  describe("The appendToTail method", () => {
    it("should return a node", () => {
      const newNode = linkedList.appendToTail(3);
      expect(newNode.value).to.equal(3);
      expect(newNode.next).to.eql(null);
    });

    it("should append a new node to the tail of the linked list", () => {
      const newNode = linkedList.appendToTail(4);
      expect(linkedList.tail).to.equal(newNode);
      expect(linkedList.tail.value).to.equal(4);
    });
  });

  describe("The removeHead method", () => {
    it("should exist on the LinkedList prototype", () => {
      expect(LinkedList.prototype.removeHead).to.exist;
    });

    it("should remove current head and replace with node from old head's next property", () => {
      linkedList.appendToTail(3);
      linkedList.appendToTail(4);
      linkedList.removeHead();
      expect(linkedList.head.value).to.equal(3);
    });
  });

  describe("The findNode method", () => {
    it("should exist on the LinkedList prototype", () => {
      expect(LinkedList.prototype.findNode).to.exist;
    });

    it("should return node with value equal to the search value", () => {
      linkedList.appendToTail(3);
      linkedList.appendToTail(6);
      linkedList.appendToTail(2);
      expect(linkedList.findNode(6).value).to.equal(6);
    });

    it('should return "No node with value: <search value> found." if the search value is not in the linked list', () => {
      linkedList.appendToTail(3);
      linkedList.appendToTail(6);
      linkedList.appendToTail(2);
      expect(linkedList.findNode(20)).to.equal("No node with value: 20 found");
    });
  });
  /*
+-------------------------+
| Advanced Requirements!! |
+-------------------------+

The following are part of the advanced requirements.
Do not proceed until you are done with the basic
requirements for ALL data structures in this exercise.

Uncomment by removing the 'x'.
*/

  describe("The forEach method", () => {
    it("should exist on the LinkedList prototype", () => {
      expect(LinkedList.prototype.forEach).to.exist;
    });

    it("should run callback function on the value of each node in the linked list", () => {
      const results = [];
      linkedList.insertHead(3);
      linkedList.insertHead(6);
      linkedList.insertHead(2);
      linkedList.forEach((value) => results.push(value));
      expect(results).to.eql([2, 6, 3, 5]);
    });
  });

  describe("The print method", () => {
    it("should exist on the LinkedList prototype", () => {
      expect(LinkedList.prototype.print).to.exist;
    });

    it("should return a string of all values in the linked list", () => {
      linkedList.insertHead(3);
      linkedList.insertHead(6);
      linkedList.insertHead(2);
      expect(linkedList.print()).to.equal("2, 6, 3, 5");
    });
  });

  describe("The insertHead method", () => {
    it("should exist on the LinkedList prototype", () => {
      expect(LinkedList.prototype.insertHead).to.exist;
    });

    it("should insert a new node to the head property and move previous node to the next property of the new head", () => {
      const oldHead = linkedList.head;
      linkedList.insertHead(3);
      expect(linkedList.head.value).to.equal(3);
      expect(linkedList.head.next).to.equal(oldHead);
    });
  });

  describe("The insertAfter method", () => {
    it("should exist on the LinkedList prototype", () => {
      expect(LinkedList.prototype.insertAfter).to.exist;
    });

    it("should insert a new node after node referenced in arguments", () => {
      linkedList.insertHead(3);
      linkedList.insertHead(6);
      linkedList.insertHead(2);
      linkedList.insertAfter(linkedList.findNode(6), 9);
      expect(linkedList.print()).to.equal("2, 6, 9, 3, 5");
    });
  });

  describe("The removeAfter method", () => {
    it("should exist on the LinkedList prototype", () => {
      expect(LinkedList.prototype.removeAfter).to.exist;
    });

    it("should remove the node directly after the node referenced in arguments", () => {
      linkedList.insertHead(3);
      linkedList.insertHead(6);
      linkedList.insertHead(2);
      linkedList.removeAfter(linkedList.findNode(6));
      expect(linkedList.print()).to.equal("2, 6, 5");
    });
  });
});
