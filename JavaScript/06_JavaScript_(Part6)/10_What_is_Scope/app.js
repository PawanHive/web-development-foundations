/*
******************* Scope *********************

==> Scope determines the accessibility of variables, objects, and funtions from different parts of the code.

- Function = Variables defined inside a function are not accessible (visible) from outside the function.
- Block
- Lexical
*/

// Function Scope:
let sum = 100;              // Global Scope

function calSum(a, b) {
    let sum = a + b;            // Function Scope
    console.log(sum);           // this will only access inside 'sum' variable
}
calSum(1, 2)       // 3
console.log(sum)   // 100         // we can't access variable outside, which defined inside the function.

    // so we can define another variable with the same name (outside)