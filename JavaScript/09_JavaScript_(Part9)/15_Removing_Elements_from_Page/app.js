/*
***************** Removing Elements in Document *************

- removeChild(element)

-remove (element)
*/

// ## removeChild() ##

// # remove first para of document
let bodyElement = document.querySelector('body');       // selected body
let firstPara = document.querySelector('p');            // selected firs para
bodyElement.removeChild(firstPara);                     // remove first para of document
    /*Note: but we can also delete using remove() method */

// ## remove() ##

// # remove directly 'h2' & 'div.box' element:
let h2Elmt = document.querySelector('h2')
let divElmt = document.querySelector('.box')
h2Elmt.remove()                                 // removed h2
divElmt.remove()                                // removed 'div.box'