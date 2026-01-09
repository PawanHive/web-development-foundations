/*
******************** Set Interval ***********************

==> setInterval() is a JavaScript function used to execute a function repeatedly at fixed time intervals.

SYNTAX:
==> setInterval(function, delay)                // HERE: 'function' will be a callback function

==> setInterval(() => {
    // code
    }, delay);

//--------------------------------------------------------------------------------------------------------
==> clearInterval():
clearInterval() is a JavaScript function used to stop a repeating task started by setInterval()
*/



let id = setInterval(() => {
    console.log("Apna college")
}, 2000)
console.log(id)     // 1           // means every set interval has unique id          
// clearInterval(id)    // stop execution of setInteral() instantly               