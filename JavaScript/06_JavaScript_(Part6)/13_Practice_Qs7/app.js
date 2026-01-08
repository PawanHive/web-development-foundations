/* Qs. What will be the output?

let greet = 'hello';
function changeGreet() {
    let greet = 'namaste';
    console.log(greet);      
    function innerGreet() {
        console.log(greet);  
    }
}
console.log(greet);     // hello
changeGreet(); 
*/

//---------------------------------------------------------------

let greet = 'hello';        // Global scope   // this will print

function changeGreet() {
    let greet = 'namaste';
    console.log(greet);      // Function Scope           // this will print
    function innerGreet() {
        console.log(greet);  // Lexical Scope                       // Not Print ... because we didn't call this innerGreet function
    }
}
console.log(greet);     // hello
changeGreet();          // namaste
