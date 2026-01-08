// Qs. Create a Function that returns the concatenations of all arrings in an array.

let arr = ["hi", 'hello', 'bye', '!'];

function concat(str) {
    let result = "";

    for (let i = 0; i < arr.length; i++) {
        result += arr[i]
    }
    return result;
}
console.log(concat(arr))        // hihellobye!