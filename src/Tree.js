class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    const childTree = new Tree(value);
    this.children.push(childTree);
  }

  contains(value) {
    let result = false;
    const searchTree = (target) => {
      if (target.value === value && target !== undefined) {
        result = true;
        return result;
      } else if (!target.children) {
        result = false;
        return result;
      } else {
        target.children.forEach((child) => {
          return searchTree(child);
        });
      }
    };
    searchTree(this);
    return result;
  }

  /*
+-------------------------+
| Advanced Requirements!! |
+-------------------------+

The following are part of the advanced requirements.
Do not proceed until you are done with the basic
requirements for ALL data structures in this exercise.

*/
  //traverseDepthFirst(fn) {}

  //traverseBreadthFirst(fn) {}
}

module.exports = Tree;

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/

//add O(1)

//search O(n)
