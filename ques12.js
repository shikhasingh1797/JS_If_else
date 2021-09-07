let readlineSync = require("readline-sync");
var a= Number(readlineSync.question("Enter a: "))
if (a%5==0 && a%15==0){
    console.log("Divisible by both")
}
else {
    console.log("Not divisible by both")
}