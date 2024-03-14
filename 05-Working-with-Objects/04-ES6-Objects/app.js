"use strick";

var multiple = 5;

// These two objects have concise properties. The only difference is that the second object is written in ES6.
// ES5
var obj1 = {
  start: 1,
  end: 100,
  multiple: multiple,
};

console.log(obj1);

// ES6
var obj2 = {
  start: 1,
  end: 1000,
  multiple,
};

console.log(obj2);

// These two objects have concise methods. The only difference is that the second object is written in ES6.
// ES5
var obj3 = {
  calculate: function () {
    console.log("Calculate");
  },
};

console.log(obj3);

// ES6
var obj4 = {
  calculate() {
    console.log("Calculate");
  },
};

console.log(obj4);

// The Object.setPrototypeOf() method is used to change the prototype of a specified object. It will return the object. The first parameter is the object that you want to change the prototype of, and the second parameter is the object that you want to set as the new prototype. The second parameter must be an object or null. If it is not an object or null, it will be ignored. If the first parameter is not an object, it will be coerced to an object.
var objProto = {
  fullName() {
    console.log(this.firstName + " " + this.lastName);
  },
};

var obj5 = {
  firstName: "John",
  lastName: "Doe",
};

Object.setPrototypeOf(obj5, objProto);

obj5.fullName();

// The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object. If it is not an own property, it will be ignored.

// Example 1
var obj6 = {
  name: "John",
};

var obj7 = {
  age: 25,
};

var obj8 = {
  country: "USA",
};

Object.assign(obj6, obj7, obj8);

console.log(obj6);
