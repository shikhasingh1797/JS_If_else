let readlineSync = require("readline-sync");
var number= Number(readlineSync.question("Enter number: "))
 
if (number%3==0 && number%7==0) {
    console.log("Chocolate")
 }
else if(number % 7==0){
   console.log("late")
}
else if(number%3==0) {
   console.log("Choco")
}
else {
   console.log("Not divisible by 3 , 7")
}
