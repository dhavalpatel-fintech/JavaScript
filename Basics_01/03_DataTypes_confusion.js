// there are lots of confusions if the variable is written in the different formats just like:

// let score = 62;
// console.log(score);
// // type of te score:
// console.log(typeof score);

// let isNumber = Number(score);
// console.log(isNumber);


// now lets make a twist for the "NaN"

// let scored = true;
// let theNumber = Number(scored);
// console.log(scored);
// // type of te scored
// console.log(typeof scored);
// console.log(typeof theNumber);

// let isLoggedIn =1;
// let isBoolean = Boolean(isLoggedIn);

// console.log(isBoolean);
// console.log(typeof isBoolean);

// ********************************* Operators *********************************

// if teh first value is the string then the whole line is considered the strings
console.log("1" + 2 + 3);  //answer >> 123

// if the first one is the number then the whole oine is the number
console.log(1+2+3); // answer >> 6

// if the fisrt one is the number and the 3rd one is the string then check the result"
console.log(1 + 2 + "3"); //answer >> 33

// ********************** prefix and the postfix arithmetic operator **********************

let a = 4
const y = a++;
console.log(`the value of a: ${a} and the value of y: ${y}`);

let b = 5;
const z = ++b;
console.log(`the value of b: ${b} and the value of z: ${z}`);
