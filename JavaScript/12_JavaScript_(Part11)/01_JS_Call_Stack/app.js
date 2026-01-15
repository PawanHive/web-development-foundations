/*
1️⃣ What is Call Stack?
==> Call Stack is a data structure used by JavaScript 
to keep track of function calls.

👉 It works on the principle of LIFO
Last In, First Out


📌 MEANING:

==> The last function called is the first one to finish
==> JavaScript uses the call stack to know which function 
is currently running

-----------------------------------------------------------

2️⃣ Why Call Stack is Needed?

JavaScript is single-threaded ❗
That means:

    ==> It can execute only one task at a time
    ==> So it needs a system to remember:

        ==> Which function is running
        ==> Which function should run next

👉 Call Stack manages this order

-----------------------------------------------------------

3️⃣ How Call Stack Works (Simple Explanation)

Think of Call Stack like a stack of plates 🍽️

    You add a plate on top → push
    You remove the top plate → pop

Same with functions:
| Action             | Stack Operation |
| ------------------ | --------------- |
| Function is called | PUSH to stack   |
| Function finishes  | POP from stack  |

-----------------------------------------------------------

4️⃣ Call Stack Example (Simple):

    function greet() {
        sayHi();
    }

    function sayHi() {
        console.log("Hi!");
    }

    greet();


Execution Order:

    greet() → pushed
    sayHi() → pushed
    console.log() runs → popped
    sayHi() → popped
    greet() → popped

-----------------------------------------------------------

5️⃣ Call Stack Error: Stack Overflow ❌

What is Stack Overflow?

When:

    Functions keep calling each other infinitely
    Stack gets full
    Browser throws error

Example:
    function hello() {
        hello();
    }

    hello();


❌ Output:
    RangeError: Maximum call stack size exceeded


📌 Reason:
    ==> Function never finishes
    ==> Nothing gets popped from stack
*/

//================================================================



//Example:

// function hello() {
// console.log("hello")
// }

// function demo() {
// hello();
// }

// demo();

/*

// 

|           |
| hello()   |
| demo()    |
|___________|

# step 2: when demo() is called

|           |
|           |
| demo()    |
|___________|

# step 3: when hello() is called


|           |
| hello()   |
| demo()    |
|___________|

# step 4: when console.log() runs and finishes means hello() completed execution so it will POP

|           |
|           |
| demo()    |
|___________|

# step 3: now Execution goes to demo() which is already finish so it will also remove

|           |
|           |
|           |
|___________|

*/

//------------------------------------------------------------

// Example: will show execution order

// function hello() {
// console.log("inside hello function");
// console.log("hello")
// }

// function demo() {
// console.log("calling hello function")
// hello();
// }

// console.log("calling demo function");
// demo();
// console.log("done, bye!")

//----------------------------------------------------------------

// Example best for visualize the order of execution see result in console
function first() {
    console.log("inside first function");
}

function second() {
    console.log("inside second function & calling first function")
    first();
}

function third() {
    console.log('inside third function & calling second function')
    second();
}
console.log("calling third function");
third();


console.log("done, bye!")