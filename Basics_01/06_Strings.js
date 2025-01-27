// string in the java script 

let name = "Dhaval Patel";
let repocount = 50;

console.log(`My name is ${name.toUpperCase()} and my repo count is ${repocount}.`)


let game = new String("Dhaval Patel");

// 2 times underscore __proto__

console.log(game.__proto__);


// length
console.log(game.length);

// toUpperCase()
console.log(game.toUpperCase());

// toLowerCase()
console.log(game.toLowerCase());

// charAt(" ")
console.log(game.charAt(2));

// indexOf()
console.log(game.indexOf("D"));

// substring 
console.log(game.substring(0,4));

// slice
console.log(game.slice(-10,4));

// splice 
// console.log(game.splice(1, 2, "DS"));

// trim
let game_01 = "   Dhaval Patel    ";
console.log(game_01);
console.log(game_01.trim());

// replace 
let url = "https//:dhavalpatel/dhaval%20patel.com"
console.log(url.replace('%20', '-'));


// includes 

console.log(game.includes("Dhaval"));


