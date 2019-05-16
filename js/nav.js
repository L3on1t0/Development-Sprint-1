const navSlide = () => {
  const menu = document.querySelector('.menu');
  const topnav = document.querySelector('.nav-links');

  menu.addEventListener('click', () =>{
    topnav.classList.toggle('nav-active');
  });
}
navSlide();
