//Guess the number

const prompt = require("prompt-sync")();
let a = Math.floor(Math.random() * 100) + 1;
let b;
for (let i = 0; a != b; i++) {
  let b = prompt("Enter a number between 1 to 100\t");
  b = Number.parseInt(b);
  if (a > b) {
    console.log("The number is greater than the number you have entered");
   
  } else if (a < b) {
    console.log("The number is less than the number you have entered");
  
  } else if (a == b) {
    console.log("You have guessed the correct number");
    break;
  }
}
