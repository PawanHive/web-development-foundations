/*
*********************** Return *********************

==> return keyword is used to return some value from the function.

input   ==>     FUNCTION (does some work)    ==> output


function funcName(para1, para2...) {
    // do something
    return val;
}
*/

// Normal function without 'return' ---------------------------------------------------
function add(a, b) {
    console.log(a + b);
}
add(3, 11)

// function with 'return' Keyword ------------------------------------------------------
function sum(a, b) {
    return a + b;       // 'return' != 'print'... return = will sends the result back to the caller like[sum(1, 2)]... so now we have to console this now
}
sum(1, 2)
console.log(sum(1, 2))      // 3

    // OR
let plus = sum(3, 4)
console.log(plus)

    // let suppose we have to calculate the sum of 3 number
let plus2 = sum(sum(1, 2), 3)    // sum(1, 2) will solve first = 3, and now become sum(3, 3) = 6
console.log(plus2)
console.log(sum(sum(10, 20), 30))       // 60
console.log(sum(sum(11, 22), 33))       // 66

// REMEMBER: after 'return' Keyword function execution will start --------------------------

function sub(c, d) {
    console.log('Subtraction start');
    return c - d;
    console.log('subtraction done')         // never print this line
    console.log('subtraction done1')         // never print this line
}
console.log(sub(10, 5))     // 5

// more Example:

function isAdult(age) {
    if (age >= 18) {
        return "adult"
    } else {
        return "not adult"
    }
    console.log("bye bye")          // if any one of the above 'return' executed then below line will never execute/print
}
console.log(isAdult(13))
console.log(isAdult(23))
