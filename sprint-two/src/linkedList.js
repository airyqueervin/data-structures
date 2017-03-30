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
    var newHead = this.head.next;
    this.head = newHead;
  };

  list.contains = function(target) {
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
 */
