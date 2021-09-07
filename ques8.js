let readlineSync = require("readline-sync");
var a= Number(readlineSync.question("Enter num: "))
var num1 = 44*30
if (a===num1){
    console.log("Enter number is equal to given number")
}
else{
    console.log("Enter number is not equal to given number")
}
