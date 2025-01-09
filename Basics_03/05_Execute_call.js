// how to execute the code and call in the java script 


// java script execution context
// 1. {} Global EC
// 2. Function/ functional Execution context
// 3. Eval Execution context >> a global context


// code is divided into 2 phases :
// 1. Memory creation phase or just the creation phase only >> only the allocation phases
// 2. Execution phase


// check out the notes for the process of the execution in the javascript with the function and two variables 
// for the below given function:
let val1 = 10;
let val2 = 5;
 function addNum(n1, n2){
    let addition = n1 + n2;
    return addition;
 }
let total1 = addNum(val1, val2);
let total2 = addNum(10,2);


// 2. CALL Stack



