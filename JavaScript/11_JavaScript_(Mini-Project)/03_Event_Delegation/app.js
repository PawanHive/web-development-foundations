/*
****************** Event Delegation **********************

1. Event Delegation:

==> Event delegation is a technique where a single event 
listener is added to a parent element to handle events 
for its child elements using event bubbling.

KEY POINTS: 

- Uses event bubbling
- One listener handles multiple children
- Works for dynamically added elements
- Improves performance
- Uses event.target to detect clicked element
*/



let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let inp = document.querySelector('input');



btn.addEventListener('click', function() {
    let item = document.createElement('li');
    item.innerText = inp.value;
    ul.appendChild(item);

    let delBtn = document.createElement('button');
    delBtn.innerText = 'Delete';
    delBtn.classList.add('delete');
    item.append(delBtn);


    console.log(inp.value)
    inp.value = " ";
})

        /* Here we will progam in such way so that event delegation should trigger.
        we will select 'ul' instead of specific delete button
        so that any thing happen to children parent element will
        trigger automatially.
        */

ul.addEventListener('click', function(event) {
    console.log('button clicked');
    console.log(event.target);                       // tells us which element triggered the element
    console.dir(event.target);                       // you can see (nodeName: 'BUTTON') by dropping down event.target Object in console 
    console.log(event.target.nodeName)    // output: BUTTON           ... means the elemnet we click is a BUTTON (which triggered the parent 'ul' event) 
})