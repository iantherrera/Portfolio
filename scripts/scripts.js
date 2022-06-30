// Hamburger menu
// Reference hamburger menu icon
const hamburger = document.getElementById('hamburger-menu');
// Reference nav elements
const navMenu = document.getElementsByTagName('nav')[0];

// Hamburger menu click triggers nav height resize & applies nav styles & transformation animations
hamburger.addEventListener('click', () => {
  if (navMenu.style.height == 0 || navMenu.style.height == '0px') {
    hamburger.classList.add("open");
    navMenu.style.height = 'auto';
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
//Hamburger menu


//Scrollbar hidden during animations
// Reference section elements
const section = document.getElementsByTagName('section')[0];

// Add scrollbar if needed after animations
section.addEventListener('animationend', () => {
  document.body.style.overflowY = "auto";
});
//Scrollbar visibility

//Footer
// Add year to copyright in footer
document.querySelector('#year').innerText = new Date().getFullYear();
//Footer


// Lightbox modals
// Modal reference
var modal = document.getElementById('myModal');
// Reference images by class
var images = document.getElementsByClassName('myImages');
// Reference image in modal
var modalImg = document.getElementById("img01");
// Reference modal caption
var captionText = document.getElementById("caption");

// Loop through class images
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // Add click listener for image
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

// Modal close functionality //
// Close modal by clicking on close span
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
// Modal close functionality //