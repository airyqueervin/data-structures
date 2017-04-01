// 

var HashTable = function() {
  this._limit = 8;
  this._tupleCount = 0;
  this._storage = LimitedArray(this._limit);  //Limited Array Object
};

HashTable.prototype.insert = function(k, v) {
  if ( (this._tupleCount / this._limit) >= .75 ) {
    this._limit *= 2;
    this._storage.setNewLimit(this._limit);
    this.rehash(this._limit);
  }

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
  if (((this._tupleCount / this._limit) <= .25) ) {
    this._limit /= 2;
    this._storage.setNewLimit(this._limit);
    this.rehash(this._limit);

  }
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var tupleIndex = this.getTupleLocation(bucket, k);

  bucket.splice(tupleIndex, 1);
  this._tupleCount--;

};


HashTable.prototype.rehash = function(newLimit) {
  var oldTable = this._storage;
  var newTable = LimitedArray(newLimit);

  this._storage = newTable;
  this._tupleCount = 0;

  oldTable.getStorage().forEach( (bucketArray, index) => {
    bucketArray.forEach( (tuple, index) => {
      this.insert(tuple[0], tuple[1]);
    });
  });
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
  insert = O(1) if no rehashing is involed. But if rehash is used, then it's O(n).
  retrieve = O(1)
  remove = = O(n)
  rehash = O(n) 
  getTupleLocation = O(n)

 */


