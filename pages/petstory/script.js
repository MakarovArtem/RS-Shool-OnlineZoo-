let burger = document.querySelector(".burger");
let menu__panel = document.querySelector(".menu__panel");
let menu = document.querySelector(".menu");


burger.addEventListener("click", function(){
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  menu__panel.classList.toggle("active");
})