

// VARIABEL
const button = document.querySelector('button');
const hamburger = document.querySelector("nav .hamburger");
const headerList = document.querySelector("nav .list");
const parallax = 
[document.querySelector('#about div .items-2'),
 document.querySelector('#service div .items')]

// HAMBURGER
hamburger.addEventListener('click', function(){
  headerList.classList.toggle("slide");
  hamburger.classList.toggle("slide");
});

// FUNGSI BUTTON 
button.addEventListener('click', function(){
  document.documentElement.scrollTop = 0;
});



// PARALLAX
$(window).scroll(function(){
  const scroll = $(this).scrollTop();
  
  // BUTTON SHOW & HIDE
  if (scroll > 500) {
    button.style.opacity = "1";
  } else {
    button.style.opacity = "0";
    button.style.transition = "0.5s";
  }
  // ABOUT SECTION
  if (scroll > 100) {
    parallax[0].style.transform = "translateX(0)";
    parallax[0].style.transition = "1s";
  } else {
    parallax[0].style.transform = "translateX(-1000px)";
  }
  // SERVICE SECTION
  if (scroll > 300) {
    parallax[1].style.opacity = "1";
  } else {
    parallax[1].style.opacity = "0";
  }
  
});

