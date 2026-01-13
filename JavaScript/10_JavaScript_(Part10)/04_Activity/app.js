let btn = document.querySelector('button')              // select the button   

btn.addEventListener('click', function() {              // / run when button is clicked
    let h3 = document.querySelector('h3');              // select h3 element
    let randomColor = getRandomColor();                 // generate random RGB color

    h3.innerText = randomColor;                         // show color code as text

    let div = document.querySelector('div');            // select div
    div.style.backgroundColor = randomColor;            // apply color to div

    console.log("color Updated")                        // log for debugging
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);          // random red value
    let green = Math.floor(Math.random() * 255);        // random green value
    let blue = Math.floor(Math.random() * 255);         // random blue value

    let color = `rgb(${red}, ${green}, ${blue})`;       // create rgb string

    return color;                                       // send color back
}