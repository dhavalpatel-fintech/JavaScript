// Number and Math

let balance = 100;
console.log(balance);
console.log(typeof balance); 

// converting to the strings 

let balance_01 = new Number(balance);
console.log(balance_01);
console.log(typeof balance_01);

// string 
console.log(balance.toString().length);

// to fix as the decimal number
console.log(balance.toFixed(2));

// the precision 

let othernum = 23.8962;
console.log(othernum.toPrecision(3));
let othernum_01 = 123.8962;
console.log(othernum_01.toPrecision(3));
let othernum_02 = 1123.8962;
console.log(othernum_02.toPrecision(5));

// with the exponentials 
let othernum_03 = 1123.8962;
console.log(othernum_02.toPrecision(3));


// hundreds 

let hundreds = 1000000;
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString("en-IN"));


// ########################################### Math values ############################################
// PI Value
console.log(Math.PI);

// abs value 
console.log(Math.abs(-4));
console.log(Math.random() * 100);
console.log(Math.sqrt(50));
console.log(Math.ceil(4.1));
console.log(Math.floor(10.99));

console.log(Math.max(10,11,12));
console.log(Math.min(8,7,6));

// math and floor with the random values 
console.log(Math.floor(Math.random()*10+1));

// constants play

const max = 20;
const min = 10;
console.log(Math.floor(Math.random() * (max - min + 1) + min));


