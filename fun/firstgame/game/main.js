const button = document.getElementById("btn");
let clicks = 0;
let complete = 1;

button.addEventListener('click', function(e){
    e.preventDefault();
    if (complete === 1) {
        clicks++;
        console.log("You clicked the button.");
    } else {
        console.log("This button is disabled.");
    }
});

const Timeout = setTimeout(end, 10000);

function end() {
    console.log("Game Ended");
    console.log(`You finished with ${clicks} clicks.`);
    button.classList.add("disabled");
    complete--;
}
