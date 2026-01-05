/*
************************* Practice Qs *********************

*/

//Qs1.-------------------------------------------------

let msg = "help!";
console.log(msg.trim().toUpperCase())       // output: HELP!

//Qs2.---------------------------------------------

let name = "ApnaCollege";

console.log(name.slice(4, 9))                  //output: Colle
console.log(name.indexOf('na'))                 //output: 2
console.log(name.replace("Apna", "Our"))        //output: OurCollege

//Qs3. --------------------------------------------

let str = "College";
console.log(str.replace('l', 't'))      //output: Cotlege
console.log(str.replaceAll('l', 't'))      //output: Cottege