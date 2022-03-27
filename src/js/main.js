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
document.getElementById("my_works_header").addEventListener("click", moveToAboutMe);
function moveToAboutMe(){

  document.getElementById("my_works_id").scrollIntoView({behavior: "smooth",  inline: "nearest"});
}
document.getElementById("awards/titles_header").addEventListener("click", moveToAboutMe);
function moveToAboutMe(){

  document.getElementById("awards/titles_id").scrollIntoView({behavior: "smooth",  inline: "nearest"});
}
document.getElementById("contact_header").addEventListener("click", moveToAboutMe);
function moveToAboutMe(){

  //document.getElementById("about_me_id").scrollIntoView({behavior: "smooth",  inline: "nearest"});
}


