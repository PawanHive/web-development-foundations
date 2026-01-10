/*
Qs. Write a function called mergeObjects that accepts two ojects and returns
a new objects which contains all the keys and values of the first objects and second object.
*/

let student = {
    name: 'pawan', 
    age: 22, 
    class: 9
}

const teacher = {
    TeacherName: 'shradha', 
    teach: 'computer science'
}

let mergeObjects = {...student, ...teacher}

console.log(mergeObjects);

// output:{name: 'pawan', age: 22, class: 9, TeacherName: 'shradha', teach: 'computer science'