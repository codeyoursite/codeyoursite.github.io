// Initialize game variables
let grid = document.getElementById("board"); // Select the board tag
let turn = "O"; // Player turn ("X" or "O")
let times = 0; // Number of moves made
let rand = 0; // Index for computer's random move
const placeholder = "W";
let stop = 0;
let index = 0;
let index1 = 0;
let id = null;
let faliures = [];
let done = Array.from(document.querySelectorAll(".cell")); // Convert NodeList to array
const cells = document.querySelectorAll(".cell"); // Select all cells on the game board
let prevScore = 0; // Define prevScore globally
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

const winningCombos1 = [
    ["one", "two", "three"],
    ["three", "two", "one"],
    ["three", "one", "two"],
    ["four", "five", "six"],
    ["six", "five", "four"],
    ["six", "four", "five"],
    ["seven", "eight", "nine"],
    ["nine", "eight", "seven"],
    ["nine", "seven", "eight"],
    ["one", "four", "seven"],
    ["seven", "four", "one"],
    ["seven", "one", "four"],
    ["two", "five", "eight"],
    ["eight", "five", "two"],
    ["eight", "two", "five"],
    ["three", "six", "nine"],
    ["nine", "six", "three"],
    ["nine", "three", "six"],
    ["one", "five", "nine"],
    ["nine", "five", "one"],
    ["nine", "one", "five"],
    ["three", "five", "seven"],
    ["seven", "five", "three"],
    ["seven", "three", "five"]
];

// Function to handle scoring
function updateScore(delta) {
    prevScore += delta;
    localStorage.setItem('winData', JSON.stringify({score: prevScore }));
}

if (localStorage.length > 0 && localStorage.getItem('winData')) {
    prevScore = JSON.parse(localStorage.getItem('winData')).score; // Score from Past
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
    // Check if text content is the placeholder
    if (clickedCell.textContent == placeholder) {
            // Mark cell with player's symbol
            clickedCell.textContent = turn;
            clickedCell.style.opacity = "100%";
            // Switch player turn
            turn = turn === "X" ? "O" : "X";
            // Increment move count
            times++;
            id = clickedCell.id;
            if (id == "one") {
                id = 1;
            } else if (id == "two") {
                id = 2;
            } else if (id == "three") {
                id = 3;
            } else if (id == "four") {
                id = 4;
            } else if (id == "five") {
                id = 5;
            } else if (id == "six") {
                id = 6;
            } else if (id == "seven") {
                id = 7;
            } else if (id == "eight") {
                id = 8;
            } else if (id == "nine") {
                id = 9;
            } else {
                // Display error message if invalid cell is clicked
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "There is an issue. Please come back later.",
                    allowOutsideClick: false
                }).then((result) => {
                    if (result.isConfirmed) {
                        refresh();
                    }
                });
            }
            done.splice(id, 1);
            // Check for winner
            findthewinner();
            // Computer makes its move
            computer();
        } else if (clickedCell.classList.contains("grid") || clickedCell.classList.contains("board")) {
            // Display error message if invalid cell is clicked
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "There is an issue. Please come back later.",
                allowOutsideClick: false
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

const scomputer = Math.random();
startComputer(scomputer);
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
    computert();
}

function startComputer(nom) {
    if (nom >= 0.5) {
        // Mark cell with player's symbol
            cells[5].textContent = turn;
            // Set opacity to 100%
            cells[5].style.opacity = "100%";
            // Switch player turn
            turn = turn === "X" ? "O" : "X";
            // Increment move count
            times++;
            // Add cell to list of marked cells
            done.push(cells[5]);
            // Check for winner
            findthewinner();
    }
}

function computert() {
    if (index1 >= 8) {
        // Generate a random index for the computer's move
        rand = Math.floor(Math.random() * done.length);
        if (rand >= 0 && rand < cells.length && cells[rand].textContent == placeholder) {
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
        } else {
            console.warn("Moving on the the finalTime() function.")
            finalTime(false);
        }
    } else {
        let index = 0; // Initialize index
        let rand;
        for (let combo of winningCombos) {
            const [aId1, bId1, cId1] = combo;
            const a1 = document.getElementById(aId1);
            const b1 = document.getElementById(bId1);
            const c1 = document.getElementById(cId1);
            if (a1.textContent == b1.textContent) {
                index += 1;
                rand = c1;
            }
        }
        if (index != 1) {
            // Generate a random index for the computer's move
            rand = Math.floor(Math.random() * done.length);
        }
        if (rand >= 0 && rand < cells.length && cells[rand].textContent == placeholder) {
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
        } else {
            index1 += 1;
            faliures.push(rand);
            computert();
        }
    }
    index1 = 0;
}

function finalTime(end) {
    if (end == false) {
        // Generate a random index for the computer's move
        rand = Math.floor(Math.random() * done.length);
        if (rand >= 0 && rand < cells.length && cells[rand].textContent == placeholder) {
            // Mark cell with player's symbol
            cells[rand].textContent = turn;
            // Set opacity to 100%
            cells[rand].style.opacity = "100%";
            // Switch player turn
            turn = turn === "X" ? "O" : "X";
            // Increment move count
            times++;
            // Check for winner
            findthewinner();
        } else {
            finalTime(true)
        }
    } else {
        // Generate a random index for the computer's move
        rand = Math.floor(Math.random() * done.length);
        if (rand >= 0 && rand < cells.length && cells[rand].textContent == placeholder) {
            // Mark cell with player's symbol
            cells[rand].textContent = turn;
            // Set opacity to 100%
            cells[rand].style.opacity = "100%";
            // Switch player turn
            turn = turn === "X" ? "O" : "X";
            // Increment move count
            times++;
            // Check for winner
            findthewinner();
        } else {
            console.error("Yep, the end.")
        }
    }
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
        if (a.textContent && a.textContent === b.textContent && a.textContent === c.textContent && a.textContent !== "W" && b.textContent !== "W" && c.textContent !== "W") {
            if (a.textContent == "O" && b.textContent == "O" && c.textContent == "O") {
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
                  if (result.isConfirmed) {
                    refresh();
                  }
                });
            } else if (a.textContent == "X" && b.textContent == "X" && c.textContent == "X") {
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
                  if (result.isConfirmed) {
                    refresh();
                  }
                });
            }
        }
    }
    // If all cells are marked and there is no winner, it's a draw
    if (times == 9 && stop == 0) {
        stop = 1;
        // Display draw message
        Swal.fire({
            icon: "info",
            title: "It's a draw!",
            text: "All squares have been used.",
            confirmButtonText: "Play again",
            allowOutsideClick: false
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
