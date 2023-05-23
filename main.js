var state = 0
function changeState(newState)
{
  let case = state;
  switch(case)
  {
    case 0:
      break;
    case 1:
      const page2 = document.getElementById("page2");
      element.scrollIntoView();
      break;
  }
}
document.addEventListener("click", function()
{
  state += 1;
  changeState(state);
});
