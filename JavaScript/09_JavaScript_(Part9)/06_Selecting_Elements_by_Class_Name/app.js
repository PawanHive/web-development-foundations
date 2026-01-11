/*
****************** Selecting Elements *******************

1. getElementByClassName()
==> used to select all HTML elements that have a 
specified class name and returns them as an HTMLCollection.

KEY POINTS:

- Selects multiple elements by class name
- Returns HTMLCollection
- Live collection
- Access via index
- No . before class name
- Not a real array
*/

document.getElementsByClassName('oldImg');

console.dir(document.getElementsByClassName('oldImg'));      // print HTML Collections

// lets select and all 'oldImg' and print in console one by one:

let oldImages = document.getElementsByClassName('oldImg');

for (let i = 0; i < oldImages.length; i++) {
    console.log(oldImages[i])                       // it will print all images
}

        // now get source link of all images
for (let i = 0; i < oldImages.length; i++) {
    console.log(oldImages[i].src)                   // will print links only
}

// now update all 'oldImg' by the 'spider man' images:

for (let i = 0; i < oldImages.length; i++) {
    oldImages[i].src = "assets/spiderman_img.png";
    console.log(`Value of image no. ${i} is changed`)
}