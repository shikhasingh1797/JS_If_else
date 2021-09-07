let readlineSync = require("readline-sync");
var water= Number(readlineSync.question("Enter quantity of water: "))
if (water<=1){
    console.log("More water needs to be fill")
}
else if(water>1 && water<=10){
    console.log("No need to fill water")
}
else{
    console.log("Water will overfill")
}