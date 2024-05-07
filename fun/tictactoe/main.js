const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
let turn = undefined;
let times = 0;

let currentNom = undefined;

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

function checkWinner() {
    const winningCombos = [
        [one, two, three],
        [four, five, six],
        [seven, eight, nine],
        [one, four, seven],
        [two, five, eight],
        [three, six, nine],
        [one, five, nine],
        [three, five, seven]
    ];
    for (let combo of winningCombos) {
        const [a, b, c] = combo;
        if (a.textContent && a.textContent === b.textContent && a.textContent === c.textContent) {
            return a.textContent;
        }
    }
    return null;
}
