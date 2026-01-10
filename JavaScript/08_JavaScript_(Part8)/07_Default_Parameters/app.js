/*
****************** Default Parameter **********************

1. Default Parameters:
==> A default parameter allows a function to use a predefined
 value when an argument is missing or undefined.

SYNTAX: 
function greet(name = "Guest") {
  console.log(name);
}


KEY POINTS:

- Used in function parameters
- Applies only when the argument is undefined
- Helps avoid undefined values
- Makes code cleaner and safer
*/

// let see in which situation we use DEFAULT PARAMETER:
function sum1(a, b) {
    return a + b;
}
console.log(sum1(1, 4))          // 5
console.log(sum1(1))             // NaN


// NaN problem will solve here
function sum(a, b = 0) {        // b=1; will assign incase if don't provide the sencond parameter, uses to avoid 'NaN' or 'undefined'
    return a + b;
};
console.log(sum(1, 5))  // here a = 1, b = 5
console.log(sum(65, 6))  // here a = 1, b = 5
console.log(sum(1)) // here a = 1, b = 0;     ... here 'b' take is own predefined value (b = 0);
console.log(sum(11)) // here a = 11, b = 0;     ... here 'b' take is own predefined value (b = 0);



// but assigning predefined value to first parameter is wrong practice like:

function add(c = 1, d) {     // WRONG PRACTICE: we can't give predefined value to first parameter  
    return c + d;
};
console.log(add(5, 9));     // 14
console.log(add(5, 0));     // 5
console.log(add(1));        // NaN          ...because, parameter ki value by order assign hoti hai, is case me (a = 1, b = 'undefined') hoga