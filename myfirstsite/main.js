const start = document.getElementById('start');
const main = document.getElementById('main');

window.addEventListener("click", function(){
    start.style.opacity = "0";
    setTimeout(displayBlock, 400);
});

function displayBlock() {
    main.style.display = "block";
}