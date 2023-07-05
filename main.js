var myVar;
document.body.style.backgroundImage = "none";
document.body.style.backgroundColor = "#fff";

function myFunction() {
  myVar = setTimeout(showPage, 1500);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
  const images = [
  "https://images.unsplash.com/photo-1615568929336-ddfd93ce683a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1526&q=80",
  "https://images.unsplash.com/photo-1588250318414-908688966feb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2089&q=80",
  "https://images.unsplash.com/photo-1524077410193-2f667f9ab09a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80"
  ];
  let i = 0;
  changePicture()
  window.setInterval(changePicture, 3000);
  function changePicture() {
    i++;
    if (i > images.length - 1) i = 0;
    body.style.backgroundImage = `url(${images[i]})`;
}
}
