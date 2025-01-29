// High end loops in the array 

// there are different types of high end loops in the java script :
// 1. for of >> used in 1. Array and 2. Map
// 2. for each >> 1. normal function , 2. Array, 3. Object
// 3. for in >> used in 1. Object 
// loop in the java script

// there are different objects in the array like: 
// array = [" ", " ", " "];
// myarray = [{}, {}, {}];

// 1. for of:
// 1.1
 const arr = [1,2,3,4,5]
 for (const i of arr) {
    console.log(i);
 }

//  1.2 
const greetings = "Hello World!!";
for (const greet of greetings) {
   // // if (greet === " ") {
   // //    continue;
   // }
   console.log(greet);
}

// 1.3 for of with the "map" in the java script:
// Map is used for the unique values in the java script 
let map = new Map()
map.set('IN', "India")
map.set('US', 'United States of America')
map.set('Fr', 'France')
map.set('IN', 'India')

console.log(map);

for (const [key, value] of map) {
   console.log(key, ":-" , value);
}

