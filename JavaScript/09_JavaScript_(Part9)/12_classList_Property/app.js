/*
************* Manipulating Style using classList *****************

Syntax:
obj.classList()


classList.add()  -- to add new classes
classList.remove()  -- to remove classes
classList.contains()  -- to check if class exists
classList.toggle()  -- to toggle between add & remove

*/

let img = document.querySelector('img');
console.dir(img);

// check whether 'img' has any class attribute:
console.dir(img.classList)      // DOMTokenList(0)      ... no classAttribute exits

        // after adding class see output:
console.dir(img.classList)      // DOMTokenList(02      


// ---------------------------------------------------------

// now print class of heading: 

let heading = document.querySelector('h1')
console.dir(heading.classList)      // DOMTokenList(0)  ... means no class attributes exits

// -----------------------------------------------------------

// Add ClassList:
heading.classList.add('green');     // you can see changes in dom as heading automatically turn green in color appears, because '.green' class already defined in CSS
heading.classList.add('underline');     // you can see changes in dom as heading automatically turn green in color as well as black underline wavy appears, because '.green' class already defined in CSS

    /*
    NOTE: 
    we can also add class using setAttribute() but i will on add single class at a time 
    but .classList can add multiple value at the same time
    */

// Delete ClassList:
heading.classList.remove('green')       // so as '.green' class remove so effect will also remove.

// Check ClassList Exist or Not:
heading.classList.contains('green');
console.log(heading.classList.contains('green'))    // output: false        ... means 'green' class doesn't exist in heading 
console.log(heading.classList.contains('underline'))    // output: true        ... means 'underline' class do exist in heading 


// Toggle classList: (means it behave like electric switch, if ON when you press it become OFF, and viseversa)


console.log(heading.classList)
console.log(heading.classList.toggle('underline'));   //output: false  ...  // as 'underline' already exit so this time REMOVED it and print false
console.log(heading.classList.toggle('green'))        //output: true  ...  // as 'green' does not exit so this time ADDED it and print true
console.log(heading.classList.toggle('green'))        //output: true  ...  // as 'green' already exit so this time REMOVED it and print false

// --------------------------------------------------------------------------------------------------------------

// now change the color of box:
let box = document.querySelector('.box')
console.log(box.classList)
box.classList.add('yellowbg');      // Note: if '.box' also defined background property then then things will never change because '.box' has higher preference because of (inline attribute) so '.yellow', background will never appear




