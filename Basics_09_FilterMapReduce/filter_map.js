// filter and map in the java script :

// node FilterMapReduce/filter_map.js

const nums = [1,2,3,4,5,6,7,8,9,10];

// use the map function to add 10 in every element:

// console.log(nums.map( (number)=> number+10));

// with the scope and the return
console.log(nums.map((number)=> {return number +10}));


// chaining the map map and filter;
const myNum = [1,2,3,4,5,6,7,8,9,10];
const newNum = myNum
                .map((num) => num* 10)
                .map((num) => num + 1)
                .filter((num) => num >=40);

                console.log(newNum);




