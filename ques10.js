let readlineSync = require("readline-sync");
var div= Number(readlineSync.question("Enter num: "))
if (div%2==0){
    console.log("Divisible hai")
}
else{
    console.log("Divisible nhi hai")
}