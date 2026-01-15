


let h1 = document.querySelector('h1');
// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if (nextColorChange) {
//             nextColorChange();
//         }
//     }, delay);
// }

// changeColor('red', 1000, () => {
//     changeColor('orange', 1000, () => {
//         changeColor('green', 1000, () => {
//             changeColor('violet', 1000, () => {
//                 changeColor('blue', 1000)
//             })
//         })
//     })
// });


// # now refactor the above old code according to 'Promise':

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {               // here is no chance of reject.
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed");
        }, delay);
    })
}

changeColor('red', 1000)
.then(() => {
    console.log("red color was completed")
    return changeColor('orange', 1000)
})
.then(() => {
    console.log("orange color was completed")
    return changeColor('green', 1000)
})
.then(() => {
    console.log("green color was completed")
    return changeColor('violet', 1000)
})
.then(() => {
    console.log("violet color was completed")
    return changeColor('blue', 1000)
})
.then(() => {
    console.log("blue color was completed")
})
.catch(()=> {
    console.log("color not changed")
})