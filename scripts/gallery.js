// Design gallery array of images and attributes
let images = [
    {
        src: "../Portfolio/images/design/decca_flyer_2015.jpg",
        class: "myImages",
        id: "myImg",
        alt: "Short Film Festival Poster - 2015"
    },

    {
        src: "../Portfolio/images/design/uncorked_poster_2015.jpg",
        class: "myImages",
        id: "myImg",
        alt: "Short Film Festival Poster - 2015"
    },
    {
        src: "../Portfolio/images/design/prettygoslings_promo_2015.jpg",
        class: "myImages",
        id: "myImg",
        alt: "Short Film Festival Poster - 2015"
    },

    {
        src: "../Portfolio/images/design/wesfest_poster_2015.jpg",
        class: "myImages",
        id: "myImg",
        alt: "Multimedia Festival Event Poster - 2015"
    },

    {
        src: "../Portfolio/images/design/wesfest_poster_2016.jpg",
        class: "myImages",
        id: "myImg",
        alt: "Multimedia Festival Event Poster - 2016"
    },

    {
        src: "../Portfolio/images/design/wesfest_subpromo_2016.jpg",
        class: "myImages",
        id: "myImg",
        alt: "Multimedia Festival Event Poster - 2016"
    },

    {
        src: "../Portfolio/images/design/moulin_louge_poster_2016.jpg",
        class: "myImages",
        id: "myImg",
        alt: "Multimedia Festival Event Poster - 2016"
    },

    {
        src: "../Portfolio/images/design/reconstruction_logo.jpg",
        class: "myImages",
        id: "myImg",
        alt: "REConstruction LLC Logo design"
    },

    {
        src: "../Portfolio/images/design/gattaca_poster.jpg",
        class: "myImages",
        id: "myImg",
        alt: "Experimental Poster"
    },

    {
        src: "../Portfolio/images/design/setmefree_poster_2017.jpg",
        class: "myImages",
        id: "myImg",
        alt: "Multimedia Festival Event Poster - 2017"
    },

    {
        src: "../Portfolio/images/design/feva_modernad_2017.jpg",
        class: "myImages",
        id: "myImg",
        alt: "Two-page Promotional Print Ad - 2017"
    },

    {
        src: "../Portfolio/images/design/feva_prideguide_2018.jpg",
        class: "myImages",
        id: "myImg",
        alt: "Two-page Event Promotional Print Ad - 2018"
    },

    {
        src: "../Portfolio/images/design/chewie_forceyall_tshirt.jpg",
        class: "myImages",
        id: "myImg",
        alt: "Short Film Festival Poster - 2015"
    }
];


// Create image container for each image in images array
// Add image container to design container
for (let i = 0; i < images.length; i++) {
    parent = document.getElementById('design');
    let tempDiv = document.createElement('div');
    tempDiv.className = "imageContainer";
    design.appendChild(tempDiv);

    // Create anchor container for each image
    let imgAnchor = document.createElement("a")
    imgAnchor.href = images[i].src;
    imgAnchor.className = "imgAnchor";
    imgAnchor.src = images[i].src;
    imgAnchor.alt = images[i].alt;
    tempDiv.appendChild(imgAnchor);

    // Embed image from gallery inside anchor container
    let img = document.createElement("img");
    img.src = images[i].src;
    img.alt = images[i].alt;
    img.classList.add(images[i].class);
    img.id = images[i].id;
    imgAnchor.appendChild(img);
}


// Lightbox modals
// Initialize modal elements as variables
let modal = document.getElementById('myModal');
let imgAnchor = document.getElementsByClassName('imgAnchor');
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");

// Loop through anchor containers
// Add click event listener to anchor container to activate modal
for (let i = 0; i < imgAnchor.length; i++) {
    let img = imgAnchor[i];
    img.onclick = function (event) {
        event.preventDefault();
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}

// Close modal by clicking on close graphic element
let span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}

// Close modal with escape key
document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        modal.style.display = "none";
    }
});

// Close modal by clicking anywhere in modal box outside of image
let modalBox = document.getElementsByClassName('modal')[0]

window.onclick = function (event) {
    if (event.target == modalBox) {
        modal.style.display = "none";
    }
}