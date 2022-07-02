// Design gallery array of images and attributes
var images = [
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


// Create div for each design image in images array
        var tempDiv;
        
        for(var i = 0; i < images.length; i++) {
            parent = document.getElementById('design');
            tempDiv = document.createElement('div');
            tempDiv.className = "imageContainer";
            design.appendChild(tempDiv);
        };
        
// Create img element for each div and set attributes for each img
        var img;

        for(var i = 0; i < images.length; i++) {
            parent = document.getElementsByClassName('imageContainer')[i];
            img = document.createElement("img");
            img.src = images[i].src;
            img.alt = images[i].alt;
            img.classList.add(images[i].class);
            img.id = images[i].id;
            parent.appendChild(img);
        };