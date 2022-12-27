let enterField = document.querySelector(".enter__field");
let enterInput = document.querySelector(".enter__input");

enterInput.addEventListener("focus", function(){
  enterField.classList.add("active");
})

enterInput.addEventListener("blur", function(){
  enterField.classList.remove("active");
})