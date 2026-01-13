



// 'e' or 'event' is a default parameter:

let btn = document.querySelector('button');

btn.addEventListener('click', function(e) {
    console.log(e)                                  // output: PointerEvent        ...means arrow pointer ka Event (it will provide 'Object' and properties of it in console) when events trigger
})

btn.addEventListener('dblclick', function(e) {
    console.log(e)                                  // output: MouseEvent         ... these 'Object' will give infomation about 'dblclick' when events trigger
})


// ## Learn About Keyboard Events ##

let inp = document.querySelector('input');

// keydown
inp.addEventListener('keydown', function(event) {
    // console.log(event)
    console.log("key = ", event.key)
    console.log("code = ",event.code)
    console.log("key was pressed")
});

// keyup
// inp.addEventListener('keyup', function(event) {
//     console.log(event)
//     console.log("key was released")
// })