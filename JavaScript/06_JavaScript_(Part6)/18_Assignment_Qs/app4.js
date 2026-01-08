// Qs. Write a JavaScript function to count the number of vowels in a String argument.

// My Solution: Wrong

// let str = 'pawan';
// let arr = Array(str)
// console.log(arr)

// function arrr() {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].includes() == 'a', 'e', 'i', 'o', 'u') {
//             console.log(`vowel: ${arr[i]}`)

//         }    
//     }
//     return arr[i]
// }
// console.log(arrr())

// Solution: Right ---------------------------------------


let str = prompt('enter string and know no. of vowels included')

function countVowels(str) {

    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == 'a' ||
            str.charAt(i) == 'e' ||
            str.charAt(i) == 'i' ||
            str.charAt(i) == 'o' ||
            str.charAt(i) == 'u'
        ) {
            count++;


        }

    }
    return count;
}
console.log(`${countVowels(str)} vowels included`)