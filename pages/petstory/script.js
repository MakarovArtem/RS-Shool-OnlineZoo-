let burger = document.querySelector(".burger");
let menu__panel = document.querySelector(".menu__panel");
let menu = document.querySelector(".menu");


burger.addEventListener("click", function(){
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  menu__panel.classList.toggle("active");
})

let subscriptionInput = document.querySelector(".subscription__input");
let subscriptionButton = document.querySelector(".send-button");
let inputContainer = document.querySelector(".input__container");

subscriptionInput.addEventListener("focus", function(){
  subscriptionButton.classList.add("active");
  inputContainer.classList.add("active");
})

subscriptionInput.addEventListener("blur", function(){
  subscriptionButton.classList.remove("active");
  inputContainer.classList.remove("active");
  subscriptionButton.classList.remove("error");
  subscriptionInput.classList.remove("error");
  inputContainer.classList.remove("error");
})

subscriptionInput.addEventListener("invalid", function(){
  subscriptionButton.classList.remove("active");
  subscriptionButton.classList.add("error");
  subscriptionInput.classList.add("error");
  inputContainer.classList.add("error");
})