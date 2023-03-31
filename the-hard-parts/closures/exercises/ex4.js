// CHALLENGE 4

// Write a function once that accepts a callback as input and returns a function. When the returned function is called the first time, it should call the callback and return that output.
// If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.

function addByX(x) {
  let initial = x;
  function addBaseValue(base) {
    return initial + base;
  }

  return addBaseValue;
}

const addByTwo = addByX(2);

function once(func) {
  let final;
  function alreadyCalled(funcParam) {
    if (!final) {
      final = func(funcParam);
      return final;
    } else {
      return final;
    }
  }

  return alreadyCalled;
}

// /*** Uncomment these to check your work! ***/
const onceFunc = once(addByTwo);
console.log("onceFunc", onceFunc(4)); // => should log 6
console.log("onceFunc", onceFunc(10)); // => should log 6
console.log("onceFunc", onceFunc(9001)); // => should log 6
