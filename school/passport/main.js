document.body.onload = function(){
    setTimeout(showPage, 3600);
}

function showPage() {
    const img = document.getElementById("img");
    console.log('Image Height = ' + img.clientHeight);
    console.log('Image Width = ' + img.clientWidth);
    const start = document.getElementById("start");
    const page = document.getElementById("page");
    start.style.opacity = "0";
    start.addEventListener('transitionend', () => start.remove());
    page.style.display = "block";
}

movePage(id) {
    
}