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
    var el = document.getElementById("start");
    let opacity = 1;
    let times = 0;
    setInterval(function() {
        times += 1;
        if (opacity > 0) {
            opacity -= 0.01;
            el.style.opacity = opacity;
        }
        if (times >= 150) {
            console.error("There seems to be an error. Please refresh the page.")
            return;
        }
    }, 8);
    console.log(`Finished opacity loop with ${times} tries.`)
}
