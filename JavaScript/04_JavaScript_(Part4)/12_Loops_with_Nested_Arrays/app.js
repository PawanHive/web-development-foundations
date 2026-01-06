/*
******************** Loops with students ***************

==> Nested Loops with Nested Arrays
*/

let heroes = [
    ['ironman', 'spiderman', 'thor'],
    ['superman', 'wonder woman', 'flash']
];

for (let i = 0; i < heroes.length; i++) {
    console.log(`List #${i}`)
    console.log(i, heroes[i])
    for (let j = 0; j < heroes[i].length; j++) {
        console.log(j, heroes[i][j])        
    }    
}

//New Example:

let student = [ ['aman', 95], ['shradha', 94.4], ['karan', 100]]

for (let i = 0; i < student.length; i++) {
    console.log(`info of student #${i + 1}`)
    for (let j = 0; j < student[i].length; j++) {
        console.log(student[i][j])
    }
}