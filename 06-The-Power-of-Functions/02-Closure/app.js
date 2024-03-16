/*
?? What is a closure?
 */

// A closure is the local variables for a function - kept alive after the function has returned (or the execution context has gone)

// Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.

// In other words, a closure is a function having access to the parent scope, even after the parent function has closed.

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).

// Example 1
function outer() {
  let outerVar = "I am the outer variable";
  function inner() {
    console.log(outerVar);
  }
  return inner;
}

let innerFn = outer();
innerFn(); // I am the outer variable

// Example 2
function createGreeting(greeting) {
  return function (name) {
    console.log(greeting + " " + name);
  };
}

let sayHello = createGreeting("Hello");
let sayHi = createGreeting("Hi");

sayHello("John"); // Hello John
sayHi("John"); // Hi John

// Example 3
function createCounter() {
  let counter = 0;
  return function () {
    counter++;
    console.log(counter);
  };
}

let incrementCounter = createCounter();
incrementCounter(); // 1
incrementCounter(); // 2
