/*
?? What are the problems with global variables?

1. Namespace Pollution: Global variables are accessible from anywhere in the code, which increases the risk of naming conflicts. If multiple scripts or libraries use the same global variable name, they can unintentionally overwrite each other's values, leading to unexpected behavior and bugs.

2. Difficulty in Tracking Dependencies: Global variables make it harder to track dependencies between different parts of the code. When a variable is accessed or modified globally, it becomes challenging to determine which functions or modules depend on it. This can make code maintenance and debugging more difficult.

3. Security Risks: Global variables can be accessed and modified by any part of the code, including external scripts or malicious code injected into the page. This can introduce security vulnerabilities, as sensitive data or critical functionality may be exposed or tampered with.

4. Code Reusability and Modularity: Global variables hinder code reusability and modularity. When variables are tightly coupled to the global scope, it becomes harder to encapsulate functionality into reusable modules or components. This can make code harder to understand, test, and maintain.

To mitigate these problems, it is generally recommended to minimize the use of global variables and follow best practices such as:

Encapsulation: Encapsulate related variables and functions within objects or modules to limit their exposure to the global scope.
*/

(function () {
  var counter = 0,
    doc = this.document,
    content = doc.getElementById("content"),
    quotes = content.querySelectorAll(".quote");

  window.addEventListener(
    "keydown",
    function (e) {
      // e.keyCode is deprecated, use e.key instead
      switch (e.key) {
        //40 is the down arrow key
        case "ArrowDown":
          if (counter < quotes.length) {
            quotes[counter].style.visibility = "visible";
            counter++;
          }
          break;
      }
    },
    false
  );
})();
