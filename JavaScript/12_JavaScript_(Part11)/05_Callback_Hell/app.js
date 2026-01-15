/*
********************* Callback Hell *******************8

*/

//--------------------------------------------------------------


// # frist code

let h1 = document.querySelector('h1');

        // now change color of 'h1' in 'red'
// h1.style.color = 'red';                     // color changed instantly
        // but we want color should change after 1s.
// setTimeout(() => {
//     h1.style.color = 'red'
// }, 1000);
//         // now we want color should change 'orange' at 2s.
// setTimeout(() => {
//     h1.style.color = 'orange'
// }, 2000);
//         // now we want color should change 'orange' at 3s.
// setTimeout(() => {
//     h1.style.color = 'green'
// }, 3000);

//--------------------------------------------------------------

// # we can also write above code in this way:

// function changeColor(color, delay) {
//     setTimeout(() => {
//         h1.style.color = color;
//     }, delay);
// }

// changeColor('red', 1000);
// changeColor('orange', 2000);
// changeColor('green', 3000);

        /*
        Note: 
        in this code we can see how one color is depended 
        to another one... so to show the dependencie we use
        callbacks
        */

//--------------------------------------------------------------

// # we can also write above code in this way: let say this time for 5 colors:

function changeColor(color, delay, nextColorChange) {           // parameter(color, delay, callback)
    setTimeout(() => {
        h1.style.color = color;
        if (nextColorChange) {
            nextColorChange();
        }
    }, delay);
}
                    // deep callback nesting => callback hell
changeColor('red', 1000, () => {
    changeColor('orange', 1000, () => {
        changeColor('green', 1000, () => {
            changeColor('violet', 1000, () => {
                changeColor('blue', 1000)
            })
        })
    })
});


    /*
    Note:
    # Why This Code Is Considered BAD Practice ❌

    ==> Hard to read
    ==> Hard to add/remove steps
    ==> Error handling is messy
    ==> Logic is tightly coupled

    & to solve these problem use PROMISES.
    */