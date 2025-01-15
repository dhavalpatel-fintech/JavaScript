// PROMISES IN THE JAVA SCRIPT 

// 1. 

const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task has been completed!!");
        resolve();
    })
});
// now to execute the above fuction:
promiseOne.then(function(){
    console.log("Promise Consumed");
})