// document.body.onload = function(){
//     const power = PowerGlitch.glitch('.img');
//     setTimeout(function() {
//         showPage(power);
//     }, 4000);
// }
  
// function showPage(power) {
//     const power2 = PowerGlitch.glitch('.start');
//     setTimeout(function() {
//         showPageTwo(power, power2)
//     }, 1500);
//     setTimeout(showPageThree, 700);
// }

// function showPageTwo(power, power2) {
//     const el = document.getElementById("start");
//     let opacity = 1;
//     let times = 0;
//     var interval = setInterval(function() {
//         repeat(interval, el, power, power2);
//     }, 8);
// }

// function showPageThree() {
//     document.getElementById("page").style.display = "block";
// }

// function repeat(interval, el, power, power2) {
//         let opacity = 1;
//         repeat2(opacity, interval, el, power, power2);
// }

// function repeat2(opacity, interval, el, power, power2) {
//     if (opacity > 0) {
//             opacity -= 0.01;
//             el.style.opacity = opacity;
//     } else {
//             power.stopGlitch();
//             power2.stopGlitch();
//             el.style.display = "none";
//             clearInterval(interval);
//     }
// }


document.body.onload = function(){
    setTimeout(showPage, 1500);
}

function showPage() {
    const start = document.getElementById("start");
    const page = document.getElementById("page")
    start.style.opacity = "0";
    start.addEventListener('transitionend', () => start.remove());
    page.style.display = "block";
}
