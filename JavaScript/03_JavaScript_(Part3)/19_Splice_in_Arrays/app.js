/* 
**************** Array Methods *************************

.splice() ==> removes / replaces / add elements in place and it will make changes in original array

FORMAT:
.splice(start, deleteCount, item0...itemN)
*/

let colors = ['red', 'yellow', 'blue', 'orange', 'pink', 'white'];

console.log(colors.splice(4))       //output: (2) ['pink', 'white']                         // there is only one argument then it will delete elements from that index of array
console.log(colors.splice(0, 1));   //output: ['red']                                       // second argument tell to delete no. of element from starting of array
console.log(colors);                //output: (3) ['yellow', 'blue', 'orange']
console.log(colors.splice(0, 1, 'black', 'grey'));  //output: ['yellow']                    // after second argument remaining things will add as an element of an array from starting.
console.log(colors)                 //output: (4) ['black', 'grey', 'blue', 'orange']


// Another Example ------------------------------------------

let cars = ['audi', 'bmw', 'xuv', 'maruti'];
console.log(cars)

//suppose we have to delete all element from 3rd index
console.log(cars.splice(3))         //output: ['maruti']
console.log(cars)                   //output: (3) ['audi', 'bmw', 'xuv']

// suppose we have to delete 1 element from 0th index
console.log(cars.splice(0, 1))     //output: ['audi']
console.log(cars)                   //output: (2) ['bmw', 'xuv']

// adding more elements using .push() method
console.log(cars.push('maruti'))        
console.log(cars.push('ferrari'))
console.log(cars)                   //output: (4) ['bmw', 'xuv', 'maruti', 'ferrari']

// suppose we have to delete 2 element from 1st index.
console.log(cars.splice(1, 2))      //output: (2) ['xuv', 'maruti']                          // means start from 1st index and delete 2 elements ==> (1, 2)
console.log(cars)                   //output: (2) ['bmw', 'ferrari']

// suppose we delete nothing and add new element from 0th index
console.log(cars.splice(0, 0, 'toyota', 'xuv', 'maruti'))     // as first argument is 0th index then all these element will add start from 0th index and existing one will pushed back, and as second argument is 0 means no element will delete
console.log(cars)                  //output: (5) ['toyota', 'xuv', 'maruti', 'bmw', 'ferrari']

// suppose we have to add element between 'toyota' and 'xuv'.
console.log(cars.splice(1, 0, 'mahindra')) 
console.log(cars)                   //output: (6) ['toyota', 'mahindra', 'xuv', 'maruti', 'bmw', 'ferrari']

//now suppose we have to replace 'mahindra' with 'gwagon'
console.log(cars.splice(1, 1, 'gwagon'))    //output: ['mahindra']
console.log(cars)                   //output: (6) ['toyota', 'gwagon', 'xuv', 'maruti', 'bmw', 'ferrari']