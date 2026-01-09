// Qs. Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers.


// MY SOLUTION: 
// let arr = [10, 20, 30];
// let add = 0;                 //PROBLEM: as 'add' declared in global scope so add 20 continuous during multiple call
// let avg = 0;

// let arrayAverage = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         add = (add + arr[i]);
//         avg = add / arr.length;
//     }
//     return avg;
// }
// console.log(arrayAverage(arr))  // 20       ...Perfect output
// console.log(arrayAverage(arr))  // 40       
// console.log(arrayAverage(arr))  // 60       ... after calling function multiple times adding 20 to 20;

/*
Above solution is not 100% perfect, worked perfect to one time only
but as we call function multiple time then things goes wrong (adding 20 to actual avg value after each call)

Below code is  100%
*/

// ------------------------------------------------------
// MY SOLUTION: 2nd try

let arr = [10, 20, 30];


let arrayAverage = (arr) => {
    let add = 0;

    for (let i = 0; i < arr.length; i++) {
        add = (add + arr[i]);
    }
    return add / arr.length;;
}
console.log(arrayAverage(arr))
console.log(arrayAverage(arr))
console.log(arrayAverage(arr))
console.log(arrayAverage(arr))
console.log(arrayAverage(arr))
console.log(arrayAverage(arr))



