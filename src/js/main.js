window.onscroll = () => { stickyNavBar() };

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function stickyNavBar() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

var homeButton = document.getElementById("home_header");
var aboutButton = document.getElementById("about_me_header");
var myWorksButton = document.getElementById("my_works_header");
var awardsButton = document.getElementById("awards/titles_header");
var contactButton = document.getElementById("contact_header");
var learnAboutMeButton = document.getElementById("learn_about_me_id");

homeButton.addEventListener("click", () => smoothScroll("home"));
aboutButton.addEventListener("click", () => smoothScroll("about_me_id"));
myWorksButton.addEventListener("click", () => smoothScroll("my_works_id"));
awardsButton.addEventListener("click", () => smoothScroll("awards/titles_id"));
learnAboutMeButton.addEventListener("click", () => smoothScroll("about_me_id"));

const smoothScroll = (element) => {
  document.getElementById(element).scrollIntoView({ behavior: 'smooth' });
}