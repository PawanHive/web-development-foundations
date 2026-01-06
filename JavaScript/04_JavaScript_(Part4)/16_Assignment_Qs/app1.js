/*
Write a JavaScript program to remove all occurrences of a given element num from an array.

Example: if
let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;

Output:
[1, 3, 4, 5, 6, 3]
*/

let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;

for (let i = 0; i < arr.length; i++) {
    // console.log(i, arr[i])               // no need
    if(arr[i] == num) {
        arr.splice(i, 1)
        // console.log(arr)                 // no bad, it can be outside of the function
    }
}
console.log(arr)