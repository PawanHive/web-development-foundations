/*
***************** Array Methods ********************

.sort() ==> sorts an array in accending(default) or descending order.

*/

let days = ['monday', 'sunday', 'wednesday', 'tuesday'];
console.log(days.sort())            //output: (4) ['monday', 'sunday', 'tuesday', 'wednesday']

let alphabet = ['d', 'e', 'f', 'a', 'c', 'b'];
console.log(alphabet.sort())            //output: (6) ['a', 'b', 'c', 'd', 'e', 'f']

//NOTE: .sort() method works properly for String Array, but problem is with Number-Array

let marks = [99, 89, 67, 42, 100];
console.log(marks.sort())           //output: (5) [100, 42, 67, 89, 99]

//REMEMBER: for sorting method number or string both converted to string first and arrange in accending order.