var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.length = 0;
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.length] = value;
  this.length++;
};

queueMethods.dequeue = function() {
  var values = this.storage[0];
  delete this.storage[0];
  this.length = --this.length < 0 ? 0 : this.length;
  if (this.length !== 0) {
    this.shift();
  }
  return values;
};

queueMethods.size = function() {
  return this.length;
};

queueMethods.shift = function() {
  for (var key in this.storage) {
    this.storage[key - 1] = this.storage[key];
    delete this.storage[key];
  }
};

