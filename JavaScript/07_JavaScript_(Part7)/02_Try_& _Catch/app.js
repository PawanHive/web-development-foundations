/*
******************* try & catch **************************
 ==> The try statement allows you to define a block of code to be tested for errors while it is being executed.

 ==> The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.
*/

// see this Example:

// console.log('hello')        // hello
// console.log('hello')        // hello
// console.log(a);             // ERROR
// console.log('hello 2')      // this and below lines not execute because of above ERROR accord
// console.log('hello 2')
// console.log('hello 2')
    // so just because of single ERROR remaining line didn't executed, in that case we use TRY & CATCH.

// -------------------------------------------------------

// using TRY & CATCH to above example:

console.log('hello')        // hello
console.log('hello')        // hello
try {
    console.log(a);         // ERROR
} catch(err) {
    console.log('caught an error.. "a" is not defined')
    console.log(err)        // this line will through the 'ACTUAL ERROR'
}          
console.log('hello 2')      // this and below lines not execute because of above ERROR accord
console.log('hello 2')
console.log('hello 2')

/* NOTE: (try{}) ke andar hame unn statement ko dalna, jis statement par hame doubt ho ki ERROR de sakta hai.
        (Catch() {}) ke andar ham uss 'ACTUAL ERROR' ko print kara sakte hain.

        agar (try{}) wale statement sahi honge... toh catch me koi ERROR nahi aayega.
*/

// -------------------------------------------------------

