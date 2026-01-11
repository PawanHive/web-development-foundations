/*
**************** Selecting Elements by ID ***************

1. getElementById():
==> select a single HTML element by its unique id and 
returns that element as an object.

*/

document.getElementById('mainImg')

console.dir(document.getElementById('mainImg'))

// ------------------------------------------------------------
// lets change spider man image with another image; 

let changeIMg = document.getElementById('mainImg')
console.log(changeIMg.src)      // got link of this image:  http://127.0.0.1:3000/JavaScript/09_JavaScri...
changeIMg.src = "assets/creation_1.png";            // added another link
// Done.

// ------------------------------------------------------------
// now access paragraph

document.getElementById('description');

console.dir(document.getElementById('description'));    // print object of it