// Initialize game variables
let grid = document.getElementById("board"); // Select the board tag
let turn = "X"; // Player turn ("X" or "O")
let times = 0; // Number of moves made
let rand = 0; // Index for computer's random move
let done = []; // Array to track marked cells
const cells = document.querySelectorAll(".cell"); // Select all cells on the game board

// Function to handle cell click
function handleClick(event) {
    const clickedCell = event.target; // Get the clicked cell
    // Remove event listener from the clicked cell
    clickedCell.removeEventListener("click", handleClick);
    // Check if text content is the placeholder
    if (clickedCell.textContent === "W") {
            // Mark cell with player's symbol
            clickedCell.textContent = turn;
            clickedCell.style.opacity = "100%";
            // Switch player turn
            turn = turn === "X" ? "O" : "X";
            // Increment move count
            times++;
            // Add cell to list of marked cells
            done.push(clickedCell);
            // Check for winner
            findthewinner();
            // Computer makes its move
            computer();
        } else if (clickedCell.classList.contains("grid") || clickedCell.classList.contains("board")) {
            // Display error message if invalid cell is clicked
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "There is an issue. Please come back later."
            }).then((result) => {
                  if (result.isConfirmed) {
                    refresh();
                  }
                });
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
    cell.addEventListener("click", handleClick); // Add event listener to each cell
});

// Function to refresh the game
function refresh() {
    location.reload();
}

// Function for computer's move
function computer() {
    setTimeout(Math.floor(Math.random() * 3000) - 1000, computert);
}

function computert() {
    // Generate a random index for the computer's move
    rand = Math.floor(Math.random() * (cells.length - done.length));
    // Mark cell with player's symbol
    cells[rand].textContent = turn;
    // Set opacity to 100%
    cells[rand].style.opacity = "100%";
    // Switch player turn
    turn = turn === "X" ? "O" : "X";
    // Increment move count
    times++;
    // Add cell to list of marked cells
    done.push(cells[rand]);
    // Check for winner
    findthewinner();
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
            }).then((result) => {
              if (result.isConfirmed) {
                refresh();
              }
            });
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
        }).then((result) => {
          if (result.isConfirmed) {
            refresh();
          }
        });
    }
}

/*
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
        cell.addEventListener("click", () => handleClick(cell)); // Pass the clicked cell to handleClick function
    });
}
*/
