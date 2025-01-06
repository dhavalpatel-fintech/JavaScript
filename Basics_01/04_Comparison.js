// There are different types of the conversion:
 
// == has a different meaning >> check the equality only
// === has a different meaning >> it checks the equality and the types too

console.log("2" == 2);  // string and the number seems equal bcoz of the same numbering values 

console.log("2" === 2); // seems false bcoz of having the different data types 

// for th null value 

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); // true, seems converted the null into the 0

// undefined 
console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0); 
