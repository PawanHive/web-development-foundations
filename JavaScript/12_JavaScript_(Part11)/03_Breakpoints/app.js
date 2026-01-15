/*
1. What is a Breakpoint? (Simple Definition)

A breakpoint is a marker you place on a line of code 
where execution will stop temporarily.
*/


function one() {
    return 1;
}

function two() {
    return one() + one();
}

function three() {
    let ans = two() + one();
    console.log(ans);
}

three();


/*
Breakpoints are feature: 
which we add at any line of code. we can use this feature 
using our chrome browser

# STEPS TO USE IT:

-> open chorme brower -> open preview of our code -> inspect browser 
-> click over 'source' option beside 'console' -> from 'page' box select app.js file
-> in 'source' app.js -> click over line no. from where you want to add breakpoints 
-> now refresh page to start debugging -> in below section there is option(icon) (step into next function call) 
-> now you can see in (Call Stack) option by dropping it down step by step.
*/