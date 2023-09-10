var myVar;
const toggleBtn = document.querySelector('.bars');
const toggleBtnIcon = document.querySelector('.bars i');
const dropDownMenu = document.querySelector('.dropdown_menu');
const oneBtn = document.querySelector('.dropdown_link_one');
const twoBtn = document.querySelector('.dropdown_link_two');
const oneBtnIcon = document.querySelector('.dropdown_link_one i');
const twoBtnIcon = document.querySelector('.two_icon');
const oneMenu = document.querySelector('.dropdown_content_one');
const twoMenu = document.querySelector('.dropdown_content_two');

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle('open');
  var li = document.getElementById("li");
  const isOpen = dropDownMenu.classList.contains('open');
  toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-caret-up'
    : 'fa-solid fa-caret-down'
}

oneBtn.onclick = function () {
  oneMenu.classList.toggle('open');
  const isOpen = oneMenu.classList.contains('open');
  oneBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

function myFunction() {
  myVar = setTimeout(showPage, 1200);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("page").style.display = "block";
  const main = document.getElementById("main")
}
