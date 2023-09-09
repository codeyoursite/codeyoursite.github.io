var myVar;
document.body.style.backgroundImage = "none";
document.body.style.backgroundColor = "#fff";
const toggleBtn = document.querySelector('.bars');
const toggleBtnIcon = document.querySelector('.bars i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle('open');
  var li = document.getElementById("li");
  if (li.style.display === "none") {
    li.style.display = "block";
  } else {
    li.style.display = "none";
  }
}

function myFunction() {
  myVar = setTimeout(showPage, 1500);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("page").style.display = "block";
  const main = document.getElementById("main")
}
