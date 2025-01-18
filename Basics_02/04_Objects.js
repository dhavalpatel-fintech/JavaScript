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
        first : {
            firtsName : "DHAVAL",
            last:{
                lastName : "PATEL",
            }
        }
    }
}
console.log(user["full name"].first.last);


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

// ######################## Object inside the Array #########################

const user01 = [
    {
        user : 1,
        email : "dhaval@google.com"
    }, 
    {
        user : 2,
        email : "patel@microsoft.com"
    },
    {
        user : 3,
        email : "dp@meta.com"
    }
]
console.log(user01[1]);


// calling the tinder users key and value in a different rows

console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));

console.log(Object.entries(tinderuser));

for(const [key,value] of Object.entries(tinderuser)){
    console.log(`key : ${key}, value : ${value}`);
}
