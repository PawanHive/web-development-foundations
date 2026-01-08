/*
******************* Function Expressions ****************

==> different way to defining Function (functions ko likhne ke alag-alag tarike);
*/

// Function Stored in Varible: (Nameless Function)

const sum = function(a, b) {      // NOTICE: function has no 'name'
    return a + b;
}
console.log(sum(1, 2))

// -----------------------------------------------

let hello = function() {
    console.log('hello')
}
hello()

    // we can also change value of 'hello' varible like any other varible
hello = function() {
    console.log('namaste')
}
hello()