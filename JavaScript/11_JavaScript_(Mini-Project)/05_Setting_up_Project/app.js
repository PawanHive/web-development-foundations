let gameSeq = [];
let userSeq = [];

let btns = ['yellow', 'red', 'purple', 'green']

let started = false;
let level = 0;
let highScore = 0;

let h2 = document.querySelector('h2')

document.addEventListener('keypress', function() {
    // console.log('game started')

    if(started ==  false) {
        console.log("game is started");
        started = true;

        levelUp();
    }
})

// game flash button for 250ms will turn 'white'
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 1000/4)
}

// user flash button for 250ms will turn 'green'
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 1000/4)
}

// gameFlash function logic
function levelUp() {
    userSeq = [];

    level++;
    h2.innerText = `Level ${level}`;

    // random btn choose
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`)

    // console.log(randIdx)
    // console.log(randColor)
    // console.log(randBtn)

    gameSeq.push(randColor);
    console.log(gameSeq);

    gameFlash(randBtn);
}

function checkAns(idx) {
    // console.log("curr level : ", level)
    // let idx = level-1

    if (userSeq[idx] == gameSeq[idx]) {
        // console.log("same value");
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    }else {

        if(level > highScore) {
            highScore = level;
        }

        h2.innerHTML = `
        Game Over!<br>
        Your score was <b>${level}</b><br>
        Highest score: <b>${highScore}</b><br> 
        Press any key to restart.
        `;
        document.querySelector('body').style.backgroundColor = 'red';
        setTimeout(function() {
        document.querySelector('body').style.backgroundColor = 'white';
        }, 150)
        reset();
    }
}

function btnPress() {
    // console.log(this)
    let btn = this;
    userFlash(btn)

    userColor = btn.getAttribute('id');
    console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener('click', btnPress)
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}