/*
“Write a JavaScript program to check if an element exists in an array or not.”
*/

let arr = [1, 3, 5, 7, 9]
let item = 5;

if (arr.indexOf(item) != -1) {
    console.log("Element exist")
} else {
    console.log("Element not existed")
}