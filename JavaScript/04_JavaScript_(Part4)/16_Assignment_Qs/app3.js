/*
Write a JavaScript program to find the sum of digits of a given number.
Example: if number = 287152, sum = 25

*/

// Actual way to solve this question (interview type solution)

let num = 287152;
let sum = 0;

while (num > 0) {
    let lastDigit = num % 10;
    console.log(lastDigit)
    sum = sum + lastDigit;
    num = Math.floor(num / 10)
}
console.log(sum)

// Easier Way 

let number = prompt("enter no.");
let total = 0;

for (let digit of number.toString()) {
    total = total + Number(digit);
}

console.log(total); // 25
