// everything in the javascript is the object at the end and it goes from the child to parent to grand parent:

// let's check the example in the javascript:
// use the function:

function multipleby5(num){
    return num*5
}
multipleby5.power = 2;

console.log(multipleby5(5));
console.log(multipleby5.power);
console.log(multipleby5.prototype);

// new methods >> printMe() and the Increment();

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.printMe()

