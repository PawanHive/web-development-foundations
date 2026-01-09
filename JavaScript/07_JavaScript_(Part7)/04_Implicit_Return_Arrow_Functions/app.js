/*
****************** Arrow Functions ********************

==> implicit return = automatic return (means no need to use 'return' keyword to return the value, )

FORMAT: for implicit return Arrow Function

const func = (arg1, agr2...) => (value)             // REMEMBER: SYNTAX changed here: for implicit return we have to use () parenthesis after ARROW  at the place of {} curly braces



==> explicit return = (means we need to use 'return' keyword to tell program to return the value)
*/


// multiplication:
const mul = (a, b) => (a * b)            // here used () insted of {}   // implicit return
console.log(mul(5, 5))

// add:
const add = (a, b) => a + b;             // as there is single definition so we can also remove (), if had only single definition
console.log(add(5, 5))

