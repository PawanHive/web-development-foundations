/*

*/

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

savetoDb("apna college")                                   // first DB save → returns Promise P1
    .then((result) => {                                          // runs if P1 is resolved
        console.log("data1 saved.");                        // success message for first save
        console.log("result of promise: ", result)
        return savetoDb("hello world");                    // RETURN promise → chain waits for it
    })
    .then((result) => {                                          // runs after "hello world" is saved
        console.log("data2 saved.");                        // success message for second save
        console.log("result of promise: ", result)
        return savetoDb('shradha');                         // RETURN next promise → chain continues
    })
    .then((result) => {                                          // runs after "shradha" is saved
        console.log("result of promise: ", result)
        console.log("data3 saved");                         // success message for third save
    })
    .catch((error) => {                                         // runs if ANY promise above fails
        console.log("promise was rejected");                // common error handler
        console.log("error of promise: ", error)

    });