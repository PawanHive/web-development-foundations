/*
*********************** Event Bubbling *********************

1. Event Bubbling:
==> When an event happens on an element, it first runs 
on the target element, then moves upward through its 
parent elements automatically.

Flow direction:
Child → Parent → Grandparent → document

----------------------------------------------------------------

2. event.stopPropagation():
==>  is a method used to Stop the event from bubbling up to parent elements

KEY POINTS: 

- Stops event from reaching parent elements
- Prevents event bubbling
- Called inside event handler
- oes not stop default browser action
- Used to avoid parent click execution

One-liner:
- Stops an event from propagating up the DOM.
*/

//=================================================================

// # Event Bubbling 

// let div = document.querySelector('div');
// let ul = document.querySelector('ul');
// let lis = document.querySelectorAll('li');

// div.addEventListener('click', function() {
//     console.log('div was clicked');
// });

// ul.addEventListener('click', function() {
//     console.log('ul was clicked');
// });

// for ( const li of lis) {
//     li.addEventListener('click', function() {
//         console.log('li was clicked');
//     })
// }
        /*
            NOTE: PROBLEM HERE:
            because of event bubbling, when we just click
            over a 'li' element, all event of parent element
            triggers.... this phenomena is known as Event Bubbling
            
            sometime because of this phenomena, give undesireable output so we user event.stopPropagation() method. 
        */


// # same code but with event.stopPropagation() Method when we evoke this method Event Bubbling will stop.:
// event.stopPropagation() 

let div = document.querySelector('div');
let ul = document.querySelector('ul');
let lis = document.querySelectorAll('li');

div.addEventListener('click', function() {
    console.log('div was clicked');
});

ul.addEventListener('click', function(event) {
    event.stopPropagation();                    // stop propagation of event bubbling.
    console.log('ul was clicked');
});

for ( const li of lis) {
    li.addEventListener('click', function(event) {
        event.stopPropagation();                // stop propagation of event bubbling.
        console.log('li was clicked');
    })
};

        /*
            NOTE:
            now only that event will trigger which we will
            click.
        */