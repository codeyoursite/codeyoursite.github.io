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

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("page").style.display = "block";
}

var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

const page = document.getElementById("page");

window.onload = function() {
  showPage();
  page.addEventListener('animationend', function() {
    window.scrollTo(0, 0);
  });
  const light = document.getElementsByClassName("light");
  const dark = document.getElementsByClassName("dark");
  if (systemSettingDark.matches) {
      light[0].style.color = 'white';
      dark[0].style.color = 'orange';
      light[1].style.color = 'white';
      dark[1].style.color = 'orange';
      document.querySelector("html").setAttribute("data-theme", "dark");
      console.log("Started on dark mode");
  } else {
      light[0].style.color = 'orange';
      dark[0].style.color = 'black';
      light[1].style.color = 'orange';
      dark[1].style.color = 'black';
      document.querySelector("html").setAttribute("data-theme", "light");
      console.log("Started on light mode");
  }
  setTimeout(headerAnimate, 500);
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { color: var(--normal-dark-light-text); border-right: 0.08em solid var(--typewriter-color)}";
  document.body.appendChild(css);
};

function headerAnimate() {
  const header = document.getElementById("header");
  header.style.opacity = "1";
}

const light = document.getElementsByClassName("light");
const dark = document.getElementsByClassName("dark");

const button = document.querySelector("[data-theme-toggle]");
const buttontwo = document.querySelector("[data-theme-toggle-two]");

const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

function toggleTheme() {
  if (light[0].style.color === 'orange') {
    light[0].style.color = 'white';
    dark[0].style.color = 'orange';
    light[1].style.color = 'white';
    dark[1].style.color = 'orange';
    document.querySelector("html").setAttribute("data-theme", "dark");
    console.log("Changed to dark mode");
  } else {
    light[0].style.color = 'orange';
    dark[0].style.color = 'black';
    light[1].style.color = 'orange';
    dark[1].style.color = 'black';
    document.querySelector("html").setAttribute("data-theme", "light");
    console.log("Changed to light mode");
  }
}

// Button click events
button.addEventListener("click", toggleTheme);
buttontwo.addEventListener("click", toggleTheme);

const array = ["Code Your Site", "Nom Two", "Nom Three"];
const index = 0;
function changeName(isRight) {
  if (isRight && index < array.length){
    index++;
  }
  else if (!isRight && index > 0){
    index--;
  }
  document.getElementById("text").innerText = array[index];
}