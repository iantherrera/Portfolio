// Hamburger menu //
// Initialize Hamburger menu elements as variables
const hamburger = document.getElementById('hamburgerMenu');
const navMenu = document.getElementsByTagName('nav')[0];

// Hamburger menu click triggers nav height resize & applies nav styles & transformation animations
hamburger.addEventListener('click', () => {
  if (navMenu.style.height == 0 || navMenu.style.height == '0px') {
    hamburger.classList.add("open");
    navMenu.style.height = '135px';
  } else {
    hamburger.classList.remove('open');
    navMenu.style.height = 0;
  }
});

// Reset hamburger menu states when resizing
window.addEventListener('resize', () => {
  if (window.innerWidth > 599) {
    navMenu.style.height = 'unset';
    hamburger.classList.remove('open');
  } else if (window.innerWidth < 600 && navMenu.style.height !== 0) {
    navMenu.style.height = 0;
    hamburger.classList.remove('open');
  }
});


// Scrollbar hidden during animations //
// Add scrollbar if needed after animations //
const section = document.getElementsByTagName('section')[0];

section.addEventListener('animationend', () => {
  document.body.style.overflowY = "auto";
});