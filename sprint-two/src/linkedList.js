var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    }

    var prevNode = this.tail;
    this.tail = newNode;
    prevNode.next = newNode;
  };

  list.removeHead = function() {
    var currentHead = this.head;
    var newHead = this.head.next;
    this.head = newHead;
    return currentHead.value;
  };

  list.contains = function(target, currentNode) {

    currentNode = currentNode || this.head;
    console.log('currentNode', currentNode, 'this.head', this.head, 'target', target);

    if (currentNode.value === target) {
      return true;
    } 

    if (currentNode.next !== null) {
      return this.contains(target, currentNode.next);
    }

    return false;
  };


  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
   addToTail -> constant time O(1)
   removeHead -> constant time O(1)
   contains -> linear time O(n) 
 */
