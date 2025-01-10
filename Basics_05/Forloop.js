//  loop in the java script 
// There are total 3 types of the loops in the java script:
// mainly used are For loops then the while loop and rarely used the do while loop which can print atleats once in the loop

// syntax :

// for(intiation; condition; increment);
// code 
// console.log("");

// simple examples:
for(let i=0; i<=10; i++){
    console.log(i);
}

console.log(" Little Complex Number ")

// little complex example 
let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}

console.log("Little more comlplex number")

// little more complex example 

for (let index01 = 0; index01 <= 10; index01++) {
    const element = index01;
    if (element == 5 ) {
        console.log("4 is the best number")
    }
    console.log(element);
}

// loop inside the loop

console.log("Loop inside the loop:")

for (let i = 0; i <=5; i++) {
    console.log(`The  outer loop: ${i}`);
    for (let j = 0; j <=5; j++) {
        // console.log("The inner loop is: ", j)
        // console.log(`Inne loop : ${j}, and the outer loop is: ${i}`);
        console.log(`${i} x ${j} = ${i*j}`);
    }
}


// loops with the array sin the java script 

let myArray = ["dhaval", "patel dhaval", "patel dhaval kalpeshkumar", "patel dhaval kalpeshkumar - Google"];
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    // here the <= is undefined at the 5 th value which is not a good thing;
}

// break and continue in the for loop:
// break in the for loop:

for(let i=1; i<=10; i++){
    if (i==5) {
        console.log("5 is detected");
        break;
    }
    console.log(`The value is: ${i}`);
}


// now the continue in the java script

for(let i=0; i<=10; i++){
    if (i==5) {
        console.log("5 will be skipped!!")
        continue;
    }
    console.log(`The value is: ${i}`);
}
