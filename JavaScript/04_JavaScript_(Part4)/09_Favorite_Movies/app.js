const favMovies = 'avatar';
let guess = prompt("guess my movies")

while ((guess != favMovies) && (guess != 'quit') ) {
    console.log("Wrong Guess")
    guess = prompt("guess again")
    
}

if (guess == favMovies) {
        console.log("Congratulation")
    }
    else {
        console.log("you quit")
    }
