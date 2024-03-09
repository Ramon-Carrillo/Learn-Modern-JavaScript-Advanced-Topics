//There are four different ways to invoke a function in JavaScript:

//1. Function Invocation: This is the most common way to invoke a function.
//It involves simply calling the function by its name followed by parentheses.

//For example:
function sayHello() {
  console.log("Hello, world!");
}
sayHello();

// In this case, the sayHello function is invoked using the function invocation syntax.

//2. Method Invocation: In JavaScript, functions can also be defined as methods within objects.
//When a function is invoked as a method, it is called using the dot notation on an object.

//For example:
var person = {
  name: "John",
  sayHello: function () {
    console.log("Hello, " + this.name + "!");
  },
};

person.sayHello();

//In this example, the sayHello function is defined as a method within the person object.
//It is invoked using the method invocation syntax.

//3. Constructor Invocation: In JavaScript, functions can also be used as constructors to create new objects.
//When a function is invoked as a constructor, it is called using the new keyword.

//For example:
function Person(name) {
  this.name = name;
}

var john = new Person("John");
console.log(john.name);

//In this case, the Person function is invoked as a constructor to create a new Person object named john.

//4. Indirect Invocation: In JavaScript, functions can also be invoked indirectly using the call or apply methods.
//For example:
function sayHello() {
  console.log("Hello, " + this.name + "!");
}

var person1 = {
  name: "John",
};

var person2 = {
  name: "Jane",
};

sayHello.apply(person1);
sayHello.call(person2);

//In this example, the apply and call methods are used to invoke the sayHello function with different this values (person1 and person2).

//These are the four ways to invoke a function in JavaScript.
//Each method has its own use cases and implications, so it's important to understand them in order to write effective and flexible code.
