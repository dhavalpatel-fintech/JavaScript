// Functions in the java script 

function sayMyName(){
    console.log("Dhaval Patel");
    console.log("I am Dhaval patel and I am working with teh software developemnet company")
}
sayMyName();

console.log(`the name is the ${sayMyName}`);

// ############### Functions to add the two numbers ###############
// method-01 using the console method
//  if you are using the console method then you cannot use the return method and also can't store it in the variable 

function add(a,b){
    console.log(a+b);
}
add("6" + "2");


// method-02 uisng the return method
function sum(a,b){
    let result = a+b;
    return result;
}
let addNum = sum(6,2);
console.log(`Result is: ${addNum}`);


// method-03 to prevent the spaces in the return method
// if you can return the function then only you can store the value in the variable:
function sum01(a,b,c){
    return a+b+c;
}
let addition = sum01(1,2,3);
console.log(`Result is : ${addition}`);


// method-04
// to make the userlogged in value

function loggedin(username = "DhavalPatel"){
    if(!username){
        console.log("Please enter the username: ");
        return
    }
    return `${username}, has just logged in the account!!`
}
// console.log(loggedin("Dhaval Patel"));
console.log(loggedin(""));


// functions with the multiple parameters 

function calculateItemsPrice(val1, val2, ...num1){
    return num1
}
console.log("You will get the array of the items prices:")
console.log(calculateItemsPrice(200,400,500, 2000, 30000, 4000));

// handling the objects with the functions:

const obj ={
    username : "Dhaval Patel",
    price : "999/-",
}

function handleObject(myObj){
    console.log(`Username is ${myObj.username} and the prices are: ${myObj.price}`);

}
handleObject(obj);

// function with the array



