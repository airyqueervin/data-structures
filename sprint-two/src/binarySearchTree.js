
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

    // tree.calculateLayers();

    /*if ( (passedTree === undefined) && tree.needsRebalancing()) {

      var temp = tree.rebalance();
      console.log(temp);
    }*/

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

BinarySearchTree.prototype.reinsert = function(value) {
  //
}

BinarySearchTree.prototype.rebalance = function(array) {
  if (array.length === 1) {
    return new BinarySearchTree(array[0]);
  } else if (array.length === 2) {
    var node = new BinarySearchTree(array[1]);
    node.left = new BinarySearchTree(array[0]);
    return node;
  } 

  var midpoint = array.splice(Math.floor(array.length / 2), 1)[0];
  var left = array.splice(0, Math.ceil(array.length / 2));
  var right = array;
  var node = new BinarySearchTree(midpoint);
  debugger;
  node.left = node.rebalance(left);
  node.right = node.rebalance(right);

  
  return node;
  // there are three parts

  // the value is the midpoint
  // the left is the result of a recursive call of the left half
  // the right is the result of a recursive call of the right half
};


BinarySearchTree.prototype.calculateLayers = function() {

  var lastElement = layers[layers.length - 1];
  if (values.length >= lastElement) {
    layers.push( (lastElement * 2) + 1);
  } 

};

BinarySearchTree.prototype.needsRebalancing = function() {
  var max = values.length;
  var min = layers.length - 1;
  return true;
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
