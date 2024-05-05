const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");

const noms = [one, two, three, four, five, six, seven, eight, nine];

let turn = undefined;

let ones = undefined;
let twos = undefined;
let threes = undefined;
let fours = undefined;
let fives = undefined;
let sixs = undefined;
let sevens = undefined;
let eights = undefined;
let nines = undefined;
let times = 0;

let currentNom = undefined;
for (let i = 0; i < noms.length; i++) {
        currentNom = noms[i];
        currentNom.addEventListener("click", function() {
            if (times % 2 == 0) {
                if (currentNom.textContent = "") {
                    currentNom.textContent = "O";
                }
            } else {
                if (currentNom.textContent = "") {
                    currentNom.textContent = "X";
                }
            }
            times += 1;
            currentNom.style.opacity = "100%";
        });
}

one.addEventListener("click", function() {
    if (times % 2 == 0) {
        one.textContent = "O";
    } else {
        one.textContent = "X";
    }
    times += 1;
    one.style.opacity = "100%";
});

two.addEventListener("click", function() {
    if (times % 2 == 0) {
        two.textContent = "O";
    } else {
        two.textContent = "X";
    }
    times += 1;
    two.style.opacity = "100%";
});

three.addEventListener("click", function() {
    if (times % 2 == 0) {
        three.textContent = "O";
    } else {
        three.textContent = "X";
    }
    times += 1;
    three.style.opacity = "100%";
});

four.addEventListener("click", function() {
    if (times % 2 == 0) {
        four.textContent = "O";
    } else {
        four.textContent = "X";
    }
    times += 1;
    four.style.opacity = "100%";
});

five.addEventListener("click", function() {
    if (times % 2 == 0) {
        five.textContent = "O";
    } else {
        five.textContent = "X";
    }
    times += 1;
    five.style.opacity = "100%";
});

six.addEventListener("click", function() {
    if (times % 2 == 0) {
        six.textContent = "O";
    } else {
        six.textContent = "X";
    }
    times += 1;
    six.style.opacity = "100%";
});

seven.addEventListener("click", function() {
    if (times % 2 == 0) {
        seven.textContent = "O";
    } else {
        seven.textContent = "X";
    }
    times += 1;
    seven.style.opacity = "100%";
});

eight.addEventListener("click", function() {
    if (times % 2 == 0) {
        eight.textContent = "O";
    } else {
        eight.textContent = "X";
    }
    times += 1;
    eight.style.opacity = "100%";
});

nine.addEventListener("click", function() {
    if (times % 2 == 0) {
        nine.textContent = "O";
    } else {
        nine.textContent = "X";
    }
    times += 1;
    nine.style.opacity = "100%";
});
