/*
******************** Select by TagName *****************

1. getElementsByTagName():
==> used to select all HTML elements with a specified 
tag name and returns them as an HTMLCollection.

KEY POINTS:

- Selects multiple elements
- Uses tag name ("p", "div", "h1", etc.)
- Returns HTMLCollection
- Live collection
- Access via index
- Not a real array
*/

// let select all paragraph tags:

document.getElementsByTagName('p');

console.dir(document.getElementsByTagName('p'))     // return HTML Collections

        // now change 2nd para to just 'abc' content:
let para = document.getElementsByTagName('p');
para[1].innerText = 'abc';
console.log(para[1].innerText);
// Done