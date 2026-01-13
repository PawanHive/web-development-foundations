/*
Create an h1 element on the page and set its text to "DOM Practice" underlined.
Change its color to purple. 
*/

let h1 = document.createElement('h1')
document.querySelector('body').append(h1)

h1.innerText = "DOM Practice";

h1.classList.add('deco')