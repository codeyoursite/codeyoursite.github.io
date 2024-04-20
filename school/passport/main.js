document.body.onload = function(){
    setTimeout(showPage, 4000);
    const power = PowerGlitch.glitch('.img');
    startGlitch();
}
  
function showPage() {
    const power2 = PowerGlitch.glitch('.start');
    startGlitch();
    setTimeout(showPageTwo, 1500);
    setTimeout(showPageThree, 700);
}

function showPageTwo() {
    const el = document.getElementById("start");
    let opacity = 1;
    let times = 0;
    var interval = setInterval(repeat, 8);
    console.log(`Finished opacity loop with ${times} tries.`);
}

function reload() {
    location.reload();
}

function showPageThree() {
    document.getElementById("page").style.display = "block";
}

function repeat() {
        times += 1;
        if (opacity > 0) {
            opacity -= 0.01;
            el.style.opacity = opacity;
        }
        if (times >= 150) {
            clearInterval(interval);
            power.stopGlitch();
            power2.stopGlitch();
            el.style.display = "none";
        } else if (times >= 300) {
            clearInterval(interval);
            power2.stopGlitch();
            power.stopGlitch();
            el.style.display = "none";
            setTimeout(reload, 500);
            return;
        }
}
