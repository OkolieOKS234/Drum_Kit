// Modal box appearing on load

window.addEventListener("load", function () {
  setTimeout(function modal(event) {
    document.querySelector(".mod_Box").style.display = "block";
  }, 2000);
});

document.querySelector("#modal_button").addEventListener("click", function () {
  document.querySelector(".mod_Box").style.display = "none";
});
// end of modal box

// creating a variable check the length of all the buttons available
var buttonslist = document.querySelectorAll("button").length;

//  loop through all the list of buttons and make it listen to a click for each button
for (var i = 0; i < buttonslist; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}

// add a listener for a keypressed on keyboard
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

// conditional if each of w,a,s,d, j, k, l is pressed
function makeSound(key) {
  switch (key) {
    case "w":
      var snare = new Audio("../sounds/snare.mp3");
      snare.play();
      break;
    case "a":
      var crash = new Audio("../sounds/crash.mp3");
      crash.play();
      break;

    case "s":
      var kickbass = new Audio("../sounds/kick-bass.mp3");
      kickbass.play();

      break;

    case "d":
      var tom1 = new Audio("../sounds/tom-1.mp3");
      tom1.play();

      break;

    case "j":
      var tom2 = new Audio("../sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio("../sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio("../sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      console.error("No input selected");
  }
}
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 10);
}
