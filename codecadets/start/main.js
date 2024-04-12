const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const age = document.getElementById("floatingPassword").value;
    let data = new URLSearchParams();
    data.append("age", age);
    if (age < 7) {
        const url = `../young`;
        window.location.href = url;
    } else {
        const url = `../second/index.html?${data.toString()}`;
        window.location.href = url;
    }
});
