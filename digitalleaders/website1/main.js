const one = document.querySelector('.one');
const two = document.querySelector('.two');
const btn = document.querySelector('.btn');

function click(){
  if (two.style.display = "none") {
    two.style.display = "block";
    one.style.display = "none";
    btn.innerHTML = '← Previous';
  } else {
    one.style.display = "block";
    two.style.display = "none";
    btn.innerHTML = 'Next →';
  }
};
