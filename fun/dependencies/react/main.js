let counter = 0;
let info = document.getElementById("info");
let btn = document.getElementById("click");
let txt = document.getElementById("txt");
let cool = document.getElementById("cool");
let haha = document.getElementById("haha");
let item_one = 25;
let item_two_price = 100; // Renamed for clarity
let item_three_price = 300; // Renamed for clarity
let item_four_price = 500; // Renamed for clarity
let click_amount = 1
let cursors = []; // Represents Bumwackers (1 CPS)
let wilsons = []; // New array for Wilsons (5 CPS)
let nippys = []; // New array for Nippy (20 CPS)
let worker;

window.onkeydown = function(e) { if (e.keyCode == 87) {cool.style.display = "block"; haha.style.display = "none";}; }



// Set initial display styles
txt.style.display = "none";
txt.style.color = "red";

// Event listener for the manual click button
btn.addEventListener("click", add);

function add() {
    txt.style.display = "block";
    counter += click_amount;
    counter = Math.round(counter);
    info.innerHTML = counter;
    console.log("Manual click. Current count:", counter);
    setTimeout(function() {
        txt.style.display = "none";
    }, 700);
}

// Function to handle clicks from the Web Worker
function handleAutoclick() {
    counter++;
    counter = Math.round(counter);
    info.innerHTML = counter;
}

// Function to send the combined CPS message to the worker
function updateWorkerCps() {
    if (worker) {
        const payload = {
            type: 'updateCps',
            bumwackers: cursors.length,
            wilsons: wilsons.length,
            nippys: nippys.length
        };
        worker.postMessage(payload);
        console.log('Updated CPS sent to worker:', payload);
    }
}

// Function to create and start the Web Worker
function startWorker() {
    if (typeof(Worker) !== "undefined" && !worker) {
        worker = new Worker('autoclicker-worker.js');
        worker.onmessage = function(event) {
            if (event.data === 'autoclick') {
                // This is where the "click" signal from the worker is received
                handleAutoclick();
            }
        };
        console.log('Autoclicker worker created and started.');
    }
}

function stopWorker() {
    if (worker) {
        worker.terminate();
        worker = undefined;
        console.log('Autoclicker worker stopped.');
        cursors = [];
        wilsons = []; // Reset wilsons on stop
    }
}

// Function to add a Bumwacker (1 CPS)
function addBumwacker() {
    if (counter >= item_one) {
        if (!worker) {
            startWorker();
        }
        cursors.push(cursors.length + 1);
        
        setTimeout(updateWorkerCps, 100);
        
        counter -= item_one;
        item_one = item_one * 1.06;
        const newPrice = Math.round(item_one);
        document.getElementById("addBumwacker").textContent = `Bumwacker - 1 click per second - ${newPrice} Wilsons`;
    } else {
        document.getElementById("addBumwacker").textContent = "Insufficient funds.";
        setTimeout(() => {
            document.getElementById("addBumwacker").textContent = `Bumwacker - 1 click per second - ${Math.round(item_one)} Wilsons`;
        }, 600);
    }
}

// Function to add a Wilson (5 CPS)
function addWilson() {
    if (counter >= item_two_price) {
        if (!worker) {
            startWorker();
        }
        nippys.push(nippys.length + 1);
        
        setTimeout(updateWorkerCps, 100);
        
        counter -= item_two_price;
        item_two_price = item_two_price * 1.04;
        const newPrice = Math.round(item_two_price);
        document.getElementById("addWilson").textContent = `I've found Wilson - 5 clicks per second - ${newPrice} Wilsons`;
    } else {
        document.getElementById("addWilson").textContent = "Insufficient funds.";
        setTimeout(() => {
            document.getElementById("addWilson").textContent = `I've found Wilson - 5 clicks per second - ${Math.round(item_two_price)} Wilsons`;
        }, 600);
    }
}

// Function to add a Wilson (5 CPS)
function addNipps() {
    if (counter >= item_four_price) {
        if (!worker) {
            startWorker();
        }
        nippys.push(nippys.length + 1);
        
        setTimeout(updateWorkerCps, 100);
        
        counter -= item_four_price;
        item_four_price = item_four_price * 1.15;
        const newPrice = Math.round(item_four_price);
        document.getElementById("addNipps").textContent = `Nippy Nippy - 20 clicks per second - ${newPrice} Wilsons`;
    } else {
        document.getElementById("addNipps").textContent = "Insufficient funds.";
        setTimeout(() => {
            document.getElementById("addNipps").textContent = `Nippy Nippy - 20 clicks per second - ${Math.round(item_four_price)} Wilsons`;
        }, 600);
    }
}

// Function to add a Wilson (5 CPS)
function addMore() {
    if (counter >= item_three_price) {
        click_amount = click_amount*5;
        counter -= item_three_price;
        item_three_price = item_three_price * 1.2;
        const newPrice = Math.round(item_three_price);
        document.getElementById("addMore").textContent = `Henry Woof Woof - Increases the amount you get per click by x5 - ${newPrice} Wilsons`;
    } else {
        document.getElementById("addMore").textContent = "Insufficient funds.";
        setTimeout(() => {
            document.getElementById("addMore").textContent = `Henry Woof Woof - Increases the amount you get per click by x5 - ${Math.round(item_three_price)} Wilsons`;
        }, 600);
    }
}

document.getElementById("addBumwacker").addEventListener("click", addBumwacker);
document.getElementById("addWilson").addEventListener("click", addWilson);
document.getElementById("addNipps").addEventListener("click", addNipps);

document.getElementById("addMore").addEventListener("click", addMore);
