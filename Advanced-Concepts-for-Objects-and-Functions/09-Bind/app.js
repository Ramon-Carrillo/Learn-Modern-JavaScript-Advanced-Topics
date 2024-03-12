"use strict"; // Optional, but recommended for better error handling

var user1 = {
  firstName: "John",
  lastName: "Anderson",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

var user2 = {
  firstName: "Sarah",
  lastName: "West",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

var greeting = function (term, punct) {
  console.log(term + " " + this.firstName + punct);
};

var boundGreeting1 = greeting.bind(user1, "Hello", "!");
var boundGreeting2 = greeting.bind(user2, "Hi", ".");

boundGreeting1(); // Output: Hello John!
boundGreeting2(); // Output: Hi Sarah.
