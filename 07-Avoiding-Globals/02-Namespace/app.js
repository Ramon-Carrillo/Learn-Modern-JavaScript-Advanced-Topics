/*
?? What is a namespace?

The namespace pattern in JavaScript is a design pattern that helps organize code by creating a container object to hold related functions, variables, and objects. It helps prevent naming conflicts and provides a way to encapsulate code within a single global object.

In JavaScript, the namespace pattern is typically implemented using an object literal. Here's an example:
*/
var MyNamespace = {
  variable1: "value1",
  variable2: "value2",
  function1: function () {
    // code here
  },
  function2: function () {
    // code here
  },
};

/* 
  In this example, MyNamespace is the namespace object that contains variables (variable1, variable2) and functions (function1, function2). By organizing code within this namespace object, you can avoid polluting the global scope and minimize the risk of naming conflicts with other code.

To access variables or functions within the namespace, you can use dot notation:
*/
console.log(MyNamespace.variable1); // Output: value1
MyNamespace.function1(); // Call function1

/* 
The namespace pattern is particularly useful in larger codebases where multiple developers are working on different parts of the code. It provides a way to logically group related code and helps maintain code readability and organization.
*/

// Example 1
var MyNamespace = MyNamespace || {};

(function (namespace) {
  var prompt = "Welcome,",
    prompt2 = "How are you?",
    prompt3 = "Good to see you again.",
    counter = 0,
    users = [];

  namespace.greeting = function (user) {
    var greeting = prompt + " ";
    if (newUser(user)) {
      greeting += prompt2;
    } else {
      greeting += prompt3;
    }
    console.log(greeting);
    counter++;
  };

  newUser = function (user) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].toUpperCase() === user.toUpperCase()) {
        return false;
      }
    }
    namespace.addUser(user);
    return true;
  };

  namespace.addUser = function (user) {
    users.push(user);
  };

  namespace.numberOfGreetings = function () {
    console.log("Total number of greetings: " + counter);
  };
})(MyNamespace);
