var content = document.querySelector("#content");

content.innerHTML =
  "President " +
  pres.fullName() +
  " was president number " +
  pres.order +
  " of the United States of America.";

// 1. Print to the console all the properties the object has access to. Also print the data type for those properties.
for (var prop in pres) {
  console.log(prop + ": " + typeof pres[prop]);
}

// 2. Print to the console a similar list but only include the properties owned by the object.
console.log(Object.keys(pres));
