// Qs. Create a Function that prints the multiplication table of a number

//----------------------------------------------
function printTable(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} * ${i} = ${i * n}`)
    }
}
printTable(5)
printTable(9)

//----------------------------------------------

function priTable(n) {
    for (let i = n; i <= 10*n; i+=n) {
        console.log(i)
    }
}
priTable(2)