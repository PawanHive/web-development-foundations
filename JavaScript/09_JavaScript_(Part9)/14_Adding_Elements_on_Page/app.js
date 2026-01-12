/*
****************** Adding Element in Document(DOM) **************

01. document.createElement():
==> creates a new HTML element node dynamically using 
JavaScript, but does not add it to the DOM automatically.

    KEY POINTS:

    - Creates a new HTML element node
    - Element is created in memory, not shown on page
    - Requires manual insertion using append(), appendChild(), prepend()
    - Accepts tag name as string ("div", "p", "button")
    - Allows setting text, attributes, class, styles
    - Used for dynamic UI creation
    - Safer than innerHTML

------------------------------------------------------------------------------------

1. appendChild()
==> adds a node as the last child of a parent element.

    KEY POINTS:

    - Accepts only a single node (element, text node, comment).
    - Moves the node if it already exists in the DOM.
    - Returns the appended node.
    - Older method, but still very commonly used.

------------------------------------------------------------------------------------

2. append()
==> adds one or more nodes or text as the last child of 
an element.

    KEY POINTS:

    - Can append multiple items at once.
    - Accepts elements and strings.
    - Does not return anything.
    - More flexible and modern than appendChild().

------------------------------------------------------------------------------------

3. prepend()
==> adds one or more nodes or text as the first child of 
an elemenT

    KEY POINTS:

    - Inserts content at the beginning of the parent.
    - Accepts multiple nodes and strings.
    - Does not return anything.
    - Very useful for adding new content at the top

------------------------------------------------------------------------------------

4. insertAdjacentElement("position", element)
==> inserts HTML relative to an existing element at a 
specified position.

    ==> "position"
    A string representing the position relative to the 
    targetElement; must match (case-insensitively) one of 
    the following strings:

    'beforebegin': Before the targetElement itself.
    'afterbegin': Just inside the targetElement, before its first child.
    'beforeend': Just inside the targetElement, after its last child.
    'afterend': After the targetElement itself.

    KEY POINTS:

    - Works without reloading or replacing existing elements.
    - Faster than innerHTML in many cases.
    - Precise control over insertion position.
    - Does not remove existing content.
*/
//=================================================================================

// ## appendChild() ##

// # Create/Add a new 'p' paragraph Element in DOM :

let newP = document.createElement('p');
console.dir(newP);                          // 'p' element created without content in it
        // adding content to new paragraph
newP.innerText = "Hi, I am a new paragraph";
console.dir(newP);                          // content added, we can check in console

    /*
    NOTE: The problem is 'p' paragraph element is create
    but not appears in document(DOM)
    so to add created element in document we use 
    APPEND function/Method.
    */


// # let suppose we have to add created 'p' paragraph element in 'body' & 'div.box' Tag/Element:

let bodyElement = document.querySelector('body');       // body selected
        // now add 'p' tag into body element
bodyElement.appendChild(newP);                      // it means 'p' paragraph element add into 'body' tag as an child Element
        // now add same 'p' tag into '.box'('div' tag) also 
let divElement = document.querySelector('.box');
divElement.appendChild(newP);

// ---------------------------------------------------------------------------------------

// # Create new BUTTON & add into a 'div.box' Element:

let newButton = document.createElement('button');
console.dir(newButton)
        // add content to button
newButton.innerText = "Click Me!"
        // adding 'button' into 'div.box' tag
divElement.appendChild(newButton);                        // we didn't select 'div.box' again because it's already selected in above case

//================================================================

// ## append() ##

// # now add new line to 'newP':
newP.append('this is new line added');              // this line will add to already exiting new para called 'newP'
console.log(newP);

// # now we want 'button' should come inside 'newP' & then again add new line to 'newP':
newP.append(newButton);                             // now button will shift into 'newP'
newP.append("do not click this button");

//================================================================

// ## prepend() ##

// # shift/add 'newP' to starting of the 'div.box':

divElement.prepend(newP);                   // now 'newP' shift to top

//================================================================

// ## insertAdjacent(where, element) ##

// # Create a new button named "NEW BUTTON" and add above first paragraph

let newBtn = document.createElement('button')       // will create button element
        // add content to 'button'
newBtn.innerHTML = "NEW BUTTON!!"
        // so now we have to append it to appears it into the document, but at specific place which is (above first para)
let firstPara = document.querySelector('p');

firstPara.insertAdjacentElement("beforebegin", newBtn)      //Before the targetElement itself
firstPara.insertAdjacentElement("afterbegin", newBtn)       //Just inside the targetElement, before its first child.
firstPara.insertAdjacentElement("beforeend", newBtn)        //Just inside the targetElement, after its last child.
firstPara.insertAdjacentElement("afterend", newBtn)         //After the targetElement itself.