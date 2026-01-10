//Qs. find Maximum no. using reduce() method in an array


let arr = [1, 2, 3, 4, 5, 6, 7, 10, 3, 1, 5];

// solving using Loop:
let max = -1;

for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
        max = arr[i];
    }
}
// console.log(max);


// Another solution using: reduce() function:
let = arr1 = [7, 4, 37, 33, 23, 75, 43, 21, 12]

let finalMax = arr1.reduce((max, el) => {
    if(max > el) {
        return max;
    } else {
        return el;
    }
});
console.log(finalMax)