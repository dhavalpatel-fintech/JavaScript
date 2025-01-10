// for-each loop in the java script 

// for each and the simple function:
const coding = ["html", "css", "js", "react", "py", "backend", "database"];
coding.forEach( function(value) {
    console.log(value);
})


// for each with the arrow function

const fsd = ["html", "css", "js", "react", "py", "backend", "database"];
fsd.forEach( (item) =>{
    console.log(item);
})


// function to function call in teh java script using the for each

function printme(item){
    console.log(item);
}
coding.forEach(printme);


// for each and the function with the index and the value in it:

let sde = ["frontend", "backend", "dsa", "sd"]
sde.forEach((item, index , arr)=>{
    console.log(item, index, arr);
});

// object in the array
const sde01 = [
    {
        languageName : "javascript",
        languageFileName : "js",
    },
    {
        languageName : "java",
        languageFileName : "java",
    },
    {
        languageName : "python",
        languageFileName : "py",
    },
    {
        languageName : "html",
        languageFileName : "html",
    },
]