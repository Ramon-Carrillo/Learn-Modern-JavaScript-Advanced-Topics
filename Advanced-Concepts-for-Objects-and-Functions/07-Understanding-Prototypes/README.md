# Understanding Prototypes

In JavaScript, prototypes are a fundamental concept related to object-oriented programming. Every object in JavaScript has a prototype, which is essentially a blueprint or template for creating other objects.

When you create an object in JavaScript using a constructor function or object literal syntax, the object automatically gets a hidden property called **proto**, which points to its prototype. This prototype contains properties and methods that the object can access and use.

Prototypes allow for inheritance in JavaScript. When you try to access a property or method on an object, JavaScript first checks if the object itself has that property or method. If it doesn't, JavaScript looks up the prototype chain and checks if the prototype of the object has the property or method. This process continues until the property or method is found or until the end of the prototype chain is reached.

Here's an example to illustrate prototypes in JavaScript:

```js
// Constructor function
function Person(name) {
  this.name = name;
}

// Adding a method to the prototype of Person
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

// Creating an object using the Person constructor
const john = new Person("John");

// Accessing the greet method on the john object
john.greet(); // Output: Hello, my name is John
```

In this example, the Person constructor function is used to create objects. The greet method is added to the prototype of Person, which means that all objects created using the Person constructor will have access to this method. When we call the greet method on the john object, JavaScript first checks if john has the greet method. Since it doesn't, JavaScript looks up the prototype chain and finds the greet method on the prototype of Person, allowing us to call the method successfully.

Prototypes are powerful because they allow for efficient code reuse and enable the concept of inheritance in JavaScript. By adding properties and methods to the prototype, you can ensure that all

```

```
