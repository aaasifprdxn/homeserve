let hamburger = document.getElementsByClassName("menu");
let navbar = document.getElementsByClassName("navbar");
let container = document.getElementsByClassName("container");

if(hamburger[0].classList && navbar[0]) {
  hamburger[0].addEventListener("click", (e) => {
    if(hamburger[0].classList.contains("active")) {
      hamburger[0].classList.remove("active");
      navbar[0].classList.remove("active");
      container[0].classList.remove("no-scroll")
    } else {
      hamburger[0].classList += " active";
      navbar[0].classList += " active";
      container[0].classList += " no-scroll";
    }
  })
}

