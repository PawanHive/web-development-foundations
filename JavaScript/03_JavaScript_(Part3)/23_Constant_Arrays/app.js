/*
****************** Constant Array *********************

==> we can make array constant just by using keyword 'const'

FORMAT:

const arr = [1, 3, 5, 7]
*/

const arr = [1, 2, 3]           // in 'const' array we can change array but we can't create completely new array with same varible.. because 'arr' variable store address(location) not array value.
console.log(arr.push(4));
console.log(arr)                // (4) [1, 2, 3, 4]

// but, creating new array with the same varible will give ERROR

arr = [1, 2, 3]     // ERROR: app.js:17 Uncaught TypeError: Assignment to constant variable.
