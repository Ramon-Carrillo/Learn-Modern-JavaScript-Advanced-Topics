var name = "John Doe";

var fun1 = function () {
  var name = "fun1";
  console.log("from fun1--->");
  console.log(this);
  console.log(this.name);
  console.log(this.name);
  fun2();
};

var fun2 = function () {
  var name = "fun2";
  console.log("from fun2--->");
  console.log(this);
  console.log(this.name);
};

fun1();

// Using let or const instead of var will console.log undefined
// Var will assign the value to the global object, therefore it will console.log this.name as "John Doe"

// Understanding this (this binding)

// this is ...
// 1. Established at runtime, when the a function is invoked.
// 2. Determined by how a function is invoked, not where the function is defined.
// 3. A reference to the object.

// this is not ...
// 1. The function itself. Though it is established when the function is invoked, it is not the function itself.
