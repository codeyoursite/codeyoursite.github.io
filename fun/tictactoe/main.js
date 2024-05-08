let turn = "X";
let times = 1;
const cells = document.querySelectorAll(".cell");

cells.forEach(cell => {
    cell.addEventListener("click", () => {
        if (cell.textContent === "") {
            cell.textContent = turn;
            cell.style.opacity = "100%";
            turn = turn === "X" ? "O" : "X";
            times++;
            checkWinner();
        } else if (cell.classList.contains("grid")) {
            console.log("Whaaaaaaaaaaaaaaaaaaaat!!!")
        } else {
            console.log("There was a small problem with the code.")
            cell.textContent = turn;
            cell.style.opacity = "100%";
            turn = turn === "X" ? "O" : "X";
            times++;
            checkWinner();
        }
    });
});

console.log("Finished event listener");

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
