class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(newValue) {
    if (newValue <= this.value) {
      if (!this.left) {
        this.left = new BinarySearchTree(newValue);
        return this.left;
      } else {
        this.left.insert(newValue);
      }
    } else {
      if (!this.right) {
        this.right = new BinarySearchTree(newValue);
        return this.right;
      } else {
        this.right.insert(newValue);
      }
    }
  }
  contains(value) {
    let result = false;
    const search = (target) => {
      if (target.value === value) {
        result = true;
        return result;
      } else {
        if (value === target.left.value || value === target.right) {
          result = true;
          return result;
        } else if (value < target.left.value) {
          search(target.left);
        } else if (value > target.right.value) {
          search(target.right);
        } else {
          result = false;
          return result;
        }
      }
    };
    search(this);
    return result;
  }
}

module.exports = BinarySearchTree;
/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   Basic Requirements:         X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
