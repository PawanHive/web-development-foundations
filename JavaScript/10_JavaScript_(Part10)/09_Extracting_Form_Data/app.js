/*
********** Extracting Form Data after submittion *************


*/

//-----------------------------------------------------------------------
// NEW CONCEPT:

// let form = document.querySelector('form');

// form.addEventListener('submit', function(event) {
//     event.preventDefault();

//     let inp = document.querySelector('input');
//     console.dir(inp)
//     console.dir(inp.innerText)                  //print nothing     .. innerText don't for input element which teake value from user side
//     console.dir(inp.value)                      // will print what user give input
// })

//------------------------------------------------------------------
// #2nd code

// let form = document.querySelector('form');

// form.addEventListener('submit', function(event) {
//     event.preventDefault();

//     let user = document.querySelector('#user')
//     let pass = document.querySelector('#pass')

//     console.dir(user.value)
//     console.dir(pass.value)

//     alert(`Hi, ${user.value} your password is set to ${pass.value}`)
// })

//-------------------------------------------------------------------

// # how to access individual element inside of form (short way):

        // first print form Object
// let form = document.querySelector('form');

// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     console.dir(form)
//         // inside form Object check 'Elements Property' which will give HTMLFormContorlsColelctions (can see in console)
//     console.dir(form.elements);
//         // now we can see the index of each element in console which is exist in 'form' element
//     console.dir(form.elements[0])       // 'form' first element will print
//     console.dir(form.elements[1])       // 'form' second element will print
//     console.dir(form.elements[2])       // 'form' third element will print

// });

        /*
        NOTE: Why this way of accessing element is useful?
        Ans: Because we don't need to assign unique ID to each element
        of 'form' to access individual element.
        */

//----------------------------------------------------------------

// # Second bunch of code can also be written in this way> 

let form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let user = this.elements[0];    // = form.elements[0]
    let pass = this.elements[1];

    console.dir(user.value)
    console.dir(pass.value)

    alert(`Hi, ${user.value} your password is set to ${pass.value}`)
})