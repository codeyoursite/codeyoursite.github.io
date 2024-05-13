// Initialize game variables
let grid = document.getElementById("board"); // Select the board tag
let turn = "X"; // Player turn ("X" or "O")
let times = 0; // Number of moves made
let rand = 0; // Index for computer's random move
let done = []; // Array to track marked cells
const cells = document.querySelectorAll(".cell"); // Select all cells on the game board

// Add event listener to each cell for player's move
cells.forEach(cell => {
    cell.addEventListener("click", handleClick); // Add event listener to each cell
});

// Function to handle cell click
function handleClick() {
    // Remove event listener from the clicked cell
    this.removeEventListener("click", handleClick);
    // Check if text content is the placeholder
    if (cell.textContent === "W") {
            // Mark cell with player's symbol
            cell.textContent = turn;
            cell.style.opacity = "100%";
            // Switch player turn
            turn = turn === "X" ? "O" : "X";
            // Increment move count
            times++;
            // Add cell to list of marked cells
            done.push(cell);
            // Check for winner
            findthewinner();
            // Computer makes its move
            computer();
        } else if (cell.classList.contains("grid")) {
            // Display error message if invalid cell is clicked
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "There is an issue. Please come back later."
            });
            // Refresh the game after a delay
            setTimeout(3400, refresh);
        } else if (cell.textContent !== "X" && cell.textContent !== "O") {
            // Log an error message for unexpected scenario
            console.log("There was a small problem with the code.");
            // Mark cell with player's symbol
            cell.textContent = turn;
            cell.style.opacity = "100%";
            // Switch player turn
            turn = turn === "X" ? "O" : "X";
            // Increment move count
            times++;
            // Add cell to list of marked cells
            done.push(cell);
            // Check for winner
            findthewinner();
            // Computer makes its move
            computer();
        } else {
            // Display error message if cell is already marked
            Swal.fire({
                icon: "error",
                title: "Choose a different space",
                text: "The cell you clicked on has already been taken."
            });
        }
}

// Function to refresh the game
function refresh() {
    location.reload();
}

// Function for computer's move
function computer() {
    // Generate a random index for the computer's move
    rand = Math.floor(Math.random() * (cells.length - done.length));
    // Click on the selected cell
    cells[rand].click();
}

// Function to check for winner
function findthewinner() {
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
    
    // Iterate through each winning combination
    for (let combo of winningCombos) {
        const [aId, bId, cId] = combo;
        const a = document.getElementById(aId);
        const b = document.getElementById(bId);
        const c = document.getElementById(cId);

        // Check if cells in the current combination have the same non-empty content
        if (a.textContent && a.textContent === b.textContent && a.textContent === c.textContent && a.textContent !== "W" && b.textContent !== "W" && c.textContent !== "W") {
            // Display success message for the winner
            Swal.fire({
                icon: "success",
                title: `Player ${a.textContent} wins!`,
                text: "Well done!",
                confirmButtonText: "Play again"
            });
            // Reset the game
            resetGame();
            return;
        }
    }
    // If all cells are marked and there is no winner, it's a draw
    if (times === 9) {
        // Display draw message
        Swal.fire({
            icon: "info",
            title: "It's a draw!",
            text: "All squares have been used.",
            confirmButtonText: "Play again"
        });
        // Reset the game
        resetGame();
    }
}

// Function to reset the game
function resetGame() {
    // Select all cells
    const cells = document.querySelectorAll(".cell");
    // Reset each cell to initial state
    cells.forEach(cell => {
        cell.textContent = "W"; // Set content to "W" (empty)
        cell.style.opacity = "0"; // Hide cell
    });
    // Reset game variables
    done = []; // Clear list of marked cells
    turn = "X"; // Reset player turn
    times = 0; // Reset move count
    // Reattach event listener to each cell for player's move
    cells.forEach(cell => {
        cell.addEventListener("click", handleClick); // Add event listener to each cell
    });
}
