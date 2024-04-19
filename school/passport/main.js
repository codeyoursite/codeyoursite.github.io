document.body.onload = function(){
    setTimeout(showPage, 5000);
    PowerGlitch.glitch('.img')
}
  
function showPage() {
    document.getElementById("start").style.display = "none";
    document.getElementById("page").style.display = "block";
}
