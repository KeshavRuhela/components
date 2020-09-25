(function() {
  if (typeof store === 'object') return;
  Object.defineProperty(Object.prototype, '__magic__', {
    get: function() {
      return this;
    },
    configurable: true // This makes it possible to `delete` the getter later.
  });
  // __magic__.store = __magic__; // lolwat
  __magic__.store = {}; // lolwat
  delete Object.prototype.__magic__;
}());

// Your code can use `store` now.
// console.log(store);