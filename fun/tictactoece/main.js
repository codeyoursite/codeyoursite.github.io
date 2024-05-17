// Initialize game variables
let grid = document.getElementById("board"); // Select the board tag
let turn = "X"; // Player turn ("X" or "O")
let times = 0; // Number of moves made
let rand = 0; // Index for computer's random move
const placeholder = "W";
let stop = 0;
let prevScore = 0; // Define prevScore globally
const cells = document.querySelectorAll(".cell"); // Select all cells on the game board

// Define winning combinations
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

// Function to handle scoring
function updateScore(delta) {
    prevScore += delta;
    localStorage.setItem('winData', JSON.stringify({score: prevScore }));
}

if (localStorage.length > 0 && localStorage.getItem('winData')) {
    prevScore = JSON.parse(localStorage.getItem('winData')).score; // Score from past
    if (isNaN(prevScore)) {
        prevScore = 0; // Reset score if it's not a valid number
    }
    console.log(prevScore);
} else {
    prevScore = 0;
    console.log("This is your first game.");
}

// Function to handle cell click
function handleClick(event) {
    const clickedCell = event.target; // Get the clicked cell
    if (clickedCell.textContent == placeholder) {
        // Mark cell with player's symbol
        clickedCell.textContent = turn;
        clickedCell.style.opacity = "100%";
        // Switch player turn
        turn = turn === "X" ? "O" : "X";
        // Increment move count
        times++;
        // Check for winner
        findthewinner();
        // Computer makes its move
        if (stop === 0) computer();
    } else {
        // Display error message if cell is already marked
        Swal.fire({
            icon: "error",
            title: "Choose a different space",
            text: "The cell you clicked on has already been taken."
        });
    }
}

// Add event listener to each cell for player's move
cells.forEach(cell => {
    cell.addEventListener("click", handleClick);
});

// Function to refresh the game
function refresh() {
    location.reload();
}

// Function for computer's move
function computer() {
    if (times >= 9) return;
    let madeMove = false;
    const opponent = turn === "X" ? "O" : "X";
    let attempts = 0;
    while (!madeMove && attempts < cells.length) {
        const randIndex = Math.floor(Math.random() * cells.length);
        if (cells[randIndex].textContent == placeholder) {
            cells[randIndex].textContent = turn;
            cells[randIndex].style.opacity = "100%";
            madeMove = true;
        }
        attempts++;
    }
    // Switch player turn
    turn = turn === "X" ? "O" : "X";
    times++;
    // Check for winner
    findthewinner();
}

// Function to check for winner
function findthewinner() {
    // Iterate through each winning combination
    for (let combo of winningCombos) {
        const [aId, bId, cId] = combo;
        const a = document.getElementById(aId);
        const b = document.getElementById(bId);
        const c = document.getElementById(cId);

        // Check if cells in the current combination have the same non-empty content
        if (a.textContent && a.textContent === b.textContent && a.textContent === c.textContent && a.textContent !== placeholder) {
            if (a.textContent == "X") {
                updateScore(1); // Increment score for player
                stop = 1;
                // Display success message for the winner
                Swal.fire({
                    icon: "success",
                    title: `You beat the computer!`,
                    text: "Well done.",
                    confirmButtonText: "Play again",
                    allowOutsideClick: false
                }).then((result) => {
                    if (result.isConfirmed) refresh();
                });
            } else if (a.textContent == "O") {
                updateScore(-1); // Decrement score for player
                stop = 1;
                // Display sad message for the loser
                Swal.fire({
                    icon: "error",
                    title: `Oh no!`,
                    text: "The computer beat you.",
                    confirmButtonText: "Play again",
                    allowOutsideClick: false
                }).then((result) => {
                    if (result.isConfirmed) refresh();
                });
            }
            return;
        }
    }

    // If all cells are marked and there is no winner, it's a draw
    if (times >= 9 && stop == 0) {
        stop = 1;
        // Display draw message
        Swal.fire({
            icon: "info",
            title: "It's a draw!",
            text: "All squares have been used.",
            confirmButtonText: "Play again",
            allowOutsideClick: false
        }).then((result) => {
            if (result.isConfirmed) refresh();
        });
    }
}
