// function with the nested operations

// closure >> when the inner or the child function can calls the outer functions is called the closure...

function one(){
   const  userName = "Dhaval Patel";
    function two(){
        const webiste = "youtube";
        console.log(userName);
    }
    // console.log(webiste);
    two();
}
one(); 


// example-02

if(true){
    const user = "Dhaval Patel";
    if(user == "Dhaval Patel"){
        const website = "Youtube";
        console.log(user + website);
    }
    // console.log(website);
}
// console.log(user);


// hoisting the function in the java script 

// example-01 of the hoisting the function's value 
console.log("The value of add01 is:", add01(6))
function add01(num){
    return num+1;
}


// Example-02 of the another method to write the function is:

// cannot hoist the function without the console.log();
add02(5);
let add02= function sum(num){
    return num+2;
}