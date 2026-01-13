/*
********************** 'this' in Event Listeners ********************

==> When 'this' is used in a callback of event handler of 
something, it refers to that somethin.
*/


let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log(this)
    console.log(this.innerText)
    this.style.backgroundColor = 'blue'

})

    /*
        NOTE: 
        jab bhi 'this' key word addEventListener ke ander
        call kiya jayega to wah hamesa us element ko refer karega
        jiske liye, yah addEventListener lagaya gaya hai

        means in the above case:
        'this' == 'btn'

        ==> 'this' key is most useful when the SAME handler logic 
        is used for MULTIPLE elements
    */



// # change background color in blue, whenever which element is click:

// MY SOLUTION:

// let h1 = document.querySelector('h1');
// let h3 = document.querySelector('h3');
// let p = document.querySelector('p');

// h1.addEventListener('click', function() {
//     console.log(this)
//     console.log(this.innerText)
//     this.style.backgroundColor = 'blue'
 
// }) 

// h3.addEventListener('click', function() {
//     console.log(this)
//     console.log(this.innerText)
//     this.style.backgroundColor = 'blue'

// })

// p.addEventListener('click', function() {
//     console.log(this)
//     console.log(this.innerText)
//     this.style.backgroundColor = 'blue'

// })

// TEACHER SOLUTION:

let h1 = document.querySelector('h1');
let h3 = document.querySelector('h3');
let p = document.querySelector('p');

function changeColor() {
    console.log(this.innerText)
    this.style.backgroundColor = 'blue'
}

h1.addEventListener('click', changeColor)
h3.addEventListener('click', changeColor)
p.addEventListener('click', changeColor)
