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
start_canvas()

addEventListener("resize", (event) => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  start_canvas();
});

function start_canvas() {
  var canvasPos = getPosition(canvas);
  var mouseX = 0;
  var mouseY = 0;
  var sqSize = 100;
  var xPos = 0;
  var yPos = 0;
  var dX = 0;
  var dY = 0;
   
  window.addEventListener("mousemove", setMousePosition, false);
   
  function setMousePosition(e) {
    mouseX = e.clientX - canvasPos.x;
    mouseY = e.clientY - canvasPos.y;
  }
   
  function animate() {
    dX = mouseX - xPos;
    dY = mouseY - yPos;
   
    xPos += (dX / 10);
    yPos += (dY / 10);
   
    context.clearRect(0, 0, canvas.width, canvas.height);
   
    context.fillStyle = "#00CCFF";
    context.fillRect(xPos - sqSize / 2,
                     yPos - sqSize / 2,
                     sqSize,
                     sqSize);
   
    requestAnimationFrame(animate);
  }
   
  // deal with the page getting resized or scrolled
  window.addEventListener("scroll", updatePosition, false);
  window.addEventListener("resize", updatePosition, false);
   
  function updatePosition() {
    canvasPos = getPosition(canvas);
  }
   
  // Helper function to get an element's exact position
  function getPosition(el) {
    var xPos = 0;
    var yPos = 0;
   
    while (el) {
      if (el.tagName == "BODY") {
        // deal with browser quirks with body/window/document and page scroll
        var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
        var yScroll = el.scrollTop || document.documentElement.scrollTop;
   
        xPos += (el.offsetLeft - xScroll + el.clientLeft);
        yPos += (el.offsetTop - yScroll + el.clientTop);
      } else {
        // for all other non-BODY elements
        xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
        yPos += (el.offsetTop - el.scrollTop + el.clientTop);
      }
   
      el = el.offsetParent;
    }
    return {
      x: xPos,
      y: yPos
    };
  }   
}
