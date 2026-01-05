/*
Qs1.Write a JavaScript program to get the first n elements of an array.[n can be any positive number].
For example: for array [7,9,0,-2] and n=3
Print,[7,9,0]

*/

let nums = [7, 9, 0, -2];
let n = 3;


let ans = nums.slice(0, n)
console.log(ans)
