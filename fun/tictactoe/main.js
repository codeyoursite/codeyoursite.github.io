const board = document.getElementById("board");
let turn = "X";
let times = 0;

board.addEventListener("click", function(event) {
    const clickedCell = event.target;

    // Check if the clicked element is a cell
    if (clickedCell.classList.contains("cell")) {
        // Check if the cell is empty
        if (!clickedCell.textContent) {
            // Set the text content based on the turn
            clickedCell.textContent = turn;
            clickedCell.style.opacity = "100%";
            // Toggle the turn between "X" and "O"
            turn = turn === "X" ? "O" : "X";
            // Increment the number of times clicked
            times++;
            // Check for a winner after each move
            checkWinner();
        }
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
    // Clear the text content of all cells
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.textContent = "";
    });
    // Reset turn and times variables
    turn = "X";
    times = 0;
}
