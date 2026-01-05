/*
************ String Methods with Arguments ***********

==> Argument is a some value that we pass to the method.

Format: 
stringName.method(arg)
*/


/*
------------------ .indexOf() -----------------------

==> Returns the first index of occurrence of some value in string. Or gives -1 if not found.

let str = "ILoveCoding";


str.indexOf("love")     // 1

str.indexOf("j")        // -1 (not found)

str.indexOf("o")        // 2 (only 1 index)
*/

let msg = "ILoveCoding";

let msg1 = msg.indexOf("Love");
console.log(msg1)                   //output: 1

let msg2 = msg.indexOf("love");
console.log(msg2)                   //output: -1

let msg3 = msg.indexOf("o");        // will give index of first appearence of letter.
console.log(msg3)                   //output: 2

let msg4 = msg.indexOf("j");
console.log(msg4)                   //output: -1