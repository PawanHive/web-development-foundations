// Qs. Write an arrow function named isEven() that takes a single number as argument and returns if it is even or not.

let isEven = (n) => {
    if (n%2 == 0) {
        console.log(`${n} is Even number`)

    } else {
        console.log(`${n} is Odd number`)
    }
}
console.log(isEven(2))
console.log(isEven(3))
console.log(isEven(4))
console.log(isEven(5))