// while and do while loop in the java script 


// / ############################# while loop #############################
// syntax
// initiation
// while(condition){
// code
// increment}

let i = 0;
while (i<=10) {
    console.log(i);
    i+=2;
}


// with the help of an array

// let myArray = ["falsh", "thor", "spiderman"];
// let arr = 0;
// while (arr <= myArray.length) {
//     console.log(`Value is ${myArray[arr]}`);
//     arr++;
// }


let myArray = ["dhaval", "patel dhaval", "pateldhavalkalpeshkumar-Google"];
let arr=0;
while (arr < myArray.length) {
    console.log(myArray[arr]);
    arr = arr +1;
}






// ############################# do while loop #############################
// it's an exception in the do while loop 

let score = 11;
do {
    console.log(`The score is: ${score}`);
    score++;
} while (score<=10);
