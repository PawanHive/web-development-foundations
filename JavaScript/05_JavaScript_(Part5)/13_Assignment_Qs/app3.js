/*
Qs. Create an object Person with their name, age and city. 
Edit their city's original value to change it to "New York".
Add a new property country and set it to the United States.
*/

const person = {
    name: 'shubham',
    age: 23,
    city: "Mumbai"
}
console.log(person)

person.city = "New York";
person.country = "United State";
console.log(person)