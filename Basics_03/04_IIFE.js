// immediately invoked function expression (IIFE);


// use of the IIFE function:

//  1. to invoke immediately >> the private function

//  2. to prevent the global scope's pollution we use the IIFE concept in the java script

//  () ();


// IIFE Function:

// normal function
(function cac() {
    console.log("Chai aur Code");
})();


// arrow function

( () =>{
    console.log("Chai aur code Full Stack Web Development!!")
})();

// along with the argument and the parameters 

( (name) =>{
    console.log(`The name is: ${name}`);
})("Dhaval Patel");


