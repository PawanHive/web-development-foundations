/*
************* String are Immutable in JS **************

==> No changes can be made to strings.
==> Whenever we do try to make a change, a new string is created and old one remains same.
*/

let Str = "    Pawan      ";

let trimStr = Str.trim();   // notice output after applied trim() method

console.log(Str)           //output: '    Pawan      '
console.log(trimStr)       //output: 'Pawan'