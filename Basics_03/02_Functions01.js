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

