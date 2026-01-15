/*
Promises

then() & catch()

1️⃣ What is .then()?
==> .then() is a method that runs when a Promise is fulfilled 
(resolved).

📌 In simple words:

    Promise success → .then() runs
    Promise failure → .then() is skipped

-----------------------------------------------------------------

2️⃣ What is .catch()?
==> .catch() is a method that runs when a Promise is rejected (error occurs).

📌 In simple words:

    Promise failure → .catch() runs
    Promise success → .catch() is skipped
*/

//===========================================================

function savetoDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("success: data was saved");  
        } else {
            reject("failure: weak connection");
        }
    });
}

// let request = savetoDb("apna college");     // request = promise object
// // console.log(request)
// request
// .then(() =>{
//     console.log("promise was resolved")
//     // console.log(request)
// })
// .catch(() => {
//     console.log("promise was rejected")
//     // console.log(request)
// })

    // above commented code can also written like this

savetoDb("apna college")
.then(() =>{
    console.log("promise was resolved")
})
.catch(() => {
    console.log("promise was rejected")
})