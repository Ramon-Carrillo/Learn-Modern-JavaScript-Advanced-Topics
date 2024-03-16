// Function Declaration
function powerDecl(num) {
  console.log(num * num);
}

// Function Expression
var powerExp = function (num) {
  console.log(num * num);
};

powerDecl(4);
powerExp(5);

// IIFE - Immediately Invoked Function Expression - It is a function that is executed right after it is created and it is not accessible after it is executed. It is a good way to protect the scope of your function and the variables within it. It is also a good way to avoid polluting the global scope.
//Example 1
(function (num) {
  console.log(num * num);
})(3);

//Example 2
(function (num) {
  console.log(num * num);
})(3);
