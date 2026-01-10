/*
******************* every() & sum() ***************************

1. every():
==> .every() tests each element of an array and returns true
 if all elements pass the condition; otherwise, it returns false.

SYNTAX:
array.every(function(element, index, array) {
  return true | false;
});

KEY POINTS:

- Works only on arrays
- Returns a boolean (true or false)
- Stops early if any element fails the condition
- Original array does not change
- Used for validation checks
*/

let arr1 = [8, 2, 6, 4];

let checkEvery1 = arr1.every((el) => {
    return el % 2 == 0;                 // all no. should be even
});
console.log(checkEvery1);                //output: true   ... means all element matches the condition


// another example:
let arr2 = [1, 3, 5, 7, 8]

let checkEvery2 = arr2.every((el) => {
    return el % 2 != 0;                // all no. should be odd
});
console.log(checkEvery2);                //output: false   ... means all element didn't matches the condition because 8 is even


/*
******************** .some() *****************************

2. some():
==> .some() tests elements of an array and returns true
 if any one element passes the condition; otherwise, it returns false.

SYNTAX:
array.some(function(element, index, array) {
  return true | false;
});

KEY POINTS:

- Works only on arrays
- Returns a boolean (true or false)
- Stops early as soon as one element passes
- Original array does not change
- Used for existence checks
*/

let arr3 = [7, 1, 3, 6];

let checkSome3 = arr3.some((el) => {
    return el % 2 == 0;                 // if any one no. matches the condition output will 'true'
});
console.log(checkSome3);                //output: true   ... because at the end 6 matches the condition of even no.


// another example:
let arr4 = [2, 4, 6, 8]

let checkSome4 = arr4.some((el) => {
    return el % 2 != 0;                // if any one no. matches the condition output will 'true'
});
console.log(checkSome4);                //output: false   ... because none of the element matches the condition of odd no.
