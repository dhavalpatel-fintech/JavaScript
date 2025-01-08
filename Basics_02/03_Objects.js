// There are two types of the objects:
/*
1. Object constructor >>> object.create >>> will study it later
2. object literals >>> let myuObj = {}
*/

// Object literals 
const mySym = Symbol("Key01");
const myObj = {
    name : "Dhaval Patel",
    "full name" : "PATEL DHAVAL KALPESHKUMAR",
    // declaring the symbol
    [mySym] : "Key01",
    age : 25,
    location : "Ahmedabad",
    email : "pateldhaval@google.com",
    isLoggedIn : true,
    lastLoggedIn : ["Monday", "Tuesday"]
}

console.log(myObj);
// the new way to call the key:value pairs

console.log(myObj["name"]);
console.log(myObj.name);
console.log(myObj["full name"]);
console.log(myObj[mySym]);

// changing the value of the email:

myObj.email = "pateldhaval@microsoft.com"
console.log(myObj);
// Object.freeze(myObj);

myObj.email = "pateldhaval@meta.com"
console.log(myObj);

// declaring the function 
// function-01
myObj.greetings = function(){
    console.log("Hello Users, how are you??")
}
console.log(myObj.greetings());

// functiom-02
myObj.greetingsTwo = function(){
    console.log(`Hello, ${this["full name"]}`)
}
console.log(myObj.greetingsTwo());

// ########################## object and the function inside it ########################

const user = {
    name : "Patel Dhaval kalpeshkumar",
    age : 25,
    location : "Bnaglore",
    isDisciplined : true,
    howTown : "Ahmedabad",
    CurrentTown : ["Mumbai", "Banglore", "Gurugram"],

    greetings01 : function(){
        console.log(`Hello Everyone, this is ${this.name} and my age is ${this.age}.`)
    }
}
console.log(user);
console.log(user.greetings01());