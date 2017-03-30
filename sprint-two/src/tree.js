var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var childTree = new Tree(value);
  this.children.push(childTree);
};

treeMethods.contains = function(target) {
  if (this.value !== undefined && this.value === target) {
    return true;
  }

  if (this.children.length) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.contains.call(this.children[i], target)) {
        return true;   
      }
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions
    addChild -> O(1) constant time
    contains -> O(n)
 */
