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
