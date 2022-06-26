const hamburger = document.getElementById('hamburger-menu');
const navMenu = document.getElementsByTagName('nav')[0];
const section = document.getElementsByTagName('section')[0];


hamburger.addEventListener('click', () => {
  if (navMenu.style.height == 0 || navMenu.style.height == '0px') {
    hamburger.classList.add("open");
    navMenu.style.height = 'auto';
  } else {
    hamburger.classList.remove('open');
    navMenu.style.height = 0;
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 599) {
    navMenu.style.height = 'unset';
  } else if (window.innerWidth < 600 && navMenu.style.height !== 0) {
    navMenu.style.height = 0;
  }
});

section.addEventListener('animationend', () => {
  document.body.style.overflowY = "auto";
});

document.querySelector('#year').innerText = new Date().getFullYear();