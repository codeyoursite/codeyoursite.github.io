const button = document.getElementById("btn");
let clicks = 0;

button.addEventListener('click', function(e){
    if (complete !== 1) {
        e.preventDefault();
        clicks++;
        console.log;
    } else {
        console.log("This button is disabled.");
    }
});

const Timeout = setTimeout(end, 10000);

function end() {
    console.log("Game Ended");
    console.log(`You finished with ${clicks} clicks.`);
    button.classList.add("disabled");
}