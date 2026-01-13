/******************* Event Listener *******************

1. addEventListener
==> addEventListener() is a method used to attach one or 
more event handlers (callback functions) to an element 
without overwriting existing ones.

KEY POINTS:

- Allows multiple callbacks for the same event
- Does not overwrite existing event handlers
- Separates HTML and JavaScript
- Works with all DOM elements
- Supports event bubbling & capturing
- Preferred in modern JavaScript

*/

let btns = document.querySelectorAll('button');

for (const btn of btns) {
    // btn.addEventListener('click', sayHello);
    // btn.addEventListener('click', sayName);
    btn.addEventListener('dblclick', function() {
        console.log("you double clicked me")
    });
}

function sayHello() {
    alert("hello")
}
function sayName() {
    alert("apna college")
}