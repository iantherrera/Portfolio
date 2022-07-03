// Hamburger menu
// Initialize Hamburger menu elements as variables
const hamburger = document.getElementById('hamburgerMenu');
const navMenu = document.getElementsByTagName('nav')[0];

// Hamburger menu click triggers nav height resize & applies nav styles & transformation animations
hamburger.addEventListener('click', () => {
  if (navMenu.style.height == 0 || navMenu.style.height == '0px') {
    hamburger.classList.add("open");
    navMenu.style.height = '145px';
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


// Scrollbar hidden during animations
// Add scrollbar if needed after animations //
const section = document.getElementsByTagName('section')[0];

section.addEventListener('animationend', () => {
  document.body.style.overflowY = "auto";
});


// Lightbox modals
// Initialize modal elements as variables
var modal = document.getElementById('myModal');
var images = document.getElementsByClassName('myImages');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Loop through gallery images
// Add click event listener to activate modal
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

// Close modal by clicking on close graphic element
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

//Close modal by clicking anywhere in modal box outside of image
var modalBox = document.getElementsByClassName('modal')[0]

window.onclick = function(event) {
  if (event.target == modalBox) {
    modal.style.display = "none";
  }
}