var Queue = function() {
  this.storage = {};
  this.spot = 0;
  this.length = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.spot] = value;
  this.spot++;
  this.length++;
};

Queue.prototype.dequeue = function() {
  if (this.length > 0) {
    this.length--;
    var temp = this.storage[(this.spot - this.length) - 1];
    delete this.storage[(this.spot - this.length) - 1];
    return temp;
  }
};

Queue.prototype.size = function(value) {
  return this.length;
};

