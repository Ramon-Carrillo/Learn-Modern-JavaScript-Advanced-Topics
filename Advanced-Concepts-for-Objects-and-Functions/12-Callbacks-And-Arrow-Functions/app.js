/*
 ** Higher Order Functions, Callbacks, and the Problem with this
 */

/*
 ** Higher Order Functions are functions that take in other functions as arguments or return other functions
 */

// Example 1
document.addEventListener("DOMContentLoaded", function () {
  var logo = document.getElementById("logo");
  logo.addEventListener("click", function () {
    console.log("I was clicked");
  });
});

// Example 2
var firstName = "John";
var lastName = "Doe";

var user1 = {
  firstName: "Jane",
  lastName: "Doe",
};

var user2 = {
  firstName: "Alex",
  lastName: "Doe",
};

var getFullName = function () {
  setTimeout(function () {
    console.log(this.firstName + " " + this.lastName);
  }, 1000);
};

getFullName(); // "John Doe"
getFullName.call(user1); // returns "John Doe"
getFullName.call(user2); // returns "John Doe"

// The setTimeout function is not aware of the context of the getFullName function and therefore returns "John Doe" for all calls to getFullName function with different contexts (user1 and user2) passed to it using the call method of the getFullName function object (function object in JavaScript is a first-class object) and the this keyword inside the getFullName function refers to the global object (window object in the browser) and not the user1 or user2 object as expected.

// Solution 1
var getFullName2 = function () {
  var that = this;
  setTimeout(function () {
    console.log(that.firstName + " " + that.lastName);
  }, 1000);
};
getFullName2(); // returns "John Doe"
getFullName2.call(user1); // returns "Jane Doe"
getFullName2.call(user2); // returns "Alex Doe"

// Solution 2
var getFullName3 = function () {
  setTimeout(
    function () {
      console.log(this.firstName + " " + this.lastName);
    }.bind(this),
    1000
  );
};
getFullName3(); // returns "John Doe"
getFullName3.call(user1); // returns "Jane Doe"
getFullName3.call(user2); // returns "Alex Doe"

// Solution 3
var getFullName4 = function () {
  setTimeout(() => {
    console.log(this.firstName + " " + this.lastName);
  }, 1000);
};
getFullName4(); // returns "John Doe"
getFullName4.call(user1); // returns "Jane Doe"
getFullName4.call(user2); // returns "Alex Doe"

// Arrow functions do not have their own this keyword and therefore inherit the this value from the enclosing lexical context (the context in which the arrow function was defined).
