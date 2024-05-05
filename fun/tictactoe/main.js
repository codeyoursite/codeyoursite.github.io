const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const noms = [one, two, three, four, five, six, seven, eight, nine];
let times = 1;

let currentNom = undefined;
for (let i = 0; i < noms.length; i++) {
    console.log("Inside for loop.");
    currentNom = noms[i];
    currentNom.addEventListener("click", function() {
        console.log("Event Listener Started.");
        if (currentNom.textContent === "") {
            console.log("Inside if Statement.");
            currentNom.textContent = times % 2 === 0 ? "O" : "X";
            times++;
            currentNom.style.opacity = "100%";
            const winner = checkWinner();
            displayWinner(winner);
            console.log("Finished if Statement.");
        }
        console.log("Event Listener Finished.");
    });
    console.log("Finished for loop.");
}

function checkWinner() {
    const winningCombos = [
        [one, two, three],
        [four, five, six],
        [seven, eight, nine],
        [one, four, seven],
        [two, five, eight],
        [three, six, nine],
        [one, five, nine],
        [three, five, seven]
    ];

    for (let combo of winningCombos) {
        const [a, b, c] = combo;
        if (a.textContent && a.textContent === b.textContent && a.textContent === c.textContent) {
            return a.textContent;
        }
    }

    return null;
}

function displayWinner(winner) {
    if (winner) {
        alert(`Player ${winner} wins!`);
    } else {
        if (times > 9) {
            alert("It's a draw!");
        }
    }
}
