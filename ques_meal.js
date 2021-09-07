let readlineSync=require("readline-sync")
var day=readlineSync.question("Enter day name:")
var meal=readlineSync.question("Enter meal name:")
if (day==="sunday"){
    if (meal==="breakfast"){
        console.log("Aaloo paratha")
    }
    else if (meal==="lunch"){
        console.log("Pulav and Salad")
    }
    else {
        console.log("Sabji Roti")
    }
}
else if(day==="monday"){
    if (meal==="breakfast"){
        console.log("Sprouts")
    }
    else if (meal==="lunch"){
        console.log("Dal ,Chaval, Sabji, Roti")
    }
    else {
        console.log("Egg ,roti ,chaval")
    }
}
else{
    console.log("You will get nothing")
}