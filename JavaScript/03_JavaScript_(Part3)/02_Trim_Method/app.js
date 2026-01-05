/*
****************** .trim() ******************

==> Trims whitespaces from both ends of string & returns a new one.
*/

let msg = "    Hello    ";

let msg1 = msg.trim()       // REMEMBER: .trim() method not trim the actual string, but it actually create new string triming white spaces... which known as "Immutable."
console.log(msg);           // output: "    Hello    "
console.log(msg1);          // storing value after applying method is important
//output: Hello


let password = prompt("set your password:");
let newPassword = password.trim();
console.log(newPassword)

