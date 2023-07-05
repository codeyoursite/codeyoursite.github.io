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
  "developer.jpg",
  "thumbnail_IMG_9690.jpg",
  "thumbnail_image1.jpg"
  "thumbnail_image0.jpg"
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
