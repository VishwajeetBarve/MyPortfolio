// targeting the elements



// setting the date
const dateClass = document.querySelector(".presentdate");
const date = new Date().getFullYear();
dateClass.innerHTML = date;


// preloader handling
var preloader = document.getElementById("preloader");
window.addEventListener("load", function () {
 preloader.style.display ="none";
});

// functionality of navbar
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});


// Back to the top button loader
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function(){
const scrollPosition = window.pageYOffset;

if(scrollPosition> 640){
 topLink.classList.add("show-toplink")
}else {
 topLink.classList.remove("show-toplink");
}
});