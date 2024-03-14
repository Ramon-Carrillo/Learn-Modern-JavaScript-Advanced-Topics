// Using strict mode will send a message to the console if there is an error in the code if not it will fail silently.
"use strict";
var obj = {
  firstName: "Steven",
  lastName: "Smith",
  startDate: "January 10, 2015",
  type: "admin",
};

// The Object.defineProperty() method defines a new property directly on an object, or modifies an existing property on an object, and returns the object. By default, values added using Object.defineProperty() are immutable.
Object.defineProperties(obj, "startDate", {
  writable: false,
});

// The Object.seal() method seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable. Sealing an object is the same as calling Object.preventExtensions() and Object.freeze() on it. The Object.seal() method returns the object being sealed.
Object.seal(obj);

// The Object.freeze() method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed. In addition, freezing an object also prevents its prototype from being changed. freeze() returns the same object that was passed in.
var immutableObj = Object.freeze(obj);
