class Graph {
  constructor() {
    this.nodes = {};
  }

  addNode(value) {
    this.nodes[value] = [];
  }

  removeNode(value) {
    delete this.nodes[value];
    for (let node in this.nodes) {
      if (this.nodes[node].includes(value)) {
        const index = this.nodes[node].indexOf(value);
        this.nodes[node].splice(index, 1);
      }
    }
  }

  addEdge(value1, value2) {
    this.nodes[value1].push(value2);
    this.nodes[value2].push(value1);
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
