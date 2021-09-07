let readlineSync = require("readline-sync");
var a= Number(readlineSync.question("Enter num: "))
var num1 = 300 - 123
if (a===num1){
    console.log("Equal")
}
else {
    console.log("Not equal")
}