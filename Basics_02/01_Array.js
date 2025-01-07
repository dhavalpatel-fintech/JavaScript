// Array in the java script 
// array have the prototype inside the prototype

let myArray = [1,2,3,4,5, "Dhaval", "Patel"];
console.log(myArray);

const heroes = ["shaktiman", "hatim"] ;
console.log(heroes)

let newArr = new Array(1,2,3,4,5,6,7, "dhaval","patel");
console.log(newArr);
console.log(newArr[2]);


// push 

console.log(newArr.push(62));
console.log(newArr);

// pop
console.log(newArr.pop());
console.log(newArr);

// unshift
console.log(newArr.unshift("Google"));
console.log(newArr);

// shift
console.log(newArr.shift());
console.log(newArr);

// includes 
console.log(newArr.includes("dhaval"));

// indexOf
console.log(newArr.indexOf("patel"));

// 
// join
const myArr = newArr.join();
console.log(myArr);
console.log(typeof myArr);

// slice and splice 
console.log(newArr.slice(1,5)) // index number from the start to end+1

// splice 
let array = [1,2,3,4,5,6]
console.log(array.splice(1, 3));

// node Basics_02/01_Array.js

