/* 
****************** Set Timeout *********************

==> setTimeout() is a JavaScript function used to execute a function once after a specified delay (time).

SYNTAX:

==> setTimeout(function, delay, arg1, arg2, ...)                            // HERE: 'function' will be a callback function

==> setTimeout(() => {
    // code
    }, delay);
*/

console.log("Hi there");
setTimeout(() => {
    console.log("apna college");
}, 2000)
console.log("Welcome too");