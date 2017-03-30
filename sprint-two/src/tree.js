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

treeMethods.contains = function(target, tree, counter) {
  var children = this.children;
  var found = false;
  counter = counter || 0;
  console.log('children', children, 'this.value', this.value, 'target', target);
  if (this.value === target) {
    return true;
  }

  if (children.length) {

    while (children.length > 0 && !found) {
      counter++; 
      console.log(children);
      found = children[counter].contains(target, children[counter], counter);
    }
  }
  return found;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
