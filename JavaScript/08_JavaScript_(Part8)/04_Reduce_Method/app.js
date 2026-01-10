/*
******************* .reduce() *********************** 

1. reduce():
==> .reduce() executes a reducer function on each element
of an array and returns one accumulated result (number, object, array, etc.).

SYNTAX: 
array.reduce(function(accumulator, element, index, array) {
  return updatedAccumulator;
}, initialValue);

sigma syntax:
arr.reduce(reducer function with 2 variables for (accumulator, element));


KEY POINTS:

- Works only on arrays
- Returns a single value
- Does not modify the original array
- Uses an accumulator to store the result
- Can return any data type (number, object, array)
*/

let arr = [1, 2, 3, 4]

let finalValue = arr.reduce((acc, el) => {
    return acc + el;                          // accumulator me final value save hoti rahengi
});
console.log(finalValue);        // 10       ... actually printed sum of all no.