/*
******************* Array Methods ********************

.concat() ==> merge elements of TWO arrays

.reverse() ==> reverse elements of an array, never create new array.. changes made to actual array.
*/

let primary = ['red', 'yellow', 'blue'];
let secondary = ['orange', 'green', 'violet'];

//.concat() --------------------------------------

let allColors = primary.concat(secondary);
console.log(allColors);            //output: (6) ['red', 'yellow', 'blue', 'orange', 'green', 'violet']

//.reverse() --------------------------------------
primary.reverse();
secondary.reverse();
console.log(primary);               //output: (3) ['blue', 'yellow', 'red']        
console.log(secondary);             //output: (3) ['violet', 'green', 'orange']
