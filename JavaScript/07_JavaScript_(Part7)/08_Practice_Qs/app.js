// Qs. Write an arrow function that returns the square of an number 'n'.

let squ = (n) => {
    return n * n;
}
console.log(squ(5))
console.log(squ(20))
console.log(squ(10))



// Qs. Write a function that prints "Hello World" 5 times at intervals of 2s each.

function hello() {
    let id = setInterval(() => {
        console.log("Hello World", Math.random())           // here Math.random() used just just for visual experiance
    }, 2000)                            // print after every 2s means it will take 10s = 10,000ms
    setTimeout(() => {
        clearInterval(id)
        console.log('clearInterval() ran')
    }, 10000)                           // after 10s clearInterval() will and stop setInterval() intantly, finally only 5times 'hello world' will print.
}
console.log(hello())