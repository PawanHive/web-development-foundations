/*
************** 'this' Keyword **********************

==> 'this' keyword refers to an object that is executing the current piece of code.
*/

//-------------------------------------------------------------
// const student = {
//     name: 'shradha', 
//     age: 23,
//     eng: 95,
//     math: 33,
//     phy: 57,
//     getAvg() {                              // create METHODS to get average of 3 subject
//         let avg = (eng + math +phy) / 3;
//         console.log(avg);
//     }
// }
// console.log(student);
// console.log(student.name);
// console.log(student.getAvg());      // ERROR: 'eng' is not defined

// -------------------------------------------------------------------

// See how using 'this' is imp.
const student = {
    name: 'shradha', 
    age: 23,
    eng: 95,
    math: 33,
    phy: 58,
    getAvg() {                              // create METHODS to get average of 3 subject
        console.log(this)                   // print value of 'this'  //output: {name: 'shradha', age: 23, eng: 95, math: 33, phy: 58, …}
        let avg = (this.eng + this.math + this.phy) / 3;    // REMEMBER: 'this' is imp to add here, value can't access
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}
console.log(student.getAvg());          // shradha got avg marks = 62

    // but, if use 'this' keyword outside of Object...then we will get (window object)
    function getAvg() {
        console.log(this)
    }
    getAvg();               //output: Window {window: Window, self: Window, document: document, name: '', location: Location, …}