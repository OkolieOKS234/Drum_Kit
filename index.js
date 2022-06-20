// creating a variable check the length of all the buttons available
var buttonslist = document.querySelectorAll("button").length;

//  loop through all the list of buttons and make it listen to a click for each button
for (var i = 0; i < buttonslist; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
  });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "a":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;

    case "s":
      var kickbass = new Audio("./sounds/kick-bass.mp3");
      kickbass.play();

      break;

    case "d":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();

      break;

    case "j":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      console.error("Crazy");
  }
}
