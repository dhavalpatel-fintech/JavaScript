const User = {
    _email : 'dhaval@google.com',
    _password : 'dee@1234',

    // email in the object based
    // get
    get email(){
        return this._email.toUpperCase()
    },
    // set
    set email(value){
        this._email = value
    },

    // password in the object based
    // get
    get password(){
        return this._password.toUpperCase()
    },
    // set
    set password(value){
        this._password = value
    }
}
// factory function >>> object.create();
const tea = Object.create(User);
console.log(`the email id is: ${tea.email}`);
console.log(`the password is: ${tea.password}`);
