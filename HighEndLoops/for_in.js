// for in loop is particulary used for the objects to call in the java script 
// but it is also used for the array too in the java script. 
// like:

const myobj = {
    js : "javascript",
    cpp : "c++",
    rb :"ruby",
    swift : "swift"
}

console.log(myobj); // for the whole myObj object.

for (const key in myobj) {
    console.log(`${key} is the shortcut for the ${myobj.key}`);
    console.log(`${key} is the shortcut for the ${myobj[key]}`);
}


// now for in >> with the array 
 
const myArr = ["html", "css", "js", "react", "node", "express", "mongoDB", "MYSQL"];
for (const key in myArr) {
    console.log(key); // just throw the values in it only..
    console.log(`The key:values in the above array is: ${myArr[key]}`);
}

// map is not iteratable in the java script so we cannot use the map in the for in:
