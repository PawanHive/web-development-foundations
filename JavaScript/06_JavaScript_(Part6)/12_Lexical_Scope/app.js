/*
************************ Lexical Scope ******************** 

==> a variable defined outside a function can be accessible inside another function defined after the variable declaration.
==> The opposite is NOT true.
*/

function outerFunc() {      //function Scope
    let x = 5;
    let y = 6;
    function innerFunc() {
        let a = 10;
        console.log(x);     // Lexical Scope           // Allowed   ... accessing variable of outer function;
        console.log(y)
    }
    console.log(a);         // Not Allowed   ... because outer function can't access inner function's variable
    innerFunc();            // REMEMBER: inner function can't call after outer function because it's declared inside 'Function Scope' of outer function
}
outerFunc();