var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = new DoublyNode(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    }

    var prevNode = this.tail;
    this.tail = newNode;
    prevNode.next = newNode;
    newNode.previous = prevNode;
  };

  list.addToHead = function(value) {
    var newNode = new DoublyNode(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    }

    var currentNode = this.head;
    newNode.next = currentNode;
    this.head = newNode;
    currentNode.previous = newNode;
  };

  list.removeTail = function() {
    var currentTail = this.tail;
    this.tail = this.tail.previous;
    currentTail.previous.next = null;
    currentTail.previous = null;
    return currentTail.value;
  };

  list.removeHead = function() {
    var currentHead = this.head;
    var newHead = this.head.next;
    this.head = newHead;
    newHead.previous = null;
    return currentHead.value;
  };

  list.contains = function(target, currentNode) {

    currentNode = currentNode || this.head;

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

var DoublyNode = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
   addToTail -> constant time O(1)
   removeHead -> constant time O(1)
   contains -> linear time O(n) 
 */
