document.getElementById("toggle").addEventListener("click", function(){
  document.getElementsByTagName('body')[0].classList.toggle("dark-theme");
  document.getElementsByTagName('header')[0].classList.toggle("header-dark");

  const mcm = document.getElementById("mcm");
  const cea = document.getElementById("cea");
  const me = document.getElementById("me");
  const food = document.getElementById("food");
  
  if (mcm.className == "mcm") {
    mcm.className = "mcm-dark";
    cea.className = "cea-dark";
    me.className = "me-dark";
    food.className = "food-dark";
  } else {
    mcm.className = "mcm";
    cea.className = "cea";
    me.className = "me";
    food.className = "food";
  }
});
