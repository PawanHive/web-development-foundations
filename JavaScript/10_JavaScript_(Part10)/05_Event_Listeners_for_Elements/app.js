/*
/******************** Event Listeners for elements like ('p') **********************

*/

// select the <p> element
let p = document.querySelector('p');

// run when paragraph is clicked
p.addEventListener("click", function() {
    console.log("para was clicked")         // log click event
})

//--------------------------------------------------------------------

// select the <div> element

let div = document.querySelector('div');

// run when mouse enters the div
div.addEventListener('mouseenter', function() {
    console.log('mouse inside box')         // log mouse enter
})