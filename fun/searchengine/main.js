document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();
    location.href = "search/index.html?query=" + document.getElementById("search").value;
});