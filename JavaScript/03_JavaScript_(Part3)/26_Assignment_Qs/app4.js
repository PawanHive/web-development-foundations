/*
Qs4.Write a JavaScript program to test whether the character at the given(character) index is lowercase.
*/

let str = 'JaVaScRiPt';
let index = prompt("please enter index no.")

if (str[index] == str[index].toLowerCase()) {
    console.log("Character is lowercase")
} else {
    console.log("Character is not lowercase")
}