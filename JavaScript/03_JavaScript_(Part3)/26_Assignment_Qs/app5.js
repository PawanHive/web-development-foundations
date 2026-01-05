/*
Write a JavaScript program to strip leading and trailing spaces from a string.

// Question explanation: 
3️⃣ “Leading spaces”
Leading means at the beginning (start) of the string.

Example:

"   Hello"

⬅️ These spaces are leading spaces


4️⃣ “Trailing spaces”
Trailing means at the end of the string.

Example:

"World   "

➡️ These spaces are trailing spaces
*/

let str = prompt("enter string with spaces")

console.log(`original string: ${str}`)
let strFinal = str.trim();

console.log(`string without spaces: ${strFinal}`)
