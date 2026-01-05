/*
******************* Array Methods **********************

.indexOf() ==> returns index of elemets in array

.includes() ==> search for a value, exit or not (if exit:ture & not:false)
*/

let cars = ['audi', 'bmw', 'xuv', 'maruti'];

//.indexOf() ==> returns index of elements in array ----------------------
let index = cars.indexOf('bmw')
console.log(index)                  //output: 1

let index1 = cars.indexOf('xuv')
console.log(index1)                 //output: 2

let index2 = cars.indexOf('XUV');
console.log(index2)                 //output: -1   // not found

//.includes() ==> search for a value/elements, exit or not ---------------

let primary = ['red', 'yellow', 'blue'];

let find = primary.includes('red')
console.log(find)                       //output: true

let find1 = primary.includes('green');
console.log(find1);                     //output: false

let find2 = primary.includes('blue');
console.log(find2)                     //output: true