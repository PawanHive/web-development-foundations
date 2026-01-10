/*
******************* Object Destructuring *****************

==> 
*/

const student = {
    name: 'karan', 
    age: 14,
    class: 9, 
    subjects: ['hindi', 'english', 'math', 'science'],
    username: 'karan@123',
    password: 'abc',
    city: 'pune'
}

// now we have access 'username' and 'password' using DESTURCTURING--------------------

let {username, password} = student;
console.log(username);  // karan@123
console.log(password);  // abc

// but if we want the which comes from 'student' object should store in another variable -------

let {username: user, password: secret} = student;     // 'user' & 'secret' become new variable to store values of 'username' & 'password'.
console.log(user);    // karan@123    
console.log(secret);    // abc

// can also add new properties in DESTRUCTURING: ------------------------------------
let {username: user1, password: secret1, city = "Mumbai"} = student;        // here 'Mumbai' is default value...if 'city' is declared in 'student' objects then that 'city' value will print
console.log(city);      // Mumbai
