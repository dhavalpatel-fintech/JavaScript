// Truthy and the falsey value in the java script 

// if the email have the array in it :
const usermail = [];
if (usermail) {
    console.log("Got the user email");
}else{
    console.log("Don't have the user email:")
}

// if the email have the empty string then 
const usermail01 = ("");
if (usermail01) {
    console.log("Got the user email");
}else{
    console.log("Don't have the user email:")
}

// list of the falsy values 
// 1. false,
// 2. 0
// 3. -0
// 4. BigInt
// 5. 0n
// 6. null
// 7. Undefined
// 8. Nan
// 9. "" >> empty strings



// truthy values >> those which are not falsy those are truthy

// some surprising values in the truthy
// 1. "0"
// 2. 'false' >> inside the strings 
// 3. " " >>
// 4. []
// 5. {}
// 6. function(){}


// lets make the array and the object length to be counted


// Array
let myArr =[];
if (myArr.length === 0) {
    console.log("Array is empty");
}

// Object

const myobj = {};
if (Object.keys(myobj).length === 0) {
    console.log("Object is empty");
}

console.log(typeof 0);




