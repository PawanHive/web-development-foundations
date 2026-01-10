/*
********************* (...rest) **************************
1. (...rest):
==> Rest operator (...) in JavaScript is used to collect 
multiple values into a single array or object.

ONE-LINE MEMORY TIPS:
Rest(...) = collect values & Spead(...) = expand values

KEY POINTS:

- Looks same as spread (...) but works opposite
- Used in functions and destructuring
- Collects remaining values
- Must be the last parameter
*/

// (...rest): Handle unknown number of arguments:-(useful when argument count is not fixed)

function collect(...args) {         // collecting ARGUMENTS
    
    for (let i = 0; i < args.length; i++) {
        console.log(`You gave us: ${args[i]}`)
    }
};
console.log(collect(1))     //output: You gave us: 1
console.log(collect(1, 6, 3, 8, 3, 1))     
//output: You gave us: 1
//output: You gave us: 6
//output: You gave us: 3
//output: You gave us: 8
//output: You gave us: 3
//output: You gave us: 1


// New concetp: about 'arguments' Keyword -------------------------------------------------------

function show() {
    console.log(arguments)
}
console.log(show(1, 2, 4, 5))           // it will print argument collections, but i wil never behave like array we need to use (...rest) to behave it like an array like below example
//output: Arguments(4) [1, 2, 4, 5, callee: ƒ, Symbol(Symbol.iterator): ƒ]


// (...rest): Collect multiple function arguments ( accepts any numbers of arguments) --------------------------------------------

// sum:
function getSum(...args) {         // now here (...rest) will collect all argument and behave like array, so we can use array methods on it like reduce() and all
    return args.reduce((acc, el) => (acc + el))
}
console.log(getSum(2, 4, 5))         // 11
console.log(getSum(200, 400, 500))         // 1100

// min:
function getMin(...args) {
    return args.reduce((min, el) => {
        if(min < el) {
            return min;
        } else {
            return el;
        }
    })
}
console.log(getMin(5, 6, 4, 7))         // 4
console.log(getMin(5, 6, 4, -7))        // -7


// (...rest): Rest in array destructuring (collects remaining array elements) ----------------------------------------------------------------
 function getAdd(msg, ...args) {
    console.log(msg);
    return args.reduce((acc, el) => {
        return acc + el;
    })
 }
 console.log(getAdd("hello Pawan", 4, 6, 10))       // hello Pawan  20
 console.log(getAdd('hi', 1, 1, 1))                 // hi 3