/*
**************** Array Methods ******************

.slice() ==> copies a portion of an array, and will not make changes in original array

*/

let colors = ['red', 'yellow', 'blue', 'orange', 'pink', 'white'];

console.log(colors.slice())                 //output: (6) ['red', 'yellow', 'blue', 'orange', 'pink', 'white']
console.log(colors.slice(2))                //output: (4) ['blue', 'orange', 'pink', 'white']
console.log(colors.slice(2, 3))             //output: ['blue']
console.log(colors.slice(1, 4))             //output: (3) ['yellow', 'blue', 'orange']
console.log(colors.slice(-2))   //6-2 ==> 4 //output: (2) ['pink', 'white']
console.log(colors.slice(4))   //6-2 ==> 4  //output: (2) ['pink', 'white']
console.log(colors.slice(colors.length-1)) // 6-1 ==> 5 //output: ['white']
console.log(colors.slice(8))                //output: []