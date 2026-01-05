/*
************* Array Reference *********************

'name' == 'name'    // true
'name' === 'name'    // true

[1] === [1]     // false
[1] == [1]     // false

for same string output is 'true' and for same array output is 'false'
why? 
*/


// why same string's output is 'true' ------------------------
console.log('name' == 'name')       // true
console.log('name' === 'name')      // true

/*
Explanation: 

==> Reason: Strings are primitive values

Primitive types in JS:

string
number
boolean
null
undefined
symbol
bigint

👉 Primitive values are compared by VALUE

'value' === 'value'     //output: true
*/


// Why same array comparison returns 'false' -------------------------

console.log([1] == [1]);        // false

/*
Explanation:

Reason: Arrays are reference types (objects)

In JS, arrays are actually objects.
👉 Objects are compared by REFERENCE (memory location), not by value.

memoryLocationA === memoryLocationB         // false
*/

//----------------------------------------------------------

// but: 

let arr = ['a', 'b', 'c']
let arrCopy = arr;              // now both array shares the same location(address) 
console.log(arr == arrCopy)     //output: true              ... because both array has the same location(address) 
console.log(arr === arrCopy)     //output: true

//now if we change one array then changes will automatically applies to both array
arr.push('d')
console.log(arr)        //output: (4) ['a', 'b', 'c', 'd']
console.log(arrCopy)    //output: (4) ['a', 'b', 'c', 'd']

arr.pop()
console.log(arr)        //output: (3) ['a', 'b', 'c']
console.log(arrCopy)    //output: (3) ['a', 'b', 'c']

//--------------------------------------------------------------------

// but if you don't want changes should not applied to both automatically, then we have to manually assign both array with the same value

let array = ['a', 'b', 'c']
let arrayCopy = ['a', 'b', 'c']

//now changes will not apply to both
array.push('g')
console.log(array)          // output: (4) ['a', 'b', 'c', 'g']
console.log(arrayCopy)      // output: (3) ['a', 'b', 'c']