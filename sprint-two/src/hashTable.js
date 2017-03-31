

var HashTable = function() {
  this._limit = 8;
  this._tupleCount = 0;
  this._storage = LimitedArray(this._limit);  //Limited Array Object
};

HashTable.prototype.insert = function(k, v) {
  // if (k === 'Alan') {
  //   debugger;
  // }
  this.resize();

  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];
  var bucket = this._storage.get(index);

  bucket = bucket === undefined ? [] : bucket;
  var previousTuple = this.getTupleLocation(bucket, k);

  if (previousTuple !== undefined) {
    bucket[previousTuple] = tuple;
  } else {
    bucket.push(tuple);
    this._tupleCount++;
  }
  
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var value;
  var tupleIndex = this.getTupleLocation(bucket, k);

  if (tupleIndex !== undefined) {
    value = bucket[tupleIndex][1];
  }

  return value;
};


HashTable.prototype.remove = function(k) {
  this.resize();
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var tupleIndex = this.getTupleLocation(bucket, k);

  bucket.splice(tupleIndex, 1);
  this._tupleCount--;

};

HashTable.prototype.resize = function() {
    // console.log('INCREASING SIZE', this._tupleCount, this._limit);
  if ( (this._tupleCount / this._limit) >= .75 ) {
    this._limit *= 2;
    this._storage.setNewLimit(this._limit);
    // console.log('SET STORAGE',  this._storage.setNewLimit(this._limit));
  }

  if (((this._tupleCount / this._limit) < .25) && (this._tupleCount > 8)) {
    this._limit /= 2;
    this._storage.setNewLimit(this._limit);
    // console.log('DECREASING SIZE', this._tupleCount, this._limit);

  }

};

HashTable.prototype.printStore = function() {
  this._storage.print();
};

HashTable.prototype.rehash = function() {
  // we need to get save a reference to the old storage
  // create a new LimitedArray with the new limit passed in.
    // assign the new Lmited array to the storage property.
      // iterate over the old reference keys values and pass them into the limited array 
      // apply the insert method to the keys and values to the new instance table.
};

HashTable.prototype.getTupleLocation = function(bucket, key) {
  var tupleIndex = undefined;

  if (bucket !== null) {
    bucket.forEach( (tuple, index) => {
      if (tuple[0] === key) {
        tupleIndex = index;
        return;
      }
    });
  }
  return tupleIndex;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


