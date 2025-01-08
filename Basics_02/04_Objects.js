// new objects in the Java Script 

// singleton >> using the object constructor 
const tinderuser = new Object();
tinderuser.name = "Dhaval patel";
tinderuser.age = 25;
tinderuser.email = "pateldhaval@google.com";
tinderuser.location = "Ahmedabad";

console.log(tinderuser);

// objects using the objects 

const user = {
    name : "Dhaval Patel",
    "full name" : {
        fisrt : {
            firtsName : "DHAVAL",
            last:{
                lastName : "PATEL",
            }
        }
    }
}
console.log(user["full name"].fisrt.last);


// ################################## the new things in the objects ####################################


