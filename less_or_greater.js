let readlineSync = require("readline-sync");
var a= Number(readlineSync.question("Enter num: "))
if (a<10){
    console.log("Number is less than 10")
}
else if(a>=10 && a<20){
    console.log("Number is less than 20")
}
else {
    console.log("Greater than 20")
}