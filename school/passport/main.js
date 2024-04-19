document.body.onload = function(){
    setTimeout(showPage, 4000);
    const {
        startGlitch,
        stopGlitch
    } = PowerGlitch.glitch('.img');
    startGlitch();
}
  
function showPage() {
    const {
        startTwoGlitch,
        stopTwoGlitch
    } = PowerGlitch.glitch('.start');
    startTwoGlitch();
    setTimeout(showPageTwo, 1500);
    setTimeout(showPageThree, 700);
}

function showPageTwo() {
    const el = document.getElementById("start");
    let opacity = 1;
    let times = 0;
    setInterval(function() {
        times += 1;
        if (opacity > 0) {
            opacity -= 0.01;
            el.style.opacity = opacity;
        }
        if (times >= 150) {
            stopGlitch();
            stopTwoGlitch();
            el.style.display = "none";
        } else if (times >= 300) {
            console.error("There seems to be an error. Please refresh the page.");
            stopGlitch();
            stopTwoGlitch();
            el.style.display = "none";
            setTimeout(reload, 500);
            return;
        }
    }, 8);
    console.log(`Finished opacity loop with ${times} tries.`);
}

function reload() {
    location.reload();
}

function showPageThree() {
    document.getElementById("page").style.display = "block";
}
