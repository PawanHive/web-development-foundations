/*
*************** Setting Content in Objects ********************

# Using Properties & Methods:

1. innerText
==> Shows the visible text contained in a node

2. textContent
==> Shows all the full text

3. innerHTML
==> Shows the full markup
*/

let para = document.querySelector('p');
console.dir(para);

console.dir(para.innerText);        // show what shows over screen
console.dir(para.innerHTML);        // shows with all markup
console.dir(para.textContent);      // shows even hidden things like (display: none)

// .innerText() -- don't understand html tags in between ------------------

para.innerText = 'Hi, I am Peter Parker!';  //NOTE: but if add tag in between these line then it will print as it is
console.log(para);      //output: "Hi, I am Peter Parker!"
para.innerText = "Hi, I am <b> Peter Parker! </b>"
console.log(para);       //output: "Hi, I am <b> Peter Parker! </b>"


// .innerHTML() -- recognize html tags in between -------------------------

para.innerHTML = "Hi, I am <b> Peter Parker! </b>"
console.log(para);      // now 'Peter Parker!' will print in bold


// now underline main heading which is 'Spider Man':

let heading = document.querySelector('h1');
console.log(heading.innerText)

heading.innerHTML = "<u> Spider Man </u>";
        // same above line below also
heading.innerHTML = `<u> ${heading.innerText} </u>`     // print same but we here we don't have to remember the actual heading, here we just refer that.