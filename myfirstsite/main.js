window.onload = function() {
    let start = document.getElementById('start');
    let main = document.getElementById('main');
        
    window.addEventListener("click", function() {
        start.style.opacity = 0;
        main.style.display = "block";
    });
};