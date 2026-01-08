/*
************* Functions with Arguments *****************

==> Values we pass to the function

function funcName(par1, par2...) {
    // do something
}
*/

function name() {
    console.log("Pawan")
};
name();

// but if you want to take 'name' from user ---------------------------------
function printName(name) {          // REMEMBER: here 'name' is PARAMETER but it will behave as a VARIABLE
    console.log(name)
};
printName('shradha');               // here 'shradha' is ARGUMENT

// If you want both 'name' and 'age', from user -----------------------------

function printInfo(name, age) {
    console.log(`${name}'s age is ${age}.`);
};
printInfo('Ankita', 20)     // Ankita's age is 20.
printInfo('Sonu', 10)       // Sonu's age is 10.

    // ...REMEMBER: whatever value we give first, then it will store in first parameter(variable) of function
printInfo('karan')          // karan's age is undefined.
printInfo(40)               // 40's age is undefined.               //... here age stored at the  place of 'name' because we pass it as a first value in argument

// MEANS: in which order we defined PARAMETER in that order we have to pass value in (ARGUMENT).

// sum ---------------------------------------------------
function sum(a, b) {
    console.log(a + b);
}
sum(3, 11)      // 14
sum(6, 5)       // 11
sum(7, 9)       // 16
sum(7895283098, 92342342)       // 7987625440

