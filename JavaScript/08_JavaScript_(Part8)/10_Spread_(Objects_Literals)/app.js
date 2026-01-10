/*
******************* Spread with Object Literals ******************

(...Spread):

*/

//(...Spread): Override/Copy Object properties ------------------

const data = {
    email: 'ironman@gmail.com',
    password: 'abcd'
};

const dataCopy = {...data, id: 123}
console.log(dataCopy);               // {email: 'ironman@gmail.com', password: 'abcd', id: 123}

//(...Spread): Converting Array to Objects -------------------

let arr = [900, 600, 500, 700, 300, 100]
let obj = {...arr}
console.log(obj);          // {0: 900, 1: 600, 2: 500, 3: 700, 4: 300, 5: 100}

//(...Spread): Convert String to Object ---------------------

let obj1 = {...'pawan'}
console.log(obj1);       // {0: 'p', 1: 'a', 2: 'w', 3: 'a', 4: 'n'}
