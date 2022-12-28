let enterField = document.querySelector(".enter__field");
let enterInput = document.querySelector(".enter__input");

enterInput.addEventListener("focus", function(){
  enterField.classList.add("active");
})

enterInput.addEventListener("blur", function(){
  enterField.classList.remove("active");
})


let inputRange = document.querySelector(".scroll");
let amountList = document.querySelector(".option-bar__amount");


inputRange.addEventListener("change", function(){

  for (let i =0; i < amountList.children.length; i++) {
    amountList.children[i].classList.remove("active");
  }
  
  amountList.children[inputRange.value-1].classList.add("active");
  let amount = amountList.children[inputRange.value-1].textContent;
  enterInput.value = amount;
})