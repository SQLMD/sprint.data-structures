class Graph {
  constructor() {
    this.nodes = {};
  }

  addNode(value) {
    this.nodes[value] = [];
  }
}

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
module.exports = Graph;
