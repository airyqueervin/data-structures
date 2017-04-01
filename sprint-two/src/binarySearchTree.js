
var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  if (value !== this.value) {
    var foundNode = null;

    if (this.value === null) {
      this.value = value;
    }

    foundNode = this.traverse(this, value);

    if (value > foundNode.value) {
      foundNode.right = new BinarySearchTree(value);
    } else {
      foundNode.left = new BinarySearchTree(value);
    }
    values.push(value);
    this.calculateLayers();

    if (this.needsRebalancing()) {
      this.rebalance();
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
  var valuesCopy = values.slice();
  var midpoint = valuesCopy.splice(Math.floor(valuesCopy.length / 2), 1);
  var tempTree = new BinarySearchTree(midpoint[0]);

  var generateTree = function(array, tree) {
    if (array.length <= 2) {
      for (var i = 0; i < array.length; i++) {
        tempTree.insert(array[i]);
      }
    } else {
      var midpoint = array.splice(Math.floor(array.length / 2), 1);
      tree.insert(mipoint);
      return generateTree(array, tree);
    }
    // if the array is smaller than 2 
    // iterate and call insert 


    // splice out a midpoint 
    // call insert on temptree and pass the midpoint
    // recurse with remainder
  };
    
};

BinarySearchTree.prototype.calculateLayers = function() {
  var lastElement = layers[layers.length - 1];
  if (values.length > lastElement) {
    layers.push( (lastElement * 2) + 1);
  } 
};

BinarySearchTree.prototype.needsRebalancing = function() {
  var max = values.length;
  var min = layers.length - 1;
  if (max >= (2 * min)) {
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
