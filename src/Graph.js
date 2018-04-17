class Graph {
  constructor() {
    this.nodes = {};
  }

  addNode(value) {
    this.nodes[value] = [];
  }

  removeNode(value) {
    for (let vertex in this.nodes) {
      if (this.nodes[vertex].includes(value)) {
        this.removeRelationship(vertex, value);
      }
    }
    delete this.nodes[value];
  }

  addEdge(value1, value2) {
    if (this.contains(value1) && this.contains(value2)) {
      this.nodes[value1].push(value2);
      this.nodes[value2].push(value1);
    }
    return "Invalid node value";
  }

  removeEdge(value1, value2) {
    this.removeRelationship(value1, value2);
    this.removeRelationship(value2, value1);
  }

  removeRelationship(v1, v2) {
    const edges = this.nodes[v1];
    const index = edges.indexOf(Number.parseInt(v2));
    edges.splice(index, 1);
  }

  hasEdge(value1, value2) {
    return this.nodes[value1].includes(value2);
  }

  contains(value) {
    return this.nodes.hasOwnProperty(value);
  }
}
module.exports = Graph;

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/

//add O(1)

//remove Node O(n)

//removeEdge O(1)

//contains (search)  O(1)
