/*
************************ Spread *********************************

1. spread(...)
==> The spread operator allows an iterable or 
object to be unpacked into separate elements or properties.

SYNTAX: 
function func(...arr) {
    // so something
}
*/

// Spread Used as: Pass array elements as function arguments

console.log(Math.min(1, 2, 3, 4, 5))        // 1
console.log(Math.max(1, 2, 3, 4, 5))        // 5

// let suppose we has a huge value which stored in array form, then how we will access 'min' or 'max' or anything:

let arr = [1, 5, 3, 7, 5, 4, 9, 7, 4, 2 ,79, 4, 0]

console.log(Math.min(arr[0], arr[1], arr[2]))        // WRONG PRACTICE: we can do but what if we had a very huge array data

console.log(...arr)              // 1 5 3 7 5 4 9 7 4 2 79 4 0
console.log(Math.min(...arr));   // 0          // spread used     ... so array ki value ek ek karke pass on hongi as an parameter
console.log(Math.max(...arr));   // 79         


// let use it for string:

let str = 'apnacollege';
console.log(...str);        // a p n a c o l l e g e
