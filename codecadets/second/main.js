const form = document.getElementById("form");

const receive = new URLSearchParams(window.location.search);
const age = receive.get("age");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const level = document.getElementById("level").value;
    if (level === "1") {
        let data = new URLSearchParams();
        data.append("age", age);
        data.append("level", level);
        const url = `../fourth/index.html?${data.toString()}`;
        window.location.href = url;
    } else {
        let data = new URLSearchParams();
        data.append("age", age);
        data.append("level", level);
        const url = `../third/index.html?${data.toString()}`;
        window.location.href = url;
    }
});