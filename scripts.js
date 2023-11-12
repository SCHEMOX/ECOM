window.onscroll = function() {scrollFunction()};

document.getElementById("nav").setAttribute('style', 'transition: all ease-in-out 0.5s;');

var nav = document.getElementById("nav");

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    nav.classList.replace("navbar-light", "navbar-dark");
    nav.classList.replace("bg-light", "bg-dark");
  } else {
    nav.classList.replace("navbar-dark", "navbar-light");
    nav.classList.replace("bg-dark", "bg-light");
  }
}