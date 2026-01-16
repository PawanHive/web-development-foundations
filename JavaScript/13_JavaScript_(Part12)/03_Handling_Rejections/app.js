// # This program demonstrates how to handle Promise rejection during async/await execution.
// If any Promise gets rejected in between awaited calls, normal execution stops at that point.
// By using try...catch, we can catch the error and prevent the program from crashing.
// Code written AFTER the try...catch block will always execute,
// whether the Promise is resolved or rejected.

let h1 = document.querySelector('h1');

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {               // here is no chance of reject.
        setTimeout(() => {
            let num = Math.floor(Math.random() * 5) + 1;
            if (num > 3) {
                reject("Promise rejected");
            }

            h1.style.color = color;
            console.log(`color changed to ${color}`)
            resolve("color changed");
        }, delay);
    })
}

async function demo() {
    try {                               // jin code par doubt hota hai reject hone ka unhe ham try ke under dalte hain
        await changeColor('red', 1000)
        await changeColor('orange', 1000)
        await changeColor('green', 1000)
        await changeColor('violet', 1000)
        await changeColor('blue', 1000)
    } catch (error) {
        console.log("error caught");
        console.log(error);
    }

        // this below code should always execute:
    let a = 5;
    console.log(a)
    console.log("new number = ", a + 3);
}
demo();