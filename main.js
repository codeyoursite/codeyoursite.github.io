var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
var state = 0
function changeState(newState)
{
  switch(newState)
  {
    case 0:
      break;
    case 1:
      const page2 = document.getElementById("page2");
      page2.scrollIntoView();
      break;
    case 2:
      const page3 = document.getElementById("page3");
      page3.scrollIntoView();
  }
}
document.addEventListener("click", function()
{
  state += 1;
  changeState(state);
});