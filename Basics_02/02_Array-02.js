// Array Part-02

// few more functions of an array

// merging of the arrays 
// 1. push >> not a good idea to join the 2 arrows 

let marvel_heroes = ["spiderman", "thor", "ironman"];
let dc_heroes = ["superman", "batman", "flash"];

// let newheroes= marvel_heroes.push(dc_heroes);
// // console.log(newheroes.length);
// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes[3][1]);

// 2. concat >> has some limitations 
let allHeros = marvel_heroes.concat(dc_heroes);
console.log(allHeros);


// 3. new way to join the arrays 
// ...name >>> best way to join the two arrays 
let allNewHeroes = [...marvel_heroes, ...dc_heroes]
console.log(allNewHeroes);


// array inside the array 
// use tha flat array 
let realArray = [1,2,3,4, [5,6,7, [8,9,10], 11,12]];
console.log(realArray.flat(Infinity));

// how to tell that it is an array 
console.log(Array.isArray("Dhaval Patel")); // it is not an array it's a string
console.log(Array.from("Dhaval Patel"));

console.log(Array.from({name:"dhaval"})); //interesting interview pov


// array 
let score = 100;
let score1 = 200;
let score3 = 300;

console.log(Array.of(score, score1, score3));
