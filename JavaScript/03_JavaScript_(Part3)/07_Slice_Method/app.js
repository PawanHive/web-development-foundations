/*
******************* .slice() **********************

==> Returns a part of the original string as a new string.
==> last index not include.

let str = "ILoveCoding";

str.slice(5)            // "Coding"

str.slice(1, 4)         // "love"

str.slice(-num) = str.slice(length-num)
*/

let msg = "apnacollege";

let newMsg1 = msg.slice(0, 4);
console.log(newMsg1)

let newMsg2 = msg.slice(4, 11);
let newMsg3 = msg.slice(4, msg.length)
let newMsg4 = msg.slice(4)               // including 4 index everything will print. 
console.log(newMsg2)            //output: college
console.log(newMsg3)            //output: college
console.log(newMsg4)            //output: college



console.log(msg.slice(-1)) // 11-1 => 10        //output: e
console.log(msg.slice(10))                      //output: e

console.log(msg.slice(-2)) // 11-2 => 9        //output: e
console.log(msg.slice(9))                      //output: e

console.log(msg.slice(-7)) // 11-7 => 4        //output: e
console.log(msg.slice(4))                      //output: e