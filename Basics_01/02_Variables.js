// // there are three types of the varibales 
// // 1. var 
// // 2. let
// // 3. const

// // 1. variable is a global function 
// // 2,3. while the let and const are the block functions

// // Variable Example:

// // function exmaple(){
// //     var x = 10;
// //     var y = 62;
// //     console.log(x);
// //     console.log(y)
// //     return x;
// // };
// // exmaple();
// // console.log(y);

// // being a block function the {let and const} varibale will not console out of the block so defined by the scope {}.

// // let and the const function

// // let x = 10;
// // if(true){
// //     console.log(x);

// //     let y = 20;
// //     console.log(y);
// // }

// const x = 100;
// if(true){
//     console.log(x);

//     const y = 200;
//     console.log(y);
// }
// console.log(x);
// // console.log(y);


// the exmaple with the tables 

const accountId = 1445554;
let accountEmail = "dhavalpatel@gmail.com";
var accountPassword = "14159901";
accountCity = "Banglore";

accountCity = "Mumbai";

console.log([accountId, accountEmail, accountPassword, accountCity]);

console.table([accountId, accountEmail, accountPassword, accountCity]);