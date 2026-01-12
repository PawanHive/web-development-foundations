/*
****************** Navigation on Page **********************

1. parentElement
==> returns the parent element (node) of a given HTML 
element.

KEY POINTS:

- It returns only an element node, not text or comment nodes.
- If the element has no parent element, it returns null.
- Mostly used for traversing upward in the DOM tree.
- Safer than parentNode when working only with elements.

----------------------------------------------------------

2. children
==> returns a live HTMLCollection of all child elements of a 
given element.

KEY POINTS:

- Includes only element nodes (ignores text, whitespace, comments).
- It is a live collection (auto-updates if DOM changes).
- Access children using index numbers.
- Length can be checked using .length.

----------------------------------------------------------

3.
A). previousElementSibling
==> returns the previous sibling element of a given 
element.

KEY POINTS:

- Returns only element nodes.
- Ignores text nodes and whitespace.
- Returns null if there is no previous element sibling.
- Used for navigating left/up in the same level.

B). nextElementSibling
==> returns the next sibling element of a given element.

Key Points

- Returns only element nodes.
- Skips text and comment nodes.
- Returns null if there is no next element sibling.
- Used for navigating right/down in the same level.
*/

//=========================================================

// # lets print parent of heading 'h4'

let h4Element = document.querySelector('h4');

console.log(h4Element.parentElement)           //output: <div class="box"> ...</div>              // means parentElement of 'h4' is <div>
console.dir(h4Element.children)            //output: HTMLCollection(0)     .... it has no children element


// # now check/print children of 'div'
let divElement = document.querySelector('div');

console.dir(divElement.children)        //output: HTMLCollection(2)     .... means it has 2 children Element (that is 'h4' and 'ul') 
console.dir(divElement.childElementCount) //output: 2       ... will print no. of children exit

// # now check/print parent, children of 'ul', & how much children
let ulElement = document.querySelector('ul');

console.dir(ulElement.parentElement);      // output: div.box       ...means parent of 'ul' element is 'div' with class (.box)
console.dir(ulElement.children);           // ouput:  HTMLCollection(3)    ... means three children exit (they are 'li', 'li' & 'li')
console.dir(ulElement.childElementCount);  // ouput: 3       ... means total 3 children exit in 'ul'element

// # now check/print previous & next sibling of ul's second 'li' element

console.dir(ulElement.children);     // print 'li', 'li', 'li'    ... we can check 'index no.' of each 'li' element by clicking over dropdown list in console output
        // now select 2nd 'li'
console.dir(ulElement.children[1]);  // output: li       ... and we can see by dropping down and can also match the innerText context of 2nd 'li'
let secondliElement = ulElement.children[1];
        // now we can print previous and next sibling of 2nd 'li' element
console.dir(secondliElement.previousElementSibling)     // li    .... and we can check an verify by pasting same code in console, and hoverover it that upper 'li' element will highlight.
console.dir(secondliElement.nextElementSibling)     // li    .... and we can check an verify by pasting same in console, and hoverover on it, that below 'li' element will highlight


// # change color of main heading(h1) but by selecting it as a sibling of 'img' element (class = 'mainImg)
let imgElement = document.querySelector('img');
console.dir(imgElement.previousElementSibling);
            // now change color of 'h1' element
imgElement.previousElementSibling.style.color = 'red';      // so we changed color without selecting 'h1' element directly
