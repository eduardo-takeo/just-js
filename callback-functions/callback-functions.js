// Callback functions

// Functions that are passed as argument to another function

function sayHelloWorld() {
  console.log("Hello world!");
}

function sayHelloWorldAndGreet(name, myCallbackFunction) {
  myCallbackFunction();
  console.log(`Good morning, ${name}`);
}

sayHelloWorldAndGreet("Eduardo", sayHelloWorld);
