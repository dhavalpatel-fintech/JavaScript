// operator

//1. Null Coalescing (??) in the Java Script 

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10;
// val1 = undefined ?? 15;

val1 = null ?? 10 ?? 15;

console.log(val1);

// 2. Ternary Operator

// condition?? true:false;

const iceTea = 20;

iceTea >=15? console.log("Greater than 15") : console.log("Less than 15");
