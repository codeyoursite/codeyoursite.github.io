const form = document.getElementById("form");

const receive = new URLSearchParams(window.location.search);
const age = receive.get("age");
const level = receive.get("level");
let radio = undefined;
if (level !== "1") {
    radio = receive.get("radio");
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const buttons = document.getElementsByName("radio");
    let checked = undefined;
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].checked) {
            checked = buttons[i].value;
        }
    }
    if (checked === undefined) {
        return false;
    }
    let data = new URLSearchParams();
    data.append("age", age);
    data.append("level", level);
    if (level !== "1") {
        data.append("radio", radio);
    }
    data.append("choice", checked);
    const url = `../end/index.html?${data.toString()}`;
    window.location.href = url;
});