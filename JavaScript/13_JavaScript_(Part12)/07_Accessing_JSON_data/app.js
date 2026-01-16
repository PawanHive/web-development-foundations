/*
****************** Accessing Data from JSON *******************

// JSON data is always in string form.

1. JSON.parse(data) Method
==> To parse a string data into a JS object

2. JSON.stringify(json) Method
==> To parse a JS ojbect data into JSON
*/

//===============================================================

// # convert JSON data into JS Object

let jsonRes = 
'{"fact":" A cat only has the ability to move their jaw up and down, not side to side like a human can.","length":93}'

let validRes = JSON.parse(jsonRes);         // convert JSON data into JS Object
console.log(validRes);
console.log(validRes.fact);                  // print value of fact:


// # convert JS object into JSON data

let student = {
    name: 'shradha', 
    mark: 45
}
let jsonData = JSON.stringify(student);
console.log(jsonData)                   // give JSON data