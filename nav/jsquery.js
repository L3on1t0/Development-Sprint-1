const navSlide = () => {
  const menu = document.querySelector('.menu');
  const topnav = document.querySelector('.nav-links');

  menu.addEventListener('click', () =>{
    topnav.classList.toggle('nav-active');
    // alert(topnav.style.display);

    if(topnav.style.display!='none'){
      topnav.style.display='none';

    }else{
      topnav.style.display='inherit';
    }
  });
}
navSlide();

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}
