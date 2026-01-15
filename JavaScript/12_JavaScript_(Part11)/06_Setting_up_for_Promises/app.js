/*
**************** Setting up for Promises **************

here we will create a kind of real world,' Callback Hell' 
program and in next lesson we will fix it using 'Promises'
*/

//===========================================================

// Example: Callback Hell (Real-World Scenario)


// Imagine this is a fake database.
// We are trying to save multiple pieces of data one after another.
// Each save depends on the previous one being successful.


function savetoDb(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10);
    if (internetSpeed > 4) {
        success();                          // call success callback function
    } else {
        failure();                          // call success callback function
    }

}

savetoDb('apna college',
    () => {                                             // success callback function
        console.log("your data was saved");
        savetoDb('hello world',                         // Second database save (nested inside first success)
            ()=>{
                console.log("success2: data2 saved");
                savetoDb('shradha',                     // Third database save (nested even deeper)
                    ()=>{                               
                        console.log("success3: data3 saved")
                    },
                    ()=> {                              // FAILURE callback for third data 
                        console.log("failuer3: weak connection")
                    }
                )
            },
            ()=>{                                       // FAILURE callback for second data
                console.log("failuer2: weak connection")
            }
        )
    },
    () => {                                             // FAILURE callback for first data
        console.log("weak connection, data not saved")

    }
);


    /*

NOTE:

The task we are performing is actually very simple:
→ save data to a database.

But because each save depends on the previous one,
we keep nesting callbacks inside callbacks.

This creates:
- Deep indentation
- Poor readability
- Confusing control flow
- Difficult error handling

This situation is called **Callback Hell**.

Even though the logic is simple,
the code becomes hard to understand, maintain, and debug.

That is why modern JavaScript avoids this pattern
and uses Promises or async/await instead.

*/  
