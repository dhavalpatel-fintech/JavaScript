// reduce in the js is used for the calculation of the predecessors and the successors 

// 1. just check it out:

 let myNums = [1,2,3];

 const myTotal = myNums.reduce(function (prev, curre) {
    console.log(`the previosu value : ${prev} and the current value is: ${curre}`)
    return prev + curre;
 }, 0);
//  the above 0 represents the initial value in it;
 console.log(myTotal);


// 2. now using gthe arrow function in the reduce function

let number = [1,2,3,4,5,6,7,8,9,10];

// implicit function
let total = number.reduce( (prev, curr)=> prev+curr, 0);
console.log(total);

// 3. using the shopping cart example 

