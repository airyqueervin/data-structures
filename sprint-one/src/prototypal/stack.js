var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.length = 0;

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.length] = value;
  this.length++;
};
stackMethods.pop = function() {
  if (this.length > 0) {
    this.length--;
    var temp = this.storage[this.length];
    delete this.storage[this.length];
    return temp;
  }
};
stackMethods.size = function(value) {
  return this.length;
};


