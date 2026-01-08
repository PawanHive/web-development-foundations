//Qs. Write a JavaScript function that returns array elements larger than a number.

let arr = [1, 20, 3, 48, 53, 6, 7, 8, 9]
let n = 7


function getElement(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > n) {
            console.log(arr[i])
        }
    }
    
}
getElement(arr, n)