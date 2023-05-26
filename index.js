alert("Hi mom!");
let drumCount = document.querySelectorAll(".drum").length;
for (let i=0; i<drumCount; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
    // document.querySelectorAll(".drum")[i].addEventListener("click", function() { alert("You clicked me!") });
     // Example of making anonymous function
}

// document.querySelectorAll(".drum")[0].addEventListener("click", handleClick); 
//Example of adding event listener to first button

function handleClick() {
    alert("You clicked me!")
}
