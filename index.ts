#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
{ 
    type : "number",
    name : "firstDigit",
    message : "Enter your first Digit",
},
{
    type : "number",
    name : "secondDigit",
    message : "Enter your second Digit",
},
{

    type : "list",
    choices :["addition", "subtraction", "multiply","divide"] ,
    name : "operator",
    message : "select operator to perform",

}

])
if (answer.operator === "addition") {
    console.log(answer.firstDigit + answer.secondDigit );
    
}else if ( answer.operator === "subtraction") {
    console.log(answer.firstDigit - answer.secondDigit );
}else if ( answer.operator === "multiply") {
    console.log(answer.firstDigit * answer.secondDigit );
}else if ( answer.operator === "divide") {
    console.log(answer.firstDigit / answer.secondDigit );
}else{
    console.log("please select valid operator");
};


