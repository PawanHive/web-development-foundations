// QS. Create a new array using the map function whose each element is equal to the original element plus 5

// MY SOLUTION:

let arr = [1, 2, 3, 4, 5]

let newArr = arr.map((el) => {
    return el += 5;
})
console.log(newArr)           
// output: (5) [6, 7, 8, 9, 10]