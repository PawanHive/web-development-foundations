/*
******************* Get Values **********************

==> JS automatically converts objects keys to strings.
==> Even if we made the number as a key, the number will be converted to string.
*/

const obj = {
    1: 'a', 
    2: 'b',
    true: 'c',              // REMEMBER: even all these key word of JS will also converted to string, because it is 'key' in Object Literals
    null: 'd', 
    undefined: 'e'
};
console.log(obj[1])    // a
console.log(obj[2])    // b         // REMEMBER: this '[2]' is converted in string(which is 'Key')...don't confuse it has (index of Array);
console.log(obj[null])          // d
console.log(obj[true])          // c
console.log(obj[undefined])     // e

// REMEMBER: (.) dot notation syntax will not convert 'Number Key' into string...so it will return ERROR
// console.log(obj.1)           //ERROR

//but (.) dot notation(operator) syntax will work with 'String Keys' like
console.log(obj.null)           // d
console.log(obj.true)           // c
console.log(obj.undefined)      // e



/*
==> we generally define 'keys' as 'string' not 'Numbers'
*/