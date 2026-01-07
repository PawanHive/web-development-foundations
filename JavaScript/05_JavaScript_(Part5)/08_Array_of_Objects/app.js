/*
************* Array of Objects ********************

==> Storing information of multiple students
*/

const classInfo = [
    {
        name: 'aman',
        grade: 'A+',
        city: 'Delhi'
    },
    {
        name: 'shradha',
        grade: 'A+',
        city: 'Pune'
    },
    {
        name: 'Karan',
        grade: 'O',
        city: 'Mumbai'
    }
]
console.log(classInfo)                  // (3) [{…}, {…}, {…}]

//now here we can ACCESS Objects (indexwise)
console.log(classInfo[0])               // {name: 'aman', grade: 'A+', city: 'Delhi'}
console.log(classInfo[1])               // {name: 'shradha', grade: 'A+', city: 'Pune'}

// how to ACCESS 'name' of second Objects
console.log(classInfo[1].name)          // shradha
console.log(classInfo[1].grade)         // A+
console.log(classInfo[1].city)          // Pune

// How to CHANGE / Update 'city' of 3rd Object(Karan's)
classInfo[2].city = 'Gurgoan';
console.log(classInfo[2].city)          // Gurgoan
console.log(classInfo[2])               // {name: 'Karan', grade: 'O', city: 'Gurgoan'}

// How to ADD new 'Keys'... add 'gender' as key to shradha
classInfo[1].gender = 'female';
console.log(classInfo[1].gender)        // female
console.log(classInfo[1])               // {name: 'shradha', grade: 'A+', city: 'Pune', gender: 'female'}

// How to DELETE .... suppose delete 'gender' key:value of shradha
console.log(delete(classInfo[1].gender))    // 'gender' deleted
console.log(classInfo[1])               //  {name: 'shradha', grade: 'A+', city: 'Pune'}