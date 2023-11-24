const start = document.getElementById('start');
const main = document.getElementById('main');

window.addEventListener("click", function() {
    start.classList.add('start-hidden');
    main.style.display = "block";
});
