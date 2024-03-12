"use strict";

var name = "John";

var fun = function () {
  var name = "Jane";
  console.log(this);
  console.log(this.name);
};
