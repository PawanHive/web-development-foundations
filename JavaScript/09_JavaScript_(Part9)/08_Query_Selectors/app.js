/*
****************** querySelector() **********************

1. querySelector():
==> used to select the first HTML element that matches a 
specified CSS selector.

KEY POINTS:

- Selects first matching element
- Uses CSS selectors (#id, .class, tag)
- Returns single element
- Returns null if no match
- Works on document and elements

------------------------------------------------------------

2. querySelectorAll():
==> used to select all HTML elements that match a 
specified CSS selector and returns them as a NodeList.

KEY POINTS:

- Selects all matching elements
- Uses CSS selectors
- Returns NodeList
- Static collection
- Supports forEach()
- Returns empty NodeList if no match
*/

// querySelector(): ---------------------------------------

// Select first/single Element:
document.querySelector('h1')
console.dir(document.querySelector('h1'))
console.dir(document.querySelector('p'))
console.dir(document.querySelector('#description'))
console.dir(document.querySelector('.oldImg'))

// Select nested Element:
console.dir(document.querySelector('div a'))        // will select first 'anchor tag' of first 'div'


// querySelectorAll(): -----------------------------------

// Select all Elements:
console.dir(document.querySelectorAll('p'))     // return NodeList of all 'p' element
console.dir(document.querySelectorAll('div a'))     // return NodeList of all 'a' tag in 'div' element