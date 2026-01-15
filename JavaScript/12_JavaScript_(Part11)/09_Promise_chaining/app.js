/*
******************** Promise Chaining ********************

1️⃣ What is Promise Chaining?
==> Promise chaining is executing multiple asynchronous 
operations one after another by returning promises from 
.then()

📌 Each step waits for the previous one to finish.

//---------------------------------------------------------------

7️⃣ Simple Analogy (BEST ONE):

Promise Chain = Train 🚆

    ==> Each .then() = one coach
    ==> return = coupling between coaches

❌ No return → coaches disconnect
✅ Return promise → train stays connected

//---------------------------------------------------------------

🔷 First, Understand the CORE RULE
==> Every .then() ALWAYS returns a new Promise.

This is the key 🔑
Everything depends on this.

//---------------------------------------------------------------

KEY POINTS: 

==> .then() always returns a promise
==> return keeps the chain alive
==> No return = broken chain
==> One .catch() is enough
==> Avoid nesting inside .then()
*/

//=================================================================

function savetoDb(data) {                                   // function that simulates saving data to DB
    return new Promise((resolve, reject) => {              // returns a Promise (async operation)
        let internetSpeed = Math.floor(Math.random() * 10) + 1; // random internet speed (1–10)

        if (internetSpeed > 4) {                           // condition for success
            resolve("success: data was saved");            // promise resolved (SUCCESS)
        } else {
            reject("failure: weak connection");            // promise rejected (FAILURE)
        }
    });
}

// savetoDb("apna college")
// .then(() =>{
//     console.log("data1 saved. promise was resolved");
//     savetoDb("hello world")
//     .then(() => {
//         console.log("data2 saved.")
//     })
// })
// .catch(() => {
//     console.log("promise was rejected")
// })


    // we can rewrite above code in this way also.

savetoDb("apna college")                                   // first DB save → returns Promise P1
    .then(() => {                                          // runs if P1 is resolved
        console.log("data1 saved. promise was resolved");  // success message for first save
        return savetoDb("hello world");                    // RETURN promise → chain waits for it
    })
    .then(() => {                                          // runs after "hello world" is saved
        console.log("data2 saved.");                        // success message for second save
        return savetoDb('shradha');                         // RETURN next promise → chain continues
    })
    .then(() => {                                          // runs after "shradha" is saved
        console.log("data3 saved");                         // success message for third save
    })
    .catch(() => {                                         // runs if ANY promise above fails
        console.log("promise was rejected");                // common error handler
    });