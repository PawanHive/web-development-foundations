// Qs. Square and sum the array elements using the arrow function and then find the average of the array.

// MY SOLUTION:
let arr = [1, 2, 3, 4, 5];

let square = arr.map((el) => (el*el))
console.log(square);

let sum = square.reduce((acc, el) => {
    return acc + el;
})
console.log(sum);

avg = sum / arr.length;
console.log(avg);           // output: 11
