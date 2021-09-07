let readlineSync=require("readline-sync")
var age=Number(readlineSync.question("Enter age="))
if (age>=5){
    console.log("Can go to school.")
}
if (age>=18){
    console.log("He can vote in elections.")
}
if (age>=21){
    console.log("He can drive car")
}
if (age>=24){
    console.log("He can ,marry")
}
if (age>=25){
    console.log("He can legally drink")
}
else{
    console.log("")
}