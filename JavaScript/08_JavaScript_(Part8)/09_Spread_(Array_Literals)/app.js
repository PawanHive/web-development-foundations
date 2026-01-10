/*
******************** Spread with Array Literals *****************
(...Spread):
- can copy an array
- can convert string to array
- can merge array

*/

// Spread(...): Copy an Array -------------------------------

let arr = [1, 2, 3, 4, 5]
let newArr = [...arr]           // it will create copy of above array with the help of (...Spread)

console.log(newArr);        // (5) [1, 2, 3, 4, 5]
newArr.push(6);
console.log(newArr);         // (6) [1, 2, 3, 4, 5, 6]
console.log(arr);            // (5) [1, 2, 3, 4, 5]          ... REMEMBER actual array is still same

// Spread(...): Converting string to array -----------------

let char = [...'hello']
console.log(char);          // (5) ['h', 'e', 'l', 'l', 'o']

// Spread(...): Merge Array ---------------------------------

let odd = [1, 3, 5, 7, 9]
let even = [2, 4, 6, 8, 10]

let merge = [...odd, ...even]
console.log(merge);             // (10) [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]