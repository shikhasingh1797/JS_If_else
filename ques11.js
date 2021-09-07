let readlineSync = require("readline-sync");
var a= Number(readlineSync.question("Enter a: "))
var b= Number(readlineSync.question("Enter b: "))
if (a%b==0){
    console.log("Divisible")
}
else{
    console.log("Not divisible")
}