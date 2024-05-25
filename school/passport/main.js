document.addEventListener('DOMContentLoaded', function() {
  setTimeout(showPage, 3600);
});

function showPage() {
  const img = document.getElementById("img");
  const start = document.getElementById("start");
  const page = document.getElementById("page");
  start.style.opacity = "0";
  start.addEventListener('transitionend', function() {
      start.remove();
  });
  page.style.display = "block";
}

function movePage(id) {
  const el = document.getElementById(id);
  document.body.classList.remove("stop-scrolling");
  el.scrollIntoView({ behavior: "smooth" });
  document.body.classList.add("stop-scrolling");
}

let mybutton = document.getElementById("myBtn");
// let myhelp = document.getElementById("help");
// let seconds = 0;
mybutton.style.display = "none";
window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      mybutton.style.display = "block";
      // myhelp.style.display = "none";
      // checkHelp();
  } else {
      mybutton.style.display = "none";
      // myhelp.style.display = "none";
  }
}

// function checkHelp() {
//   if (seconds < 5) {
//       setTimeout(changeTimer, 1000);
//       myhelp.style.display = "none";
//   } else {
//       myhelp.style.display = "block";
//   }
// }

// function changeTimer() {
//   seconds += 1;
//   checkHelp();
// }
