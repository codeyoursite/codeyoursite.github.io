document.body.onload = function(){
    setTimeout(showPage, 5000);
}
  
function showPage() {
    document.getElementById("start").style.display = "none";
    document.getElementById("page").style.display = "block";
}
