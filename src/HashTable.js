const { ControlledArray, simpleHash } = require("./utilities");

class HashTable {
  constructor(limit = 8) {
    this.limit = limit;
    this.storage = ControlledArray(this.limit);
  }

  insert(key, value) {
    const index = simpleHash(key, this.limit);
    this.storage[index] = value;
  }

  retrieve(key) {
    const index = simpleHash(key, this.limit);
    return this.storage[index];
  }

  remove(key) {
    const index = simpleHash(key, this.limit);
    if (index in this.storage) {
      this.storage[index] = null;
    }
  }
}

module.exports = HashTable;

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/

//add (insert) O(n)

//retrieve (search) O(n)

//remove O(n)
