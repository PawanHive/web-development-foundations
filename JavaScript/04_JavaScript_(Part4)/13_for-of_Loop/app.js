/*
********************** for-of loop **********************

==> use to access individual item from collections of item.

for ( element of collection) {
    // do something
}
*/


// for-of loop on ARRAY ----------------------------------
let fruits = ['mango', 'apple', 'banana', 'litchi', 'orange'];

for (const fruit of fruits) {           // REMEMBER: here 'fruit' is varibale where all element will store and print. & 'fruits' is collection / array / string
    console.log(fruit)
}

// for-of loop on STRING ---------------------------------
let string = 'ApnaColleg';

for (const char of string) {
    console.log(char)
}

    // we can also write like this:
console.log('we can also write like this')

for (const char of 'Pawan') {
    console.log(char)
}