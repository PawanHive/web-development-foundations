/*
*********** Different way of creating Arrays ***************

 */

// Number Array ---------------------------------------
let marks = [ 99, 85, 93, 76, 62];

// String Array ----------------------------------------
let names = ['adam', 'bob', 'catlyn'];

// Mixed Array -----------------------------------------
let info = ['shradha', 25, 6.1]; 
console.log(info.length)        //output: 3
console.log(info[0])            //output: shradha
console.log(info[0][0])         //output: s             // Remember: second index array tells about 'shradha' first letter that is 's', and first one tells element of the array.
console.log(info[0][1])         //output: h  
console.log(info[0].length)         //output: 7         // telling about length of the first element of the array.  


// Empty Array -----------------------------------------
let newArr = [];
console.log(newArr.length)      //output: 
console.log(newArr)             //output: 
console.log(newArr[0])          //output: 
console.log(newArr[0])          //output: 