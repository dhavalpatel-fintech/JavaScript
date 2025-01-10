// filter in the java script is used with the fnction and you can get the > or < number fomr the array
// node FilterMapReduce/filter.js
const myNum = [1,2,3,4,5,6,7,8,9,10];

// 1.
// const newNums = myNum.filter( (num)=> num>4);
// console.log(newNums);

// 2. implicit function
// console.log(myNum.filter( (num)=> num < 5 ));

// 3. implicit functioj with the return values in it:
console.log(myNum.filter( (num)=>{
    return num>4;
} ));

// 4. 
