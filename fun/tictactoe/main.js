let turn = "X";
let times = 1;
const cells = document.querySelectorAll(".cell");

cells.forEach(cell => {
    cell.addEventListener("click", () => {
        if (cell.textContent === "W") {
            cell.textContent = turn;
            cell.style.opacity = "100%";
            turn = turn === "X" ? "O" : "X";
            times++;
            checkWinner();
        } else if (cell.classList.contains("grid")) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "There is an issue. Please come back later."
            });
            setTimeout(3400, refresh);
        } else if (cell.textContent !== "X" && cell.textContent !== "O") {
            console.log("There was a small problem with the code.");
            cell.textContent = turn;
            cell.style.opacity = "100%";
            turn = turn === "X" ? "O" : "X";
            times++;
            checkWinner();
        } else {
            Swal.fire({
                icon: "error",
                title: "Choose a different space",
                text: "The cell you clicked on has already been taken."
            });
        }
    });
});

function refresh() {
    location.reload();
}

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

        if (a.textContent && a.textContent === b.textContent && a.textContent === c.textContent && a.textContent !== "W" && b.textContent !== "W" && c.textContent !== "W") {
            alert(`Player ${a.textContent} wins!`);
            Swal.fire({
                icon: "success",
                title: `Player ${a.textContent} wins!`,
                text: "Well done!",
                confirmButtonText: "Play again"
            });
            resetGame();
            return;
        }
    }
    if (times === 9) {
        Swal.fire({
            icon: "info",
            title: "It's a draw!",
            text: "All squares have been used.",
            confirmButtonText: "Play again"
        });
        resetGame();
    }
}

function resetGame() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.textContent = "W";
    });
    turn = "X";
    times = 0;
}
