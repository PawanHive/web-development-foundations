
//Qs. check if all numbers in our array are mulitples of 10 or not.

let nums = [10, 20, 30, 40]

let ans = nums.every((el) => {
    return el % 10 == 0;            // check all no. is multiple of 10 or not
});
console.log(ans);                // true

//Qs. Create a function to find the min number in an array.

let num = [10, 20, 30, 40]

// let getMin = num.reduce((min, el) => {
//     if (min < el) {
//         return min;
//     } else {
//         return el;
//     }
// });
// console.log(getMin);            // 10

            // above solution worked but we have to crate function
function findMin(num) {
    let getMin = num.reduce((min, el) => {
        if (min < el) {
            return min;
        } else {
            return el;
        }
    });
    return (`${getMin} is minimum no. of the array`);
}
console.log(findMin(num));
console.log(findMin([3, 4, ,5, 3]));      // we can also put own array
console.log(findMin([400, 433, 244, 632]));
