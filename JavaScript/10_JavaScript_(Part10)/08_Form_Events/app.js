/*
***************** From Events ************************

1. submit

2. event.preventDefault

*/

let form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();                         // now form will not redirect to it /action url which is its default behaviour
    alert('form submitted');
})