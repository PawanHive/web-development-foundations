/*
******** How to Add or Update Value of Object Literals ******

- Change the city to 'Mumbai'
- Add a new property, gender: 'Female'
-Change the marks to 'A'
*/

const student = {
    name: 'shradha',
    age: 23,
    marks: 94.4,
    city: 'delhi'
};
console.log(student);               // {name: 'shradha', age: 23, marks: 94.4, city: 'delhi'}
console.log(student.city);          // delhi

// How to Update / Change Value
student.city = "Mumbai";
student.marks = 'A';
console.log(student);               // {name: 'shradha', age: 23, marks: 'A', city: 'Mumbai'}
console.log(student.city);          // Mumbai
console.log(student.marks);         // A

// How to Add Value
student.gender = 'female';
console.log(student.gender);        // female
console.log(student);               // {name: 'shradha', age: 23, marks: 'A', city: 'Mumbai', gender: 'female'}

// How to Delete Value
console.log(delete student.age)     // true
console.log(delete(student.marks))  // true
console.log(student)                // {name: 'shradha', city: 'Mumbai', gender: 'female'}

// now we can also Change Marks as an Array
student.marks = [99, 87, 23]
console.log(student.marks)          // (3) [99, 87, 23]
console.log(student)                // {name: 'shradha', city: 'Mumbai', gender: 'female', marks: Array(3)}

