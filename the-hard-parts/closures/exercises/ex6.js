// CHALLENGE 6

// Write a function delay that accepts a callback as the first parameter and the wait in milliseconds before allowing the callback to be invoked as the second parameter.
// Any additional arguments after wait are provided to func when it is invoked. HINT: research setTimeout();

function delay(func, wait, ...arguments) {
  function inner(arguments) {
    setTimeout(func(arguments), wait);
  }

  return inner;
}

const anotherFunction = delay((label) => console.log(label), 2000);

delay("First line");
delay("Second line");
delay("Third line");
