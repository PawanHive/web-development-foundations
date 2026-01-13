/*
*********************** More Events *****************************

1. change event
==> The change event occurs when the value of an element has been
changed (only works on <input>, <textarea> and <select> elements).

2. input event
==> The input event fires when the value of an <input>, <select>, 
or <textarea> element has been changed.
*/

//-----------------------------------------------------------------

// let form = document.querySelector('form');

// form.addEventListener('submit', function(event) {
//     event.preventDefault();
// })

// let user = document.querySelector('#user')

// // change event (fires only after the value is finalized.)
// user.addEventListener('change', function() {
//     console.log('change event')
//     console.log("final value = ", this.value)
// })

// // input event (fires immediately while typing)
// user.addEventListener('input', function() {         // input event fires at every letter
//     console.log('input event')
//     console.log("final value = ", this.value)
// })

//------------------------------------------------------------------

// Creata a TEXT Editor:

let inp = document.querySelector('#text');
let p = document.querySelector('p');

inp.addEventListener('input', function() {
    console.log(inp.value)
    p.innerText = inp.value                 // will print in paragraph section
})