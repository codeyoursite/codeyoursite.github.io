var myVar;
document.body.style.backgroundImage = "none";
document.body.style.backgroundColor = "#fff";

function myFunction() {
  myVar = setTimeout(showPage, 1500);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("main").style.display = "block";
  const main = document.getElementById("main")
  const images = [
  "Screenshot 2023-07-05 155147.jpg",
  "thumbnail_IMG_9690.jpg",
  "thumbnail_image1.jpg",
  "thumbnail_image0.jpg",
  "thumbnail_IMG_9688.jpg",
  "thumbnail_IMG_9699.jpg",
  "thumbnail_IMG_9700.jpg",
  "thumbnail_IMG_9695.jpg"
  ];
  let i = 0;
  changePicture()
  window.setInterval(changePicture, 3000);
  function changePicture() {
    i++;
    if (i > images.length - 1) i = 0;
    main.style.backgroundImage = `url(${images[i]})`;
}
}
