var myVar;
const toggleBtn = document.querySelector('.bars');
const toggleBtnIcon = document.querySelector('.bars i');
const dropDownMenu = document.querySelector('.dropdown_menu');
const oneBtn = document.querySelector('.dropdown_link_one');
const twoBtn = document.querySelector('.dropdown_link_two');
const oneBtnIcon = document.querySelector('.dropdown_link_one i');
const twoBtnIcon = document.querySelector('.dropdown_link_two i');
const oneMenu = document.querySelector('.dropdown_content_one');
const twoMenu = document.querySelector('.dropdown_content_two');

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle('open');
  var li = document.getElementById("li");
  const isOpen = dropDownMenu.classList.contains('open');
  toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
  if (li.style.display === "block") {
    li.style.display = "none";
  } else {
    li.style.display = "block";
  }
}

oneBtn.onclick = function () {
  oneMenu.classList.toggle('open');
  const isOpen_one = oneMenu.classList.contains('open');
  var liOne = document.getElementById("li_one");
  oneBtnIcon.classList = isOpen_one
    ? 'fa-solid fa-caret-up'
    : 'fa-solid fa-caret-down'
  if (liOne.style.display === "block") {
    liOne.style.display = "none";
  } else {
    liOne.style.display = "block";
  }
}

twoBtn.onclick = function () {
  twoMenu.classList.toggle('open');
  const isOpen_two = oneMenu.classList.contains('open');
  var liTwo = document.getElementById("li_two");
  oneBtnIcon.classList = isOpen_two
    ? 'fa-solid fa-caret-up'
    : 'fa-solid fa-caret-down'
  if (liTwo.style.display === "block") {
    liTwo.style.display = "none";
  } else {
    liTwo.style.display = "block";
  }
}


function myFunction() {
  myVar = setTimeout(showPage, 1200);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("page").style.display = "block";
  const main = document.getElementById("main")
}
