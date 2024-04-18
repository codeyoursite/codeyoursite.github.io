document.body.onload = function(){
    document.body.addEventListener(showPage, 1200);
}
  
function showPage() {
    document.getElementById("start").style.display = "none";
    document.getElementById("page").style.display = "block";
}