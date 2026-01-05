/*
************** Arrays are Mutable *******************

==> if we applied method on array, so actual array can be change and that's known as mutable .
==> but string are immutable, after applying changes new string created and actual remains same.

*/

let fruits = ['mango', 'apple', 'litchi'];
console.log(fruits)             //output: ['mango', 'apple', 'litchi']
console.log(fruits[0])          //output: mango

fruits[0] = 'banana';
console.log(fruits)             //output: ['banana', 'apple', 'litchi']
console.log(fruits[0])          //output: banana                            // it means actual array changed... means arrays are mutable.

fruits[1] = 'pineapple';
console.log(fruits)

fruits[10] = 'papaya';          // that will put 'papaya' at 10th index of array.
console.log(fruits)             //output: ['banana', 'pineapple', 'litchi', empty × 7, 'papaya'] 