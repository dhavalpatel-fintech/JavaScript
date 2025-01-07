// there are different types of the data types 

// 1. Primitive 
/*
>> string, number, boolean, null, undefined, BigInt, Symbol
*/

let name = "Dhaval patel";
console.log(typeof name);

let num = 62;
console.log(typeof num);

let myBool = true;
console.log(typeof myBool);

let myNull = null;
console.log(typeof myNull);

let myUndef;
console.log(typeof myUndef);

let myInt = 6289896262898962n;
console.log(typeof myInt);

let symbol = Symbol("12345");
console.log(typeof symbol);

// 2. References or (Non-Primitive)

// >> Array, Object, Function

// array
let myArray = ["Dhaval", "Patel", "Google", "62 LPA"];
console.log(myArray);
console.log(typeof myArray);

// objects
let myobj = {
    name : "Dhaval Patel",
    age : 25,
    College : "PDEU",
    targetCompany : ["Google", "Amazon", "Microsoft","Atlassian"],
    dreamSalary : "1000 Crores a year",
}
console.log(myobj);
console.log(typeof myobj);

// functions
let greet = function(){
    console.log("Hello World aka Duniya!!")
}
greet();

console.log(typeof greet);


// ############################################### Stack and heap memory ##############################################

// Stack

let myName = "Dhaval Patel";

let anotherName = myName;
anotherName = "Patel Dhaval";

console.log(myName);
console.log(anotherName);


