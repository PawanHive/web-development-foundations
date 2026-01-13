/*
Qs. Access the btn using the querySelector and button id. 
Change the button background color to blue and text color to white.
*/

let btn = document.querySelector('button');

console.dir(btn.getAttribute('id'))

btn.style.backgroundColor = 'blue';
btn.style.color = 'white';