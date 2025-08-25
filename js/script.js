//==========================   skills   ==========================
const skillscontent = document.getElementsByClassName('skills-content'),
    skillsheader = document.querySelectorAll('.skills-header');

function to() {
    let itemclass = this.parentNode.className;
    for (var i = 0; i < skillscontent.length; i++) {
        skillscontent[i].className = 'skills-content skills-close'
    }
    if (itemclass === 'skills-content skills-close') {
        this.parentNode.className = 'skills-content skills-open'
    }
}
skillsheader.forEach((el) => {
    el.addEventListener('click', to)
})
//********************   Searvice   ********/
var modalviews = document.querySelectorAll('.services-model'),
    modalbtns = document.querySelectorAll('.services-button'),
    modalcloses = document.querySelectorAll('.services-model-close');


let modal = function (modalclick) {
    modalviews[modalclick].classList.add('active-model')
}
modalbtns.forEach((modalbtn, x) => {
    modalbtn.addEventListener('click', () => {
        modal(x);
    })

})
modalcloses.forEach((modalclose) => {
    modalclose.addEventListener('click', () => {

        modalviews.forEach((modalview) => {
            modalview.classList.remove('active-model')

        })
    })
})
//=============================== protfolio swipper =====================

let swiperprotfolio = new Swiper(".protfolio-container", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
// ========================        dark light ===========================
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('theme-button')
  if (!btn) { console.warn('theme-button not found'); return }

  const darkTheme = 'dark-theme'
  const ICON_SUN  = 'fa-sun'
  const ICON_MOON = 'fa-moon'

  const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'

  const getOppositeIcon = () => getCurrentTheme() === 'dark' ? ICON_SUN : ICON_MOON

  const selectedTheme = localStorage.getItem('selected-theme')

  if (selectedTheme) {
    document.body.classList.toggle(darkTheme, selectedTheme === 'dark')
  }

  btn.classList.remove(ICON_SUN, ICON_MOON)
  btn.classList.add(getOppositeIcon())

  btn.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)

    btn.classList.remove(ICON_SUN, ICON_MOON)
    btn.classList.add(getOppositeIcon())

    localStorage.setItem('selected-theme', getCurrentTheme())
  })
})

//================    scroll top   ===============

/*global console*/

var x = document.getElementById("btn-scroll");
window.onscroll = function () {
    'use strict';
    if (window.pageYOffset >= 300) {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
};

x.onclick = function () {
    window.scrollTo(0, 0);
};


// scroll sections active link -------------------------------------
let sections = document.querySelectorAll('.section');
let navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            let activeLink = document.querySelector('header nav a[href*="#' + id + '"]');
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
});
// -------------------------- scroll reveal  -----------------------
 ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 150

 });

 ScrollReveal().reveal('.section-title, .home-img, heading', { origin: 'top' });
 ScrollReveal().reveal('.home-data, home', { origin: 'bottom' });
 ScrollReveal().reveal('.home-social, home', { origin: 'bottom' });
 ScrollReveal().reveal('.skills-container, .protfolio-container, .contact_container', { origin: 'bottom' });
 ScrollReveal().reveal('.about-data', { origin: 'right' });
 ScrollReveal().reveal('.about-img', { origin: 'left' });
