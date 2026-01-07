/*
**************** Nested Objects ************************

==> Object of Objects
==> storing information of multiple students
*/

const classInfo = {
    aman: {
        grade: 'A+',
        city: 'Delhi'
    },
    shradha: {
        grade: "A",
        city: "Pune"
    },
    karan: {
        grade: 'O',
        city: 'Mumbai'
    }
};

console.log(classInfo)
console.log(classInfo.aman)
console.log(classInfo.shradha)

// how to print 'shradha' city
console.log(classInfo.shradha.city)

// how to Chnage 'shradha' city
classInfo.shradha.city = 'Gurgoan';
console.log(classInfo.shradha.city)
console.log(classInfo.shradha)

