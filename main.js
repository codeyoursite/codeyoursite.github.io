var state = 0
function changeState(newState)
{
  switch(case)
  {
    case 0:
      break;
    case 1:
      window.scrollTo(0,innerHeight);
      break;
  }
}
document.addEventListener("click", function()
{
  state += 1;
  changeState(state);
});
