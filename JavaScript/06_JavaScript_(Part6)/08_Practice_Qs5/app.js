// Qs. Create a Function that returns the sum of numbers from 1 to n.
function getSum(n) {
    let sum = 0;
    

    for (let i = 0; i <= n; i++) {
        sum = sum + i;
        //return sum;             // ❌Wrong Line ... this will start loop at the first occurrence
    }
    return sum;
}
console.log(getSum(50))