/*
Qs. Create a p tag on the page and set its text to 
"Apna College Delta Practice", where Delta is bold.
*/

let p = document.createElement('p');
p.innerHTML = "Apna College <b> Delta </b> Practice ";

document.querySelector('body').append(p)