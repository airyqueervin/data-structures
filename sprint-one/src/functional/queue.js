var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;
    someInstance.print();
  };

  someInstance.dequeue = function() {
    var values = storage[0];
    delete storage[0];
    size = --size < 0 ? 0 : size;
    if (size !== 0) {
      someInstance.shift();
    }
    // someInstance.print();
    return values;
  };

  someInstance.size = function() {
    return size;
  };

  someInstance.shift = function() {
    for (var key in storage) {
      storage[key - 1] = storage[key];
      delete storage[key];
    }
  };

  someInstance.print = function() {
    console.log('STORAGE', storage, '\n', 'SIZE', size);
  };

  return someInstance;
};
