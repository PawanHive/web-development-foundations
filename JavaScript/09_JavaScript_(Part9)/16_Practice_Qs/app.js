/*
Qs. Add the following elements to the container using 
only JavaScript and the DOM methods.

i) a <p> with red text that says "Hey I'm red!"

ii)an <h3> with blue text that says "I'm a blue h3!"

iii)a <div> with a black border and pink background color
with the following elements inside of it:

    - another <h1> that says "I'm in a div"
    - a <p> that says "Me TOO!"
*/

// MY SOLUTION:

// let firstPara = document.createElement('p');
// firstPara.innerText = "Hey I'm red!";
// firstPara.style.color = 'red';

// let bodyElement = document.querySelector('body');
// bodyElement.append(firstPara);


// let h3Element = document.createElement('h3');
// bodyElement.append(h3Element);
// h3Element.innerText = "I'm a blue h3"
// h3Element.style.color = 'blue';


// let divElement = document.createElement('div');
// let anotherh1Element = document.createElement('h1');
// let divParaElement = document.createElement('p');

// anotherh1Element.innerText = "I'm in a div";
// divParaElement.innerText = "ME TOO!";

// divElement.append(anotherh1Element);
// divElement.append(divParaElement);

// divElement.classList.add('box');
// bodyElement.append(divElement);


//Teacher Solution:

let para1 = document.createElement('p');        // creates a <p> element
para1.innerText = "Hey I'm red!";               // sets text inside <p>
document.querySelector('body').append(para1);   // appends <p> to body

para1.classList.add('red');                     // adds class 'red' to <p>



let h3 = document.createElement('h3');          // creates an <h3> element
h3.innerText = "I'm a blue h3"                  // sets text inside <h3>
document.querySelector('body').append(h3);      // appends <h3> to body

h3.classList.add('blue')                        // adds class 'blue' to <h3>



let div = document.createElement('div');        // creates a <div> element
let h1 = document.createElement('h1');          // creates an <h1> element
let Para2 = document.createElement('p');        // creates a <p> element

h1.innerText = "I'm in a div";                  // sets text inside <h1>
Para2.innerText = "ME TOO!";                    // sets text inside <p>

div.append(h1);                                 // appends <h1> inside <div>
div.append(Para2);                              // appends <p> inside <div>

div.classList.add('box');                       // adds class 'box' to <div>
document.querySelector('body').append(div);     // appends <div> to body





