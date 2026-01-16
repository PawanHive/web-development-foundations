/*
********************* Await Function ************************

2. await:
==> await pauses the execution of an async function until a 
Promise is resolved or rejected.

    -> It unwraps the Promise and gives the final value
    -> await ko hamesha async function ke andar hi use kiya jaa
    sakta hai

KEY POINTS:

    - Used to wait for a Promise
    - Works only inside async functions
    - Pauses the current async function
    - Returns the resolved value
    - Rejected Promise throws an error
    - Makes async code look synchronous

# More about (await):
==> The await operator is used to wait for a Promise and get 
its fulfillment value (Because async functions return 
Promises, not real values.). It can only be used inside an 
async function or at the top level of a module.

*/

//==============================================================

// ## await ##

function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        }, 1000)
    })
}

async function demo1() {
    await getNum();
    await getNum();
    await getNum();
    await getNum();

    getNum();
}

// demo1();       // uncomment it when you want to run above code.

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

// # This program shows how to refactor Promise chaining (.then().catch())
// using a cleaner and more readable async/await syntax.
// The changeColor function returns a Promise that changes the color after a delay.
// Using await ensures that each color change happens sequentially (one after another).
// The last color change is called without await, so it runs independently.

let h1 = document.querySelector('h1');

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {               // here is no chance of reject.
        setTimeout(() => {
            h1.style.color = color;
            console.log(`color changed to ${color}`)
            resolve("color changed");
        }, delay);
    })
}

// changeColor('red', 1000)
// .then(() => {
//     console.log("red color was completed")
//     return changeColor('orange', 1000)
// })
// .then(() => {
//     console.log("orange color was completed")
//     return changeColor('green', 1000)
// })
// .then(() => {
//     console.log("green color was completed")
//     return changeColor('violet', 1000)
// })
// .then(() => {
//     console.log("violet color was completed")
//     return changeColor('blue', 1000)
// })
// .then(() => {
//     console.log("blue color was completed")
// })
// .catch(()=> {
//     console.log("color not changed")
// })

// => Above commented code can rewrite in few lines using async & await function:

async function demo() {
    await changeColor('red', 1000)
    await changeColor('orange', 1000)
    await changeColor('green', 1000)
    await changeColor('violet', 1000)
    changeColor('blue', 1000)
}
demo();