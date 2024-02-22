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

const beginOne = setTimeout(one, 1000);
const beginTwo = setTimeout(two, 2000);
const beginThree = setTimeout(three, 3000);
const beginFour = setTimeout(begin, 4000);

function one() {
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
    const end = setTimeout(end, 10000);
}

function end() {
    console.log("Game Ended");
    console.log(`You finished with ${clicks} clicks.`);
    button.classList.add("disabled");
    complete--;
}
