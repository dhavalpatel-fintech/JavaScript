// Getter and the setter in the java script:

// Is used to make an encrypted password and the modified too.

class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    // email
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        return this._email = value
    }

    // password
    get password(){
        return this._password.toUpperCase()
        // return `${this._password}dhaval`
    }
    set password(value){
        return this._password = value
    }
}
const dhaval = new User("dee@dhaval.ai", "1234dee");
// console.log(dhaval);
console.log(dhaval.password);
console.log(dhaval.email);


