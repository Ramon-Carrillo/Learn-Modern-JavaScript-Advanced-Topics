function Greeting() {
  console.log(this);
}

Greeting(); // window object

new Greeting(); // Greeting {}
// new keyword creates a new empty object and then calls the function

function Users(fName, lName) {
  this.fName = fName;
  this.lName = lName;
  // This method is not efficient because it will be created for each instance of the object and will consume more memory space and time to create it for each instance of the object so we can use prototype to create it once and share it with all instances of the object.
  this.fullName = function () {
    return this.fName + " " + this.lName;
  };
}

var user1 = new Users("John", "Doe");
var user2 = new Users("Jane", "Doe");

console.log(user1.fullName()); // John Doe
console.log(user2.fullName()); // Jane Doe

// If you don't use new keyword, this will refer to the window object or the global object. So, it's better to use new keyword to avoid this issue. Also, it's better to use prototype to create methods for the object to avoid creating the method for each instance of the object.
