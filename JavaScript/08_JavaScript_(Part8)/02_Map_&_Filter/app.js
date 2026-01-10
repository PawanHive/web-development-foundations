/*
************************ Map() & filter() ************************

1. map():
==> .map() executes a function on every element of an array 
and returns a new array with the transformed values.


SYNTAX:
array.map(function(element, index, array) {
  return newValue;
});


KEY POINTS:

- Works only on arrays
- Returns a new array
- Original array does not change
- Each iteration must return a value
- Used for data transformation
*/

// map(): ---------------------------------------------------------
let arr = [1, 2, 3, 4];

let double = arr.map((el) => {
    return el * 2;                  // will multipley each element * 2;
});
console.log(double)             // (4) [2, 4, 6, 8]

        // square of arr

let square = arr.map((el) => {
    return el * el;
})
console.log(square);            // (4) [1, 4, 9, 16]


// Another Example: .map() ----------------------------------------
let student = [
    {
        name: 'aman', 
        marks: 94
    },
    {
        name: 'aman', 
        marks: 81
    },
    {
        name: 'aman', 
        marks: 54    
    }
]
console.log(student)

let studentMarks = student.map((el) => {
    return el.marks
})
console.log(studentMarks);       // (3) [94, 81, 54]


        // remove all student 'marks' value and give 'gpa' value at that place
let gpa = student.map((el) => {       
    return el.marks / 10;              // converted marks into gpa value
});
console.log(gpa)        // (3) [9.4, 8.1, 5.4]

// =========================================================================

/*
************************** filter() ********************************

2. filter():
==> .filter() executes a function on each element of an array 
and returns a new array with elements that satisfy the condition.

SYNTAX:
array.filter(function(element, index, array) {
  return true | false;
});

KEY VALUE:

- Works only on arrays
- Returns a new array
- Original array remains unchanged
- Callback must return true or false
- Used for selecting or removing elements
*/

let arrs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

        // let filter all even no.
let ansEven = arrs.filter((el) => {
    return el % 2 == 0;             // even -> true, odd -> false
});
console.log(ansEven);                   // (6) [2, 4, 6, 8, 10, 12]

        // let filter all odd no.
let ansOdd = arrs.filter((el) => {
    return el % 2 != 0;             // odd -> true, even -> false
});
console.log(ansOdd)                 // (6) [1, 3, 5, 7, 9, 11]

        // let print < 5 no.
let lessThan = arrs.filter((el) => {
    return el < 5; 
});
console.log(lessThan);              // (4) [1, 2, 3, 4]