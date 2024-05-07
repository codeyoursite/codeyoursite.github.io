const board = document.getElementById("board");
const noms = document.querySelectorAll(".cell");
let times = 1;

board.addEventListener("click", function(event) {
    const clickedCell = event.target;
    if (!clickedCell.matches(".cell")) return;
    if (clickedCell.textContent === "") {
        clickedCell.textContent = times % 2 === 0 ? "O" : "X";
        times++;
        clickedCell.style.opacity = "100%";
        const winner = checkWinner();
        displayWinner(winner);
    }
});

function checkWinner() {
    const winningCombos = [
        [noms[0], noms[1], noms[2]],
        [noms[3], noms[4], noms[5]],
        [noms[6], noms[7], noms[8]],
        [noms[0], noms[3], noms[6]],
        [noms[1], noms[4], noms[7]],
        [noms[2], noms[5], noms[8]],
        [noms[0], noms[4], noms[8]],
        [noms[2], noms[4], noms[6]]
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
