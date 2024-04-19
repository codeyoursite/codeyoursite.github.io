document.body.onload = function(){
    setTimeout(showPage, 4000);
    PowerGlitch.glitch('.img')
}
  
function showPage() {
    PowerGlitch.glitch('.start');
    setTimeout(showPageTwo, 1500);
}

function showPageTwo() {
    document.getElementById("page").style.display = "block";
    var el = document.getElementById(start);
    let opacity = undefined;
    setInterval(function() {
      opacity = el.style.opacity;
      if (opacity > 0) {
         opacity -= 0.01;
         el.style.opacity = opacity;
      }
    }, 8);
}
