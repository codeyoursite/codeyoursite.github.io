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
  if (li.style.display === "block") {
    li.style.display = "none";
  } else {
    li.style.display = "block";
  }
}

oneBtn.onclick = function () {
  oneMenu.classList.toggle('open');
  twoMenu.classList.remove('open');
  const isOpen_one = oneMenu.classList.contains('open');
  arrow_down();
  if (isOpen_one) {
    oneBtnIcon.classList = 'fa-solid fa-caret-up';
  }
  liTwo.style.display = "none";
  if (liOne.style.display === "block") {
    liOne.style.display = "none";
  } else {
    liOne.style.display = "block";
  }
}

twoBtn.onclick = function () {
  twoMenu.classList.toggle('open');
  oneMenu.classList.remove('open');
  const isOpen_two = twoMenu.classList.contains('open');
  arrow_down();
  if (isOpen_two) {
    twoBtnIcon.classList = 'fa-solid fa-caret-up';
  }
  liOne.style.display = "none";
  if (liTwo.style.display === "block") {
    liTwo.style.display = "none";
  } else {
    liTwo.style.display = "block";
  }
};

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
}

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function update() {
  context.clearRect(0, 0, canvas.width, canvas.height);
 
  for (var i = 0; i < positions.length; i++) {
    var ratio = (i + 1) / positions.length;
    drawCircle(positions[i].x, positions[i].y, ratio);
  }
 
  drawCircle(xPos, yPos, "source");
 
  storeLastPosition(xPos, yPos);
 
  // update position
  if (xPos > 600) {
    xPos = -100;
  }
  xPos += 3;
 
  requestAnimationFrame(update);
}
update();
 
function drawCircle(x, y, r) {
  if (r == "source") {
    r = 1;
  } else {
    r /= 4;
  }
 
  context.beginPath();
  context.arc(x, y, 50, 0, 2 * Math.PI, true);
  context.fillStyle = "rgba(204, 102, 153, " + r + ")";
  context.fill();
}       
