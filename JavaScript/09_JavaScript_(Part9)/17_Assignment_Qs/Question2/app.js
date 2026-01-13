/*
Qs. Add following attributes to the element:
    - Change placeholder value of input to "username"
    - Change the id of button to 'btn'
*/

let inp = document.querySelector('input')
let btn = document.querySelector('button')

console.dir(inp.getAttribute('placeholder'))
console.dir(btn.getAttribute('id'))

inp.setAttribute('placeholder', "username")
btn.setAttribute('id', "btn")

console.dir(inp.getAttribute('placeholder'))
console.dir(btn.getAttribute('id'))