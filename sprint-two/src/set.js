var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.storage.hasOwnProperty(item)) {
    this.storage[item] = item;
  }
};

setPrototype.contains = function(item) {
  return this.storage.hasOwnProperty(item) ? true : false;
};

setPrototype.remove = function(item) {
  if (this.storage.hasOwnProperty(item)) {
    delete this.storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
    add = O(n)
    contains = O(n)
    remove = O(n)
 */
