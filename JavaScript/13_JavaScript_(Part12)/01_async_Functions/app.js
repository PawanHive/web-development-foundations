/*
********************* Async Function ************************

async & await Keywords

1. async:
==> async is a keyword used before a function to make it 
return a Promise automatically.

    -> Whatever you return → becomes a resolved Promise
    -> Whatever you throw → becomes a rejected Promise

    -> async function by default 'Promise' ko return karte 
    hain, on that we can apply .then() or .catch() method

KEY POINTS: 

    - Used before a function
    - Always returns a Promise
    - return → resolves the Promise
    - throw → rejects the Promise
    - Enables use of await
    - Improves async code readability
*/

//==============================================================
// ## async ##

// async always return 'Promise':

async function hello() {            // only that much of function return 'Promise' we can see by calling greet() in console

}


// 'throw' Keywords use to throw error forcefully:

async function name() {
    throw "some random error"       // this will put 'Promise' in 'rejected' state forcefully
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Example: 

async function greet() {
    // throw "404 page not found";          // behind the scene: return Promise.reject("404 page not found");
    return "hello"                  // behind the scene: return Promise.resolve("hello");            
}

greet()                 // 'Promise'                 // now greet() is not normal function, it's a (async function) which always return 'Promise', and we use .then() & .catch() method on this 'Promise' Object
    .then((result) => {                                  //if promise state is 'fulfilled' then will take it's 'promiseresult' value [[PromiseResult]]:"hello"
        console.log("Promise was resolved");
        console.log("result was: ", result);
    })
    .catch((error) => {
        console.log("Promise was rejected with error : ", error);
    })


// # How to make Arrow function -> Async function:

let demo1 = async () => {
    return 5
}
    /*
        Now demo1() became (async function) 
        jab bhi ham demo1() ko call lageyenge hamme 
        'Promise' return hoga

        we can see by calling 'demo1()' in console
    */

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

