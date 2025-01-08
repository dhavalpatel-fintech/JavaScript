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

const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"c", 4:"d"};
const obj3 = {5:"e", 6:"f"};

// assigning the values in the object 3

const obj4 = Object.assign({}, obj1, obj2, obj3);
console.log(obj4);

// the simple and the best way to do the concat is:
const obj5 = {...obj1, ...obj2, ...obj3, ...obj4};
console.log(obj5);

