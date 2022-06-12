var buttonslist = document.querySelectorAll("button").length;

for (var i = 0; i < buttonslist; i++) {
  document.querySelectorAll("button")[0].addEventListener("click", function () {
    let audio = new Audio("./sounds/snare.mp3");
    audio.play();
  });
  document.querySelectorAll("button")[1].addEventListener("click", function () {
    let audio = new Audio("./sounds/crash.mp3");
    audio.play();
  });
  document.querySelectorAll("button")[2].addEventListener("click", function () {
    let audio = new Audio("./sounds/kick-bass.mp3");
    audio.play();
  });
  document.querySelectorAll("button")[3].addEventListener("click", function () {
    let audio = new Audio("./sounds/tom-1.mp3");
    audio.play();
  });

  document.querySelectorAll("button")[4].addEventListener("click", function () {
    let audio = new Audio("./sounds/tom-2.mp3");
    audio.play();
  });

  document.querySelectorAll("button")[5].addEventListener("click", function () {
    let audio = new Audio("./sounds/tom-3.mp3");
    audio.play();
  });
  document.querySelectorAll("button")[6].addEventListener("click", function () {
    let audio = new Audio("./sounds/tom-4.mp3");
    audio.play();
  });
}

// while block style code
// var i = 0;

// while (i < document.querySelectorAll("button").length) {
//   document.querySelectorAll("button")[i].addEventListener("click", function () {
//     alert("Hi bro");
//   });
//   i++;
// }
// Anonymous function

// document.querySelector("button").addEventListener("click", function () {
//   alert("Hello, David");
// });
