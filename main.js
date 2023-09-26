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
const main = document.getElementById("main");
var li = document.getElementById("li");
var liOne = document.getElementById("li_one");
var liTwo = document.getElementById("li_two");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle('open');
  const isOpen = dropDownMenu.classList.contains('open');
  toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
  if (isOpen) {
    li.style.display = "block";
  } else {
    li.style.display = "none";
  }
}

oneBtn.onclick = function () {
  oneMenu.classList.toggle('open');
  twoMenu.classList.remove('open');
  const isOpen_one = oneMenu.classList.contains('open');
  arrow_down();
  liTwo.style.display = "none";
  if (isOpen_one) {
    oneBtnIcon.classList = 'fa-solid fa-caret-up';
    liOne.style.display = "block";
  } else {
    liOne.style.display = "none";
  }
}

twoBtn.onclick = function () {
  twoMenu.classList.toggle('open');
  oneMenu.classList.remove('open');
  const isOpen_two = twoMenu.classList.contains('open');
  arrow_down();
  liOne.style.display = "none";
  if (isOpen_two) {
    twoBtnIcon.classList = 'fa-solid fa-caret-up';
    liTwo.style.display = "block";
  } else {
    liTwo.style.display = "none";
  }
}

function arrow_down() {
 twoBtnIcon.classList = 'fa-solid fa-caret-down';
 oneBtnIcon.classList = 'fa-solid fa-caret-down';
}

function myFunction() {
  myVar = setTimeout(showPage, 1200);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("page").style.display = "block";
  typeWriter();
}


var i = 0;
var texts = ['Thanks for checking out my site.', 'I can code your website.', 'I build with pure code. "Your site will be very easy to customise.'];
var txt = 'Code Your Site';

// produces the typing effect on welcome message when page is loaded
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("heading").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 70);
  } 
  else {
    deleteWriter();
  }
}

function deleteWriter() {
  if (txt.length > 0) {
    var currentText = document.getElementById("heading").innerHTML
    document.getElementById("heading").innerHTML = currentText.slice(0, currentText.length - 1);
    setTimeout(typeWriter, 70);
  }
}
