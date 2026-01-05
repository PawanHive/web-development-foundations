/*
************** .replace() ****************
 
==> Searches a value in the string & returns a new string with the value replaced.

let str = "ILoveCoding";

str.replace('love', 'do')       // "IdoCoding"

str.replace('o', 'x')           // "ILxveCoding"
*/

let msg = "ILoveCoding";

console.log(msg.replace('Love', 'do'));     //output: IdoCoding
console.log(msg.replace('o', 'x'))          //output: ILxveCoding            // only first occurrence will replace


/*
************** .repeat() ********************* 

==> Returns a string with the number of copies of a string

let str = "Mango";

str.repeat(3)           // "MangoMangoMango"
*/


let str = "Mango";

let newStr = str.repeat(3);
console.log(newStr)             //output: MangoMangoMango