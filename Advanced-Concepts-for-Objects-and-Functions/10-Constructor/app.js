/*
 ** What About Constructors
 - A constructor is just a function that is invoked using the new operator

 - A constructor returns an object

 - Constructors are used to create multiple similar objects.

 - The returned objects share the same prototype which comes from the constructor.
 */

// 1- Constructor Function
var Greeting = function () {};

var greet1 = new Greeting();
var greet2 = new Greeting();

console.log(greet1);
console.log(greet2);

// Both objects are instances of Greeting
