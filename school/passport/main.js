document.body.onload = function(){
    setTimeout(showPage, 3600);
}

function showPage() {
    const start = document.getElementById("start");
    const page = document.getElementById("page");
    start.style.opacity = "0";
    start.addEventListener('transitionend', () => start.remove());
    page.style.display = "block";
}
