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




