// In JavaScript, the call() method is used to invoke a function and explicitly specify the value of this within that function.

// When you call a function normally, the value of this is determined by how the function is called. However, with call(), you can explicitly set the value of this to a specific object.

/*  
*- The syntax for using call() is as follows:
?- functionName.call(thisValue, arg1, arg2, ...); 
*/

//Here's an example to illustrate how apply() works:
const person = {
  name: "John",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

const anotherPerson = {
  name: "Jane",
};

person.greet.call(anotherPerson); // Hello, Jane!

// In this example, we have an object person with a greet() method that logs a greeting using the name property of the object. We also have another object anotherPerson with a different name property.

// By using call(), we can invoke the greet() method of person and set anotherPerson as the value of this within the function. As a result, the output will be "Hello, Jane!" instead of "Hello, John!".

// In JavaScript, the apply() method is similar to the call() method. It allows you to invoke a function and explicitly specify the value of this within that function, just like call(). However, apply() takes the arguments to the function as an array instead of individual arguments.

/* 
*- The syntax for using apply() is as follows:
?- greet.apply(thisValue, [arg1, arg2, ...]);
*/
//Here's an example to illustrate how apply() works:
function greet(message) {
  console.log(`${message}, ${this.name}!`);
}

const person2 = {
  name: "John",
};

const anotherPerson2 = {
  name: "Jane",
};

greet.apply(person2, ["Hello"]); // Hello, John!
greet.apply(anotherPerson2, ["Hi"]); // Hi, Jane!

// In this example, we have a function greet() that takes a message parameter and logs a greeting using the name property of the object that this refers to. We have two objects, person and anotherPerson, each with a different name property.

// By using apply(), we can invoke the greet() function and set person or anotherPerson as the value of this. The second argument to apply() is an array of arguments that will be passed to the greet() function. In this case, we pass the greeting message as the first argument.

// As a result, when we call greet.apply(person, ["Hello"]), the output will be "Hello, John!", and when we call greet.apply(anotherPerson, ["Hi"]), the output will be "Hi, Jane!".
