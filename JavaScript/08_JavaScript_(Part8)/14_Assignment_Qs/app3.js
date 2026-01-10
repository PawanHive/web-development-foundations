// Create a new array whose elements are in uppercase of words present in the original array.

let arr = ['cat', 'rat', 'mat', 'sat']

let newArr = arr.map((el) => {
    return el.toUpperCase();
})
console.log(newArr)        

//output: (4) ['CAT', 'RAT', 'MAT', 'SAT']