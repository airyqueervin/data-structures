var Queue = function() {
  var someInstance = {};
  someInstance.spot = 0;
  someInstance.length = 0;
  someInstance.storage = {};
  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.spot] = value;
  this.spot++;
  this.length++;
};

queueMethods.dequeue = function() {
  if (this.length > 0) {
    this.length--;
    var temp = this.storage[(this.spot - this.length) - 1];
    delete this.storage[(this.spot - this.length) - 1];
    return temp;
  }
};

queueMethods.size = function() {
  return this.length;
};



  