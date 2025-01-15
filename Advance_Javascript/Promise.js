// PROMISES IN THE JAVA SCRIPT 

// 1. 

// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task has been completed!!");
//         resolve();
//     })
// });
// // now to execute the above fuction:
// promiseOne.then(function(){
//     console.log("Promise Consumed");
// })

// 2. 
// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task has been completed!");
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("Promise Consumed!"); 
// })

// 3.
// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username:"DhavalPatel", Password:"12345@"})
//     },1000);
// });
// promiseThree.then(function(user){
//     console.log(user);
// });

// 4. 
// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if (!error) {
//             resolve({username: "dhaval patel", password:'1234567890'})
//         }
//         else{
//             reject("Error: Simething went wrong!")
//         }
//     },1000)
// })
// promiseFour.then((user) => {
//    console.log(user);
//    return user.username
// }).then((username) => {
//    console.log(username);
// }).catch(function(error){
//    console.log(error);
// }).finally(() => console.log("The promise is either resolved or rejected"));


// 5. 
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

// 6. 
// with the fetch function in the Promise 

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}
getAllUsers();

// 7. 
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.