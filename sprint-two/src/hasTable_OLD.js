

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);  //Limited Array Object
 // console.log('New LA', this._storage);
};

HashTable.prototype.insert = function(k, v) {
  //debugger;
  this.resizeUp();
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  
  if (bucket === undefined || !Object.keys(bucket).length) {
    bucket = {};
  }
  bucket[k] = v;
  //console.log('*************************SETTING HERE', index, bucket);
  this._storage.set(index, bucket);
  //console.log('CUrrent LENgth', this._storage.storageSize());
};

HashTable.prototype.retrieve = function(k) {
  // this.resize();
  var index = getIndexBelowMaxForKey(k, this._limit);
  var retrieved = this._storage.get(index);
  return retrieved[k];
};

HashTable.prototype.remove = function(k) {
  this.resizeDown();

  var index = getIndexBelowMaxForKey(k, this._limit);
  var retrieved = this._storage.get(index);
  //console.log('removing', k, 'retrieved', retrieved);
  if (retrieved !== undefined) {
    this._storage.removeItem(k, index);
    //console.log('REMOVING SIZE:', this._storage.storageSize());
  }
};
HashTable.prototype.resizeUp = function() {
  //console.log('Resizing Up???', this._storage.storageSize());
  if (this._storage.storageSize() + 1 >= Math.floor(this._limit * .75)) {
    this._limit *= 2;
    //console.log('STORAGE SIZE INCREASE: ', this._limit);
    this._storage.setNewLimit(this._limit);
  } 
};

HashTable.prototype.printStore = function() {
  this._storage.print();
};

HashTable.prototype.resizeDown = function() {
  //console.log('Resizing Down???', this._storage.storageSize());
  if ( (this._limit >= 8) && (this._storage.storageSize()  <= Math.floor((this._limit/2)*.25) ) ){
    this._limit /= 2;
    //console.log('STORAGE SIZE DECREASE: ', this._limit);
    this._storage.setNewLimit(this._limit);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


