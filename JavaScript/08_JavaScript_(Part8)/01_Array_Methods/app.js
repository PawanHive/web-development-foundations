/*
*********************** Array Methods ********************

1. forEach():
==> forEach() runs a function on every element of an array 
but does not return a new array.

SYNTAX: 

array.forEach(function(element, index, array) {
  // code to execute
});

Key points:

- Works only on arrays
- Executes callback for each element
- Does not return anything (undefined)
- Cannot be stopped using break or return
- Used mainly for side effects (logging, updating values, DOM changes)
*/

// ============================================================

// forEach() ---------------------------------------------------------------------
let arr = [1, 2, 3, 4, 5];


let print = function(el) {
    console.log(el);
};
arr.forEach(print);            // we assign function to 'print' variable

            // OR

arr.forEach(function(e) {       // function defined into forEach
    console.log(e)
})

            // OR

arr.forEach((el) => {           // here arrow function used instead of normal, but output is same
    console.log(`here arrow function used:  ${el}`)
})


// forEach(): On Array Ojbect :- [{}, {}, {}] ------------------------------------
let arrObj = [
    {
        name: 'aman',
        marks: 93
    },
    {
        name: 'shradha',
        marks: 91
    },
    {
        name: 'rajat',
        marks: 90
    }
]
console.log(arrObj)

        //  print marks of every studen:
console.log(arrObj[2].marks)               // hard coded way

arrObj.forEach((e) => {                   // access all marks using forEach()
    console.log(e)                        // print all object as an element
    console.log(e.marks)
})