/*
************************ DOM Event *********************

1. onclick (when an element is clicked)

2. onmouseenter (when mouse enters an element)

*/

// ## onclick() ##

let button = document.querySelector('button');             // will select only first button
console.dir(button)                                    
    /*NOTE: event property basically start with 'on' 
    like 'onclick', 'onblur' */

// how to define/ assign/ or declare event:

// First Way > 
button.onclick = function() {
    console.log("button was clicked")
};

// Second Way > 
function sayHello() {
    alert("Hello");
}
button.onclick = sayHello;

// -------------------------------------------------------

// # Now create more 5 buttons and all buttons should give alert 'hello Pawan':

        //> create button in index.html
let btns = document.querySelectorAll("button")
// console.dir(btns);

        // loop for each button
for (const btn of btns) {
    btn.onclick = helloPawan;                   // don't use () to call function 
    btn.onmouseenter = function() {             
        console.log("you entered a button");
    };
    console.log(btn);
    
}

        // function declared
function helloPawan() {
    alert("Hello, Pawan")
}


// # Problem of 'onclick' is: 
    /*
    onclick can hold only ONE callback function at a time.

    ❌ Problem with onclick
    btn.onclick = func1;
    btn.onclick = func2;   // func1 is overwritten


    Only func2 will run.
    */