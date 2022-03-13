window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
document.getElementById("learn_about_me_id").addEventListener("click", moveToAboutMe);
function moveToAboutMe(){

  document.getElementById("about_me_id").scrollIntoView({behavior: "smooth",  inline: "nearest"});
}

