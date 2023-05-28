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
  }
}
document.addEventListener("click", function()
{
  state += 1;
  changeState(state);
});
