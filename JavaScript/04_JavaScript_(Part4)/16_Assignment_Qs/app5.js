/*
Find the largest number in an array that contains only positive numbers.
*/

let arr = [1, 2, 9, 4, 5, 3, 6, 8]
let largest = 0;

for (let i = 0; i < arr.length; i++) {
    if (largest < arr[i]) {             // this line is traversing      //REMEMBER: here 'largest' no. first initialize with 1, 2, then 9 and after than condition will become false and finally 9 no. remain as a largest no.
        largest = arr[i];               // this line is upadating with max value found
    }
}
console.log(`largest no. is: ${largest}`)