// What is a First Class Function?

/* 
A first-class function is a concept in programming where functions are treated as first-class citizens. 
This means that functions can be assigned to variables, passed as arguments to other functions, and returned as values from other functions.

In JavaScript, functions are first-class citizens, which means you can assign a function to a variable, pass it as an argument to another function, or return it as a value from another function. 
This flexibility allows you to write more expressive and modular code.
*/
// Assigning a function to a variable
const greet = function (name) {
  console.log(`Hello, ${name}!`);
};

// Passing a function as an argument
function sayHello(greetingFunction) {
  greetingFunction("Alice");
}

sayHello(greet); // Output: Hello, Alice!

// Returning a function from another function
function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
console.log(double(5)); // Output: 10
