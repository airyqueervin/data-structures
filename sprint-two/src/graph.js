

// Instantiate a new graph
var Graph = function() {
  this.graphnodes = {};  
};

var GraphNode = function(value) {
  this.value = value;
  this.edges = [];
}

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //this.graphnodes.push(new GraphNode(node));
  this.graphnodes[node] = new GraphNode(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (Object.keys(this.graphnodes).length) {
    for (var key in this.graphnodes) {
      if (this.graphnodes[key].value === node) {
        return true;
      }
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.contains(node)) {
    delete this.graphnodes[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

  if (this.contains(fromNode) && this.contains(toNode)) {
    if (this.graphnodes[fromNode].edges.includes(toNode) && this.graphnodes[toNode].edges.includes(fromNode)) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.contains(fromNode) && this.contains(toNode)) {
    this.graphnodes[fromNode].edges.push(toNode);
    this.graphnodes[toNode].edges.push(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.contains(fromNode) && this.contains(toNode)) {
   var fromIndex = this.graphnodes[fromNode].edges.indexOf(fromNode);
   this.graphnodes[fromNode].edges[fromIndex] = null;
   var toIndex = this.graphnodes[fromNode].edges.indexOf(toNode);
   this.graphnodes[toNode].edges[toIndex] = null;
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.graphnodes) {
    cb(this.graphnodes[key].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
   addNode O(1) constatnt time
   contains O(n) linear time
   removeNode O(n) linear time
   hasEdge O(n) linear time
   addEdge O(n) linear time
   removeEdge O(n) linear 
   forEachNode O(n) linear
 */


