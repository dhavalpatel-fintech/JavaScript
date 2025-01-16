// call is a method in the javascript to call the another function in the another function:

function setuserName(username){
    // complex DB calls
    this.username = username;
    console.log("called");
}
function createUser(username, emailId, password) {
    // so to just call the above function in the current one we can use the call functoin in the js.
    setuserName.call(this, username); //check out the syntax for calling the "call" function in the js.
    this.emailId = emailId;
    this.password = password;
}
const create = new createUser('dhaval patel', 'dhaval@google.com', "123456789@");
console.log(create);
