//Qs. What is the output of the following code:

let length = 4;

function callback() {
    console.log(this.length);
}

const object = {
    length: 5,
    method(callback) {
        callback();
    },
};
object.method(callback, 1, 2);

//output: 0


/*
🔍 Step-by-step explanation
1️⃣ Global variable
let length = 4;

In browsers:
let variables do NOT attach to window

So:
window.length !== 4


⚠️ This is very important.

2️⃣ The callback function
function callback() {
    console.log(this.length);
}

Normal function
this depends on how it is called

3️⃣ object.method(callback)
method(callback) {
    callback();
}

Inside method:
callback() is called directly
NOT as object.callback()
So this inside callback → global object (window)


4️⃣ What is this.length here?

In browsers:
this === window
window.length exists
window.length = number of frames in the browser
Usually:
window.length === 0


❌ It does NOT use:
object.length (5)
let length = 4 (not on window)
✅ Final Output: 0

*/