/*
*********************** Arrow Functions ******************

==> ham isse tab use karte hain jab hame, value ko as a fuction store karna hota hai kisi variable me
==> ya fir callbacks ki tarah use karte hain in higher order function
callback matlab ek aisa function jo dusre function me ek argument ya ek parameter ki tarah pass hota hai

FORMAT:
const func = (arg1, arg2...) => {function definition}
*/

// ----------------------------------------------------
// Sum calculator:
const sum = (a, b) => {
    console.log(a + b);
    }
sum(2, 5)       // 7
sum(20, 5)       // 25

//Cube calculator:
const cube = (n) => {           // if function has only one parameter then we can also remove () parenthesis, if no parameter then () is compulsary to add 
    return n * n * n;
}
console.log(cube(3))    // 27
console.log(cube(4))    // 64
console.log(cube(5))    // 125

// power calculator:
const power = (a, b) => {
    return a ** b;
}
console.log(power(2, 4))    // 16 
console.log(power(3, 4))    // 81
console.log(power(4, 4))    // 256