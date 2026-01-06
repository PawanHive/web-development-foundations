/*
********************** Loops in Arrays *******************

*/

let fruits = ['mango', 'apple', 'banana', 'litchi', 'orange'];
fruits.push("pineapple")

for (let i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i])    
}

// print in reverse order:
console.log('from here reverse order start')

for (let i = fruits.length-1; i >= 0; i--) {
    console.log(i, fruits[i])    
}