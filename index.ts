#! /usr/bin/env node
import inquirer from  "inquirer";
import chalk from "chalk"

console.log(chalk.blue("Welcome to Rimsha's CLI- Number Guessing Game"));

const randomNumber = Math.floor(Math.random() * 5 + 1);

const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: chalk.green("Enter Your guess number(Number Limit from 1 to 5):")
    },
]);

if (answer.userGuessedNumber === randomNumber){
    console.log("Congratulations ! You guess a correct number.");
}
 else{
    console.log(chalk.red("Sorry, You guess a wrong number."));
 }