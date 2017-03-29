var Stack = function() {
  var someInstance = {};
  var size = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.pop = function() {
    if (size > 0) {
      size--;
      var temp = storage[size];
      delete storage[size];
      return temp;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
