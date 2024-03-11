// Method invocation refers to the process of calling a method on an object. In JavaScript, objects can have properties and methods. A method is a function that is associated with an object and can be invoked or called to perform a specific action.

var name = "The Window";

var object = {
  name: "My Object",
  function: function () {
    console.log("from function in object -->");
    console.log(this);
    console.log(this.name);
  },
};

// Here, the function method is invoked on the object object. When a method is invoked, the code inside the method's function body is executed. In this case, the method function logs some messages to the console.

object.function();

// During method invocation, the this keyword is used to refer to the object on which the method is being called. It allows the method to access the object's properties and other methods. In the code snippet, this refers to the object object.

// Method invocation is a fundamental concept in object-oriented programming and is used to encapsulate behavior within objects. It allows objects to perform actions and interact with their own data.
