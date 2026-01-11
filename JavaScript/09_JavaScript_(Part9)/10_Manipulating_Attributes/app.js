/*
*********************** Manipulating Attributes ****************

1. getAttribute(): Getter
==> A getter is used to read or access the value of an 
element’s attribute or property.

2. setAttribute(): Setter
==> A setter is used to modify or update the value of an 
element’s attribute or property.
*/

// -----------------------------------------------------------------------------------------------------------------------------------

let img = document.querySelector('img');
console.dir(img);

// #(getter): 

// get Attribute value of 'img'
img.getAttribute('id');
console.log(img.getAttribute('id'));  // output: mainImg             ... means its value of 'id' = mainImg

// #(setter): 
// now change value of id 'mainImg' to 'spiderman';
img.setAttribute('id', 'spiderman')             
console.log(img.getAttribute('id'));  // output: spiderman          ... as id value change then CSS style will not apply it

//REMEMBER: so think twice before changing the Attribute Values

// ---------------------------------------------------------------------------------------------------------------------------------

// now let change 'src' attribute of 'img':
img.setAttribute('src', "assets/creation_3.jpeg")       // will change whole spiderman image.

// ------------------------------------------------------------------------------------------------------------------------------------------

// now add new (class) attribute to 'img':

console.dir(img.getAttribute('class'));        // output: null          ... means class attribute not exist in image element

img.setAttribute('class', 'images');            // class = 'images'    ...attribute add
console.dir(img.getAttribute('class'));         // output: images