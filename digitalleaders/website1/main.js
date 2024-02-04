const one = document.querySelector('.one');
const two = document.querySelector('.two');
const btn = document.querySelector('.btn');

one.style.display = "block";
two.style.display = "none";

btn.onclick = function() {
  click();
};

function click() {
  console.log("The 'click' function has started.");
  
  if (two.style.display === "none") {
    two.style.display = "block";
    one.style.display = "none";
    btn.innerHTML = '← Previous';
    console.log("One is now hidden.");
  } else {
    one.style.display = "block";
    two.style.display = "none";
    btn.innerHTML = 'Next →';
    console.log("Two is now hidden.");
  }
}
