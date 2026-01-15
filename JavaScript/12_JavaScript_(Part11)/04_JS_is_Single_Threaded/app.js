/*
**************** JS is Single Threaded *****************

==> JavaScript is single-threaded, meaning it executes 
one task at a time using a single call stack. To handle 
asynchronous operations without blocking, it uses Web 
APIs, task queues, and an event loop, allowing efficient 
non-blocking execution.

==> JavaScript is single threaded but is uses Browser, 
and Browser uses multiple threads internally

*/

//================================================================

// Example: Synchronous Nature of JS

let a = 25;
console.log(a);             // first execution

let b = 10;
console.log(b);             // second execution

console.log(a + b);         // third execution


// Example: Asynchronous Nature of JS

setTimeout(() => {
    console.log("apna college");        // this will execute second time
}, 2000);

setTimeout(() => {
    console.log("hello world");         // this will execute third time
}, 2000);

console.log('hello......')              // first this will execute


