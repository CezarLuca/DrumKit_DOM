// Detecting Button Press

alert("Hi mom!");
let drumCount = document.querySelectorAll(".drum").length;
for (let i = 0; i < drumCount; i++) {
  //document.querySelectorAll(".drum")[i].addEventListener("click",playSound); // Example of adding event listener to all buttons
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
  });
}

// Detecting Keyboard Press 

document.addEventListener("keypress", function (event) {
  playSound(event.key); 
});

function playSound(key) {
  switch (key) {
    case "w":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "a":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
    case "j":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "k":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "l":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    default:
      console.log(key);
      break;
  }
}

// document.querySelectorAll(".drum")[0].addEventListener("click", handleClick);
//Example of adding event listener to first button

// function handleClick() {
//    alert("You clicked me!")
// } // Example of making function for event listener

//let audio = new Audio("sounds/tom-1.mp3"); // Example of playing sound
//function playSound() {
//    audio.play();
//}
