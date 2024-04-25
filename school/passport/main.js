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
    movePage("top");
}

function movePage(id) {
    const el = document.getElementById(id);
    document.body.classList.remove("stop-scrolling");
    el.scrollIntoView({ behavior: "smooth", });
    document.body.classList.add("stop-scrolling");
}

let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}