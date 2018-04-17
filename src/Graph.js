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
    if (this.contains(value1) && this.contains(value2)) {
      this.nodes[value1].push(value2);
      this.nodes[value2].push(value1);
    }
    return "Invalid node value";
  }

  removeEdge(value1, value2) {
    const edges1 = this.nodes[value1];
    const index1 = edges1.indexOf(value2);
    edges1.splice(index1);
    const edges2 = this.nodes[value2];
    const index2 = edges2.indexOf(value1);
    edges2.splice(index2);
  }

  hasEdge(value1, value2) {
    return this.nodes[value1].includes(value2);
  }

  contains(value) {
    return this.nodes.hasOwnProperty(value);
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
