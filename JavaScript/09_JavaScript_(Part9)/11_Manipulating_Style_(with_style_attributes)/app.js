/*
******************** Manipulating Style *****************

==> Style manipulation means changing CSS styles of 
HTML elements using JavaScript at runtime.


*/

let img = document.querySelector('img');
console.dir(img)
console.dir(img.style)


let heading = document.querySelector('h1')
console.dir(heading)
console.dir(heading.style)

        // let suppose we have to change the color of heading
heading.style.color = 'red';
heading.style.backgroundColor = 'yellow';

// now change the color of anchor tags to 'yellow':
let links = document.querySelectorAll('.box a')
console.dir(links)                              // prints NodeLists

// for (let i = 0; i < links.length; i++) {
//     links[i].style.color = 'green'
// }

        // can also done using for-of loop
for (const link of links) {
    link.style.color = 'green';
}

// but we don't user styling more frequently
