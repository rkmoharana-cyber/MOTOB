// Navbar Toggle
let navBar = document.querySelector('.navLink');
let menuBar = document.querySelector('#menuBtn');

menuBar.onclick = () => {
    navBar.classList.toggle('active');
}

// Smooth Scrolling and Sticky Navbar

window.onscroll = () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);
}

// Swiper JS

var swiper = new Swiper(".myHome", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// Counter Section Start
let valueDisplay = document.querySelectorAll('.num');
let interval = 1000;

valueDisplay.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-value"));

  let duration = Math.floor(interval/endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if(startValue == endValue) {
      clearInterval(counter);
    }
  }, duration)
});


/* client section swiper */
var swiper = new Swiper(".myClient", {
  slidePerView:1,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay:{
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidePerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidePerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidePerView: 3,
      spaceBetween: 50,
    },
  },
});