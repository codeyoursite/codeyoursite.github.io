const button = document.getElementById("btn");
const txt = document.getElementById("text");
let clicks = 0;
let complete = 0;

button.addEventListener('click', function(e){
    e.preventDefault();
    if (complete === 1) {
        clicks++;
        console.log("You clicked the button.");
    } else {
        console.log("This button is disabled.");
    }
});

one();
const beginTwo = setTimeout(two, 1000);
const beginThree = setTimeout(three, 2000);
const beginFour = setTimeout(begin, 3000);

function one() {
    button.classList.add("disabled");
    txt.innerText = "3...";
}

function two() {
    txt.innerText = "2...";
}

function three() {
    txt.innerText = "1...";
}

function begin() {
    txt.innerText = "Click the button! Your timer has started.";
    complete++;
    button.classList.remove("disabled");
    setTimeout(end, 10000);
}

function end() {
    console.log("Game Ended");
    console.log(`You finished with ${clicks} clicks.`);
    txt.innerText = `You finished with ${clicks} clicks.`;
    button.classList.add("disabled");
    complete--;
    if (localStorage.getItem("highscore") == undefined) {
        localStorage.setItem("highscore", clicks);
    }
    const prevHighscore = localStorage.getItem("highscore");
    if (clicks > prevHighscore) {
        localStorage.setItem("highscore", clicks);
    }
    const newHighscore = localStorage.getItem("highscore");
    console.log(newHighscore);
}
