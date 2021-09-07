let readlineSync=require("readline-sync")
var speed=readlineSync.questionInt("Enter speed:")
if (speed<=30){
    console.log("Speed bahut kam hai")
}
else if (speed<=60){
    console.log("Speed kam hai")
}
else if (speed>60 && speed<100){
    console.log("Speed jyada hai")
}
else{
    console.log("Speed bahut jyada hai")
}
