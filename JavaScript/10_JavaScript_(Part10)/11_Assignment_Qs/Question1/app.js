/*
qs. Try out the following events in Event Listener on your own:
    - mouseout
    - keypress
    - scroll
    - load

[Use MDN for help]
*/

// # mouseout Event
// let div = document.querySelector('div')

// div.addEventListener('mouseout', function() {
//     console.log("mouseout event triggered")
// })

//-----------------------------------------------------------------------------

// # keypress

// let inp = document.querySelector('input');

// inp.addEventListener('keypress', function() {
//     console.log(inp.value)
// })

//-----------------------------------------------------------------------------

// # scroll : (event fires only on elements that are actually scrollable)
let p = document.querySelector('p');

p.addEventListener('scroll', function() {
    console.log("Scroll event triggered")
})

//-----------------------------------------------------------------------------

// # load 

window.addEventListener('load', function() {
    console.log("Page fully loaded")
})