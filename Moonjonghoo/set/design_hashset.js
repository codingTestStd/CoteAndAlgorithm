var MyHashSet = function () {
  this.data = [];
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  if (!this.data.includes(key)) {
    this.data.push(key);
  }
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  this.data = this.data.filter((x) => x !== key);
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  if (this.data.includes(key)) {
    return true;
  } else {
    return false;
  }
};

let hash = new MyHashSet();
hash.add(2);
console.log(hash);
console.log(hash.contains(2));
hash.remove(2);
console.log(hash);
