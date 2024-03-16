//Add a click handler to the javascript logo. The first time it is clicked after the page loads, display to the console: "You have clicked this logo for the first time."

//The second and subsequent clicks, display "You have clicked the logo again."

//Create this without using any global variables.

var clickLogo = function () {
  var logo = document.querySelector("#logo");
  var clicked = false;

  logo.addEventListener("click", function () {
    if (clicked === false) {
      console.log("You have clicked this logo for the first time.");
      clicked = true;
    } else {
      console.log("You have clicked the logo again.");
    }
  });
};

clickLogo();
