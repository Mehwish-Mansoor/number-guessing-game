#! usr/bin/env node
import inquirer from "inquirer";

console.log("welcome to cli number guessing game")

const randomNumber = Math.floor(Math.random() * 3 + 1);

const answer = await inquirer.prompt([
    {
        name: "userGuesedNumber",
        type: "number",
        message: "Enter your guess number(number limit 1 to 3);",
    },
]);

if(answer.userGuesedNumber ===  randomNumber ){
    console.log("congratulation ! yoy guess a correct number.")

}
else{
 console.log("sorry,you guess awrong number.")

}

