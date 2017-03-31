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


BinarySearchTree.prototype.traverse = function(tree, value) {
  if (tree !== null) {
    if (tree.value === value) {
      return tree;
    }

    if (value > tree.value) { //GREATER THAN CHECK
      if (tree.right !== null) {
        return tree.traverse(tree.right, value);
      } 
      
    } else { ///LESS THAN CHECK

      if (tree.left !== null) {
        return tree.traverse(tree.left, value);
      } 
    }
    return tree;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
  insert  - O(log(n)) logrithmic
  contains O(log(n)) logrithmic
  depthFirstLog O(log(n)) logrithmic
  travese O(log(n)) logrithmic

 */
