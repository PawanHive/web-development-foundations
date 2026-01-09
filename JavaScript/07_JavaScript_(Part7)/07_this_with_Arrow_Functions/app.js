/*
******************* 'this' with Arrow Functions (let see how 'this' behave with Arrow Function)  ***************************

==> 'this' keyword behave differently for 'Normal Function'(which has 'name' and 'function' keyword)   
    & for Arrow Function(without 'name' and 'function' keyword).... behave differently.


//NOTE:
1. jab 'this' Arrow Function ke andar defined hota hai to 'this' ki value PARENT OBJECT ke 'SCOPE' par depend karta h.
    agar PARENT ka SCOPE 'global scope' hai to parent ke 'this' ka value 'WINDOW' hoga and same ARROW FUNTION ke 'this' value bhi 'WINDOW' hoga.
    matlab ARROW FUNCTION ke call me jo PARENT OBJECT ka 'this' hota hai, wahi same 'this' ARROW FUNCTION ka 'this' hota h
    matlab ARROW FUNCTION apne calling Object ko apna 'this' nahi banate, calling Object ke 'this' ko apna 'this banate h

2. NORMAL FUNCTION me jo Object 'this' ko call karta hai wahi Object 'this' ka value hota hai.
*/

// const student = {        // global scope
//     name: 'aman',
//     marks: 95,
//     prop: this,        // Calling Object ka 'this'... kyu ki iske scope me 'window' object h.    //output: prop: Window {window: Window, self: Window, document: document, name: '', location: Location, …}[Prototype]]: Object
//     getName: function() {       // NORMAL FUNCTION
//         console.log(this)                       // prints student objects
//         return this.name;       // (this.name) accessed
//     },
//     getMarks: () => {           // ARROW FUNCTION
//         console.log(this);   //parent's scope  // is 'this' ka parent has 'student' object or 'student' scope hai 'global scope'...jiski wajah se yah 'window' objects print kar raha h                 // prints window objects      
//         return this.marks;      // not accessed prints "undefined"
//     }, 
    
// }
// console.log(student)
// console.log(student.getName())
// console.log(student.getMarks())

//----------------------------------------------------------
// but 'this' works better when defined inside arrow function and used as callback for some methods like setInterval() or setTimeout()


let teacher = {
    name: 'susma',
    age: 30,
    getInfo1: function () {
        setTimeout(() => {          // Arrow function
            console.log(this)       // teacher object
            console.log('hello pawan')
        }, 2000)
    },
    getInfo2: function () {
        setTimeout(function() {     // Normal Function
            console.log(this)       // window object
            console.log('hello teacher')
        }, 2000)
    },
}
console.log(teacher.getInfo1())
console.log(teacher.getInfo2())