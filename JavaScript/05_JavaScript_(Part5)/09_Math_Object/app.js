/*
******************* Math Objects *******************
// Properties ------------------------------------------
Math.PI
Math.E

// Methods ------------------------------------------
Math.abs(n)
Math.pow(a,b)
Math.floor(n)
Math.ceil(n)
Math.random()
*/

console.log(Math)

// Properties ----------------------------------------
console.log(Math.PI)
console.log(Math.E)

// Methods -------------------------------------------

// absolute no.
console.log(Math.abs(12))           // 12
console.log(Math.abs(-12))          // 12

// power no.
console.log(Math.pow(2, 4)) //(2 to the power 4) 2**4 => 2*2*2*2 => 16
console.log(Math.pow(2, 5))         // 32

// floor: (round of to nearest smallest integer value) the no. (always give 'smaller no.')
console.log(Math.floor(5))          // 5
console.log(Math.floor(5.5))        // 5
console.log(Math.floor(5.99999))    // 5   
console.log(Math.floor(-5))         // -5
console.log(Math.floor(-5.5))       // -6   ... because -6 is smaller than -5.5

// ceil: (round of to nearest larger integer value)
console.log(Math.ceil(5))           // 5
console.log(Math.ceil(5.5))         // 6
console.log(Math.ceil(5.00000))     // 5
console.log(Math.ceil(-5))          // -5
console.log(Math.ceil(-5.5))        // -5   ... because -5 is larger than -5.5

// random: (give random no. between 0 to 1, but excluding 1)
console.log(Math.random())          // 0.2352098405495151
console.log(Math.random())          // 0.5708499747045955
console.log(Math.random())          // 0.8056197281164362
console.log(Math.random())          // 0.14835342832583465