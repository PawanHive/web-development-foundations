/*
Print the factorial of a number n.
Factorial of a number n is the product of all positive integers less than or equal to n, and it is denoted by n!.

Example:
7! (factorialof7) = 1x2x3x4x5x6x7=5040
5! (factorialof5) = 1x2x3x4x5=120
3! (factorialof3) = 1x2x3=6
0! Is always 1
*/

let n = prompt("enter no.");
let factorial = 1

for (let i = 1; i <= n; i++) {
    console.log(i)
    factorial = factorial * i    
}
console.log(factorial)