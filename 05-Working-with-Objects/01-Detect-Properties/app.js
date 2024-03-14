var person1 = {
  firstName: "Steven",
  lastName: "Hancock",
  email: "shancock@allthingsjavascript.com",
  type: "admin",
  active: true,
  address: {
    street: "100 N. Main",
    zip: 10001,
  },
};

// Loop through the properties of the object
for (var key in person1) {
  if (person1.hasOwnProperty(key)) {
    console.log(key + ": " + person1[key]);
  }
}

// Example 1 with hasOwnProperty
if (person1.hasOwnProperty("firstName")) {
  console.log("The object has the property/key firstName.");
} else {
  console.log("The object does not have the property/key.");
}

// Example 2 with in
if ("email" in person1) {
  console.log("The object has the property/key email.");
} else {
  console.log("The object does not have the property/key.");
}

// Example 3 with undefined
if (person1.propertyKey !== undefined) {
  console.log("The object has the property/key.");
} else {
  console.log("The object does not have the property/key.");
}
