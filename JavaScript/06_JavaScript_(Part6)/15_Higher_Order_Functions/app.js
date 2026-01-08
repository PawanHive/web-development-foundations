/*
************* High Order Functions *********************

=> A function that does one or both:

==> takes one or multiple functions as arguments
==> returns a function
*/


//HIGHER ORDER FUNCTION
// Takes one or multiple functions as arguments:

let greet = function() {
    console.log('hello');
}
    // now we want there should one function which call multiple time above function how much time we say
function multipleGreet(func, n) {       // HIGHER ORDER FUNCTION
    for (let i = 1; i <= n; i++) {
        func()
    }
}
// multipleGreet(greet(), 5)       // WRONG  ... because greet() = execute instantly...... greet = definition of greet
multipleGreet(greet, 5)