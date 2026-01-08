/*
***************** Functions in JS *********************

==> Functions Definition (telling JS)

function funcName() {
    // do something
}

function calling(using the function)

funcName();
*/
//------------------------------------------------
function hello() {
    console.log('hello')
}
hello();
hello();
hello();        // we can call function many time.

//------------------------------------------------
function printName() {
    console.log('Apna College');
    console.log('Pawan Yadav')
}
printName();

//------------------------------------------------
function print1to5() {
    for (let i = 0; i <= 5; i++) {
        console.log(i)
    }
}
print1to5()

//------------------------------------------------
function isAdult() {
    let age = 13;
    if (age >= 18) {
        console.log('Adult');
    } else {
        console.log('not Adult');
        
    }
}
isAdult();