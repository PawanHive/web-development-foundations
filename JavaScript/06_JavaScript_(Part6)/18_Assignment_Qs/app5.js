// Qs. Write a JavaScript function to generate a random number within a range (start, end).

// MY Explanation:  -------------------------------------------------------------

// // this will print 0 to 4:
// let random1 = Math.floor(Math.random() * 5);
// console.log(random1);

// // this will print 21 to 25: 
// let random2 = Math.floor(Math.random() * 5) + 21;       // 0, 1, 2, 3, 4 + 21 == 21, 22, 23, 24, 25
// console.log(random2);

// // now insert both no. in formula 'start' and 'end':
// let random3 = Math.floor(Math.random() * (25 - 21 +1)) + 21;        // 21 = start  //25 = end
// console.log(random3);

// MY Soluion: --------------------------------------------------------------------------

let start = Number(prompt('enter starting no.'))

let end = Number(prompt('enter ending no.'))

function randomBetween(start, end) {
    let diff = end - start;
    let random = Math.floor(Math.random() * (diff + 1)) + start;
    return random;
}
console.log(randomBetween(start, end))

