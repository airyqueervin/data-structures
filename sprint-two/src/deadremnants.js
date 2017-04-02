
var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value, passedTree) {
  var tree = passedTree || this;
  if (value !== tree.value) {
    var foundNode = null;

    if (tree.value === null) {
      tree.value = value;
    }

    foundNode = tree.traverse(tree, value);

    if (value > foundNode.value) {
      foundNode.right = new BinarySearchTree(value);
    } else {
      foundNode.left = new BinarySearchTree(value);
    }
    values.push(value);
    tree.calculateLayers();

    if ( (passedTree === undefined) && tree.needsRebalancing()) {

      var temp = tree.rebalance();
      console.log(temp);
    }

  }
  
};

BinarySearchTree.prototype.contains = function(value) {
  var node = this.traverse(this, value);
  if (node.value === value) {
    return true;
  } else {
    return false;
  }
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left !== null) {
    this.depthFirstLog.call(this.left, cb);
  }
  if (this.right !== null) {
    this.depthFirstLog.call(this.right, cb);
  }
};

BinarySearchTree.prototype.breadthFirstLog = function(cb) {   
  var arr = [];
  var currentNode = this;
  arr.push(this);
  while (arr.length) {
    currentNode = arr.shift();
    cb(currentNode.value);
    if (currentNode.left !== null) {
      arr.push(currentNode.left);
    }
    if (currentNode.right !== null) {
      arr.push(currentNode.right);
    }      
  }
};


BinarySearchTree.prototype.traverse = function(tree, value) {
  if (tree !== null) {
    if (tree.value === value) {
      return tree;
    }

    if (value > tree.value) { 
      if (tree.right !== null) {
        return tree.traverse(tree.right, value);
      } 
      
    } else {

      if (tree.left !== null) {
        return tree.traverse(tree.left, value);
      } 
    }
    return tree;
  }

};


var layers = [0];
var values = [];


BinarySearchTree.prototype.rebalance = function() {
  console.log('Needs to REBALANCE');
  var valuesCopy = values.slice();
  valuesCopy.sort((a, b) => a - b);
  var masterTree = {};

  var generateTree = function(array, tree) {
    if (array.length <= 2) {
      for (var i = 0; i < array.length; i++) {
        tree.insert(array[i], tree);
      }
    } else {
      var midpoint = array.splice(Math.floor(array.length / 2), 1);
      var left = array.splice(0, Math.floor(valuesCopy.length) / 2);
      var right = array; 
      
      tree = new BinarySearchTree(midpoint[0]);
      tree.insert(midpoint[0], tree);
      generateTree(left, tree);
      generateTree(right, tree);
    }
    debugger;
  };
  generateTree(valuesCopy, masterTree);
  // debugger;
  return masterTree;
};

BinarySearchTree.prototype.calculateLayers = function() {

  var lastElement = layers[layers.length - 1];
  if (values.length >= lastElement) {
    layers.push( (lastElement * 2) + 1);
  } 

};

BinarySearchTree.prototype.needsRebalancing = function() {
  console.log('Inside Rebalancing with VALUES', values);
  var max = values.length;
  var min = layers.length - 1;
  if (max > (2 * min)) {
    return true;
  } else {
    return false;
  }
};

  // an array of layers starting with the value of 0
    // we want add of the tree nodes.
      // if values.lenght is greater lastElement
      //  layers.lenght-1 = mini amount of layers

      // After we retrieve the minimum,   
  // r

  // takes in node count
   // calculate a minimun number of levels
    // calculate a max number of levels
  
    // 

/*
 * Complexity: What is the time complexity of the above functions?
  insert  - O(log(n)) logrithmic
  contains O(log(n)) logrithmic
  depthFirstLog O(log(n)) logrithmic
  travese O(log(n)) logrithmic

 */
