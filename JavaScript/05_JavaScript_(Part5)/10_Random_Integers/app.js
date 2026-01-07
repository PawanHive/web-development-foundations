/*
********************** Random Integers ******************

From 1 to 10

// step 1:
let num = Math.random();        // 0.46845492834023984

// step 2:
num = num * 10;                 // 4.6845492834023984       ... multiply to maximum no. in which range you want random no. to generate

// step 3:
num = Math.floor(num);          // 4

// step 4:
num = num + 1;                  // 5
*/

//-------------------------------------------------------
let step1 = Math.random();      // will print random no. between 0 - 1, but (1 excluded)
console.log(step1)

let step2 = step1 * 10;         // will print random no. between 0 to 10, but (10 excluded)
console.log(step2)

let step3 = Math.floor(step2)   // will remove decimal no. from random no. generated
console.log(step3)

let step4 = step3 + 1
console.log(step4)              // now i will finally print random no. between 1 to 10 range

//---------------------------------------------------------

// whole steps in one line to print random no. between (1 to 10):
let random = Math.floor(Math.random() * 10) + 1;
console.log(random)