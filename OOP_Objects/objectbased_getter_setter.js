// objects based getter and the setter in the javs script:

// function >>> object.defineproperty() 

function user(){
    this._email = email;
    this._password= password;
    
    // email
    Object.defineProperty(this, 'email', {
        get : function(){
            return this._email.toUpperCase();
        },
        set : function(value){
            this._email = value;
        }
    })
    // password
    Object.defineProperty(this, 'password', {
        get : function(){
            return this._password.toUpperCase();
        },
        set :  function(value){
            this._password = value
        }
    })
}

const chai = new User("dee@google.com", "1234@dee.com")
console.log(chai);



