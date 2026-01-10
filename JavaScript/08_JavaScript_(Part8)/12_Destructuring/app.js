/*
******************** Destructuring **********************
1. Destructuring: 
==> Destructuring lets you extract values from arrays 
or objects and assign them to variables using a shorthand syntax.

ONE-LINE MEMORY TIPS:
👉 Destructuring = unpack values easily

Examples:

let arr = [1, 2, 3];
let [a, b, c] = arr;
console.log(a, b, c);           // 1 2 3
*/


// ARRAY DESTRUCTURING: --------------------------------------------------

let names = ['tony', 'bruce', 'peter', 'steve', 'pawan', 'shubham', 'sonu', 'monu'];
// let winner = names[0];
// let runnerup = names[1];
// let secondRunnderup = names[2]

        // above 3 line of code in one here;
let [winner, runnerup, secondRunnerup, ...others] = names;      // (...rest) used to store remaining all in one place

console.log(winner, runnerup, secondRunnerup);          // tony bruce peter

console.log(winner)             // tony
console.log(runnerup)           // bruce
console.log(secondRunnerup)     // peter
console.log(others);            // (5) ['steve', 'pawan', 'shubham', 'sonu', 'monu']


// ARRAY DESTRUCTURING: another example--------------------------------------------------

let arr = [1, 2, 3, 4, 5, 6];

let [a, b] = arr;
console.log(a, b)       // 1 2
console.log(b)          // 2

let [one, two, ...rest] = arr;
console.log(one)        // 1
console.log(two)        // 2
console.log(rest)       // (4) [3, 4, 5, 6]