// Nested if else

// winning number 19
// 19 your guess is right
// 17 too low
// 20 too high

let winningNumber = 19;
let userGuess = +prompt("Guess a number");
// prompt -> prompt take an input as a string. // "12"
// console.log(typeof userGuess, userGuess);
if(userGuess === winningNumber){
    console.log("Your guess is correct !!!");
}else{
    if(userGuess < winningNumber){
        console.log("Your guess is too low!!!");
    }else{
        console.log("Your guess is too high!!!");
    }
}