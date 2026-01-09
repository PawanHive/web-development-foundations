//Qs. What is the output of the following code:

const object = {
    message: 'Hello, World!',
    logMessage() {
        console.log(this.message);
    }
};
setTimeout(object.logMessage, 1000);        // here object.logMessage = reference of function definition
console.log(object.logMessage())

//output: undefined

/**
So when setTimeout executes it:

Function is called without an object

this → window (or undefined in strict mode)

📌 window.message does NOT exist
 */