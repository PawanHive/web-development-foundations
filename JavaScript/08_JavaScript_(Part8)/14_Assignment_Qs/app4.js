/*
qs. Write a function called doubleAndReturnArgs which accepts an array and a varible number of arguments.
The function should return a new array with the origianl array values and all of the additonal arguments doubled
*/


// MY SOLUTION: Not 100% perfect

// function doubleAndReturnArgs(arr, ...args) {

//     return args.map((el) => {
//         return el * 2;
//     })

// }
// console.log(doubleAndReturnArgs(1, 2, 3, 4))


// Perfect Solution:

function doubleAndReturnArgs(arr, ...args) {

    let doubleArgs = args.map((el) => el * 2);
    return [...arr, ...doubleArgs];
}
console.log(doubleAndReturnArgs([1, 2, 3], 4, 4))       // (5) [1, 2, 3, 8, 8]
console.log(doubleAndReturnArgs([2], 10, 4))            // (3) [2, 20, 8]