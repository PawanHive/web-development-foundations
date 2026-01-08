/*
******************* Block Scope *********************
// ==> Block Scope
==> Varibles declared inside a {} block cannot be accessed from outside the block.
==> Block Scope only work with (let & const) and doesn't work with (var)
*/

{
    let a = 25;
    const b = 50;
    var c = 75;
}
// console.log(c)
// console.log(a);     // ERROR  ... because we cannot access outside of {} 
// console.log(b);     // ERROR

//----------------------------------------------

// for(let i = 1; i <= 5; i++) {       // Block Scope
//     console.log(i)
// }
// console.log(i);      // ERROR

//----------------------------------------------

let age = 25;
if (age >= 25) {
    let str = "adult";
}
console.log(str)        // ERROR