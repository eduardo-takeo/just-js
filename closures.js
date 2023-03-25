// Closures

// closure gives you access to an outer function's scope from an inner function.

function outer() {
  let counter = 0;

  function incrementCounter() {
    counter++;
  }

  return incrementCounter;
}

const myNewFunction = outer();
myNewFunction();
myNewFunction();

console.log(myNewFunction);
