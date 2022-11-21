const icon = document.querySelector(".icon");
const open = document.querySelector(".open");
const openn = document.querySelector(".openn");
const arrow = document.querySelector(".fa-arrow-turn-up")
const monthly = document.querySelector(".monthly")
const number = document.querySelector(".number")
const number1 = document.querySelector(".number1")
const yearly = document.querySelector(".yearly")
const parag = document.querySelector(".parag")
const parag1 = document.querySelector(".parag1")
const parag2 = document.querySelector(".parag2")
const blabla = document.querySelector(".blabla")
const clacla = document.querySelector(".clacla")
let mybutton = document.getElementById("myBtn");

icon.addEventListener("click", function(){
    open.classList.toggle("ms:hidden")
    openn.classList.toggle("ms:hidden")
})


monthly.addEventListener("click", function(){
    number.textContent="$19"
    number1.textContent="$36"
    parag.textContent = "/ Monthly"
    parag1.textContent = "/ Monthly"
    parag2.textContent = "/ Monthly"
    monthly.classList.add("active")
    yearly.classList.remove("active")
  
})
yearly.addEventListener("click", function(){
    number.textContent="$108"
    number1.textContent="$390"
    parag.textContent = "/ Yearly"
    parag1.textContent = "/ Yearly"
    parag2.textContent = "/ Yearly"
     yearly.classList.add("active")
     monthly.classList.remove("active")
  
})

blabla.addEventListener("click", function(){

    clacla.classList.add("collapse-content")
})

const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top")

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden")
  } else {
    backToTopButton.classList.add("hidden")
  }
})

const goToTop = () => {
    document.body.scrollIntoView({
        behavior: "smooth",
      });
  };
  
  backToTopButton.addEventListener("click", goToTop)

 