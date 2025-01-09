// This and the arrow function in the JavaScript 

// This function is used within the scope only and the cannot be used inside the arrow function

// an object with the function inside it:

const user ={
    username : "Dhaval Patel",
    price : 999,

    welcome :  function(){
        console.log(`${this.username}, welcome to the website!!`)
    }
}
user.welcome();
console.log(user);


// ################ play with "this"

function chai(){
    let username = "Dhaval";
    console.log(this.username);
}
chai();





// ################# arrow function => ################

const name = () =>{
    let name_01 = "patel";
    console.log(name_01);
    console.log(this.name_01); // >>>> "this." will not work inside the arrow function in the javascript
}
name();

// basic method 

// also known as the explicit method

const add = (num1, num2) =>{
    return num1 + num2;
}
console.log(add(3,4));


// implicit arrow function in the java script 

// if you use the () parentheses no need to use the return 
// but if you are using the {} curly braces then you need to use the return 

const addtwo = (num1, num2) => (num1 + num2)

console.log(addtwo(6,2));

// implicit and using the object inside the arrow function

const myobj = (num1, num2) => ({username : "Dhaval Patel"});
console.log(myobj(6,2));