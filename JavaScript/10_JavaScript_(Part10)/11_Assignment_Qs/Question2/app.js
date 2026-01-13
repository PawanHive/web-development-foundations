/* Create a button on the page using JavaScript. Add an event listener
to the button that changes the button's color to green when it is clicked.
*/

let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    this.style.backgroundColor = 'green';
})