var myVar;
document.getElementbyId("body").style.backgroundImage = none
document.getElementbyId("body").style.backgroundColor = #fff

function myFunction() {
  myVar = setTimeout(showPage, 1500);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
  document.body.style.backgroundImage = "url('bg.jpg')";
}
