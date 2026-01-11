console.dir(document);
/* REMEMBER: 'all' property of 'document' object will give 
a list of all HTML Element Collection in order (we can see in console)
*/
console.dir(document.all);              // HTMLAllCollection(39)              ... help to confirm at what 'index' our 'element' exits
console.dir(document.all[9]);           // h1
console.dir(document.all[9].innerText); // Spider Man                       ... selected 'key' innerText
document.all[9].innerText = 'Peter Parker';         // Spider Man' will change to 'Peter Parker'
console.dir(document.all[9].innerText)      // Peter Parker
