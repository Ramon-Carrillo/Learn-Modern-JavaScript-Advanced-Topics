// function findIt() {
//   var start = 1,
//     end = 100,
//     multiple = 3,
//     total = 0;

//   while (start <= end) {
//     if (start % multiple === 0) {
//       total += start;
//     }
//     start++;
//   }

//   document.getElementById("content").innerHTML =
//     "The sum of all numbers divisible by 3 from 1 to 100 is: " + total;
// }

var sum = function (arr) {
  var total = 0;
  while (arr.length > 0) {
    total += arr.pop();
  }
  return total;
};

var findMultiples = function (start, end, multiple) {
  var multiples = [];
  while (start <= end) {
    if (start % multiple === 0) {
      multiples.push(start);
    }
    start++;
  }
  return multiples;
};

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("content").innerHTML =
    "The sum of all numbers divisible by 3 from 1 to 100 is: " +
    sum(findMultiples(1, 100, 3));
});

// Abstraction in DRY (Don't Repeat Yourself) coding refers to the practice of hiding unnecessary details and complexity, and instead providing a simplified and high-level interface for working with code. It allows developers to focus on the essential aspects of a problem without getting bogged down in the implementation details.

// In the context of DRY coding, abstraction helps to eliminate code duplication by creating reusable components or functions. Instead of repeating the same code in multiple places, you can abstract it into a single function or class that can be called whenever needed. This not only reduces redundancy but also improves code maintainability and readability.

// Abstraction allows you to encapsulate the implementation details behind a well-defined interface. It provides a level of separation between the internal workings of a piece of code and how it is used by other parts of the program. This separation makes it easier to modify or extend the code without affecting other parts of the system.

// For example, let's say you have a web application that needs to perform some calculations based on user input. Instead of writing the same calculation logic in multiple places, you can abstract it into a function. This function can take the necessary inputs, perform the calculations, and return the result. By using this abstraction, you can easily reuse the calculation logic throughout your application without duplicating code.

//Here's a simplified example:
function calculateTotalPrice(quantity, price) {
  return quantity * price;
}

var totalPrice = calculateTotalPrice(5, 10);
console.log(totalPrice); // Output: 50

// In this example, the calculateTotalPrice function abstracts the calculation logic for determining the total price based on the quantity and price. By using this function, you can avoid repeating the calculation code whenever you need to calculate the total price in your application.

// Overall, abstraction in DRY coding helps to promote code reuse, improve maintainability, and enhance the overall efficiency of your codebase.
