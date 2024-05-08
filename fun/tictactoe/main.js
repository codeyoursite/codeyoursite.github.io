const board = document.getElementById("board");
let turn = "X";
let times = 0;

board.addEventListener("click", (event) => {
    const clickedCell = event.target;
    if (clickedCell.classList.contains("cell") && !clickedCell.textContent) {
        clickedCell.textContent = turn;
        clickedCell.opacity = "100%";
        turn = turn === "X" ? "O" : "X";
        times++;
        checkWinner();
    }
});

function checkWinner() {
    const winningCombos = [
        ["one", "two", "three"],
        ["four", "five", "six"],
        ["seven", "eight", "nine"],
        ["one", "four", "seven"],
        ["two", "five", "eight"],
        ["three", "six", "nine"],
        ["one", "five", "nine"],
        ["three", "five", "seven"]
    ];
    
    for (let combo of winningCombos) {
        const [aId, bId, cId] = combo;
        const a = document.getElementById(aId);
        const b = document.getElementById(bId);
        const c = document.getElementById(cId);

        if (a.textContent && a.textContent === b.textContent && a.textContent === c.textContent) {
            alert(`Player ${a.textContent} wins!`);
            resetGame();
            return;
        }
    }

    if (times === 9) {
        alert("It's a draw!");
        resetGame();
    }
}

function resetGame() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.textContent = "";
    });
    turn = "X";
    times = 0;
}
