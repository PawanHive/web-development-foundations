/*
******************* What is DOM **************************

1. What actually a DOM?

==> When a browser loads an HTML file, it does not understand 
HTML directly for interaction.
==> So the browser converts the HTML document into a JavaScript 
object structure.
This stucture is called the DOM

👉 DOM = HTML converted into objects that JavaScript can 
control

----------------------------------------------------------

2. DOM is a Tree Structure

The document is represented like a tree:
document
 └── html
     ├── head
     │    └── title
     └── body
          ├── h1
          └── p

==> Each tag is a node
==> Relationships exist: parent, child, sibling

-----------------------------------------------------------

3. Why DOM is needed?

Without DOM:
    ==> JavaScript cannot change HTML
    ==> Web pages would be static

With DOM:
    ==> Change text
    ==> Change styles
    ==> Add/remove elements
    ==> Handle user actions (click, input, etc.)

👉 This is what makes websites dynamic & interactive

------------------------------------------------------------

4. How JavaScript uses DOM

JavaScript talks to the DOM using the document object.

Example:
document.getElementById("title");

Here:
    ==> document → whole webpage
    ==> getElementById() → finds an element

------------------------------------------------------------

5️⃣ What can you do with DOM?

Using DOM, JavaScript can:

✔ Change content:
element.innerText = "Hello";


✔ Change style:
element.style.color = "red";


✔ Add new elements:
document.createElement("div");


✔ Remove elements:
element.remove();


✔ Respond to events:
button.addEventListener("click", fn);
*/

console.log(window);
console.dir(document)
console.dir(document)       // REMEMBER: we use console.dir() to access 'document' object

// above 'window' and 'document' both are inbuilt objects 