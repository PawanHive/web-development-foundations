/*
Qs. Create a input element on the page with a placeholder 
"enter you name" and an H2 heading on the page inside HTML

The purpoes of this input element is to enter a user's 
name so it should only input letter form a-z, A-Z and space 
(all other characters should not be detected).

wherever the user inputs their name, their input should be 
dynamically visible inside the heading 

[Please note that no other character apart from the allowed 
characers should be visible in the heading]
*/

let inp = document.querySelector('input');
let h2 = document.querySelector('h2');

inp.addEventListener('input', function() {
    console.log(inp.value);
    h2.innerText = inp.value;
})