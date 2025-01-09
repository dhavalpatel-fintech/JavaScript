// this is the control flow or the control statements used in the different scenarios

// conditional statements

// 1. if >> only one condition 

let temp = 62;
if (temp >=35) {
    console.log("Severe heat you're gonna experience today");
}
if (temp<35) {
    console.log("Slight cold you are goona experience!!")
}

// 2. scope in the if and else statement
let score = 200;
if (score>100) {
    const power = "ready to fly"
    console.log(`user is : ${power}`)
}


// implicit scope

let balance = 1000;
if (balance>777) console.log("you are in the top 30%"),
console.log("you need to do some more hardword");


// if- else if - else

let bal = 1000;
console.log(`Your balance is: ${bal}`);
if (bal>300 && bal<500) {
    console.log("You're balance is greater than 300 but less than 500")
}else if(bal>500 && bal<700){
    console.log("Your balance is greater than 500 but less than 700")
}else if(bal >700 && bal<1000){
    console.log("Your balance is greater than 700 but less than 1000")
}else{
    console.log("Your balance is greater than 1000");
}

// real life example

const userLoggedIn = true;
const creditCard = true;

if (userLoggedIn && creditCard && "2" === "2") {
    console.log("You can buy the course!")
}
else{
    console.log("You cannnot buy the course!!")
}





