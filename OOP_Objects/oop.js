// this is the file for the OOPS in the javascript:

// let;s make an object in the java scropt to understand the OOPS:

const user = {
    username : "dhaval patel",
    age : 26,
    email : "pateldhaval@google.com",

    // function is:
    getuserDetails : function () {
        // 'this' is used to call the name from the above block of code:
        // console.log(`name: ${this.username}`);

        // this is used for the current context:
        console.log(this);
    }
}
console.log(user);
// // console.log(user[username]);
// console.log(user.getuserDetails);
console.log(this);

// the importance of new:

function  user(username, logInCount, isLoggedIn) {
    this.username = username;
    this.logInCount = logInCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`welcome: ${this.username}`);
    }

    // return this is by default;
    return this
}

// the importanvce of new is the everytime you'll get the new value not the overalapped value in the javascript:
const userOne = new user('dhaval patel', 8, true);
const userTwo = new user('dhaval', 88, true);
// console.log(userOne);
console.log(userOne.constructor);
console.log(userTwo);

// Example:2:

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  const auto = new Car('Honda', 'Accord', 1998);
  
  console.log(auto instanceof Car);
  // Expected output: true
  
  console.log(auto instanceof Object);
  // Expected output: true






