// Generate header in html


// Create header element
// Set id for header & add to body  
const head = document.createElement("HEADER");

head.setAttribute("id", "myHeader");
document.body.prepend(head);


// Create hamburger menu
// Create div to contain hamburger menu, set id attribute & add to header
const hamContainer = document.createElement("div");
hamContainer.setAttribute("id", "hamburgerMenu");
document.getElementById("myHeader").appendChild(hamContainer);

// Insert spans into hamburger menu container
for (var i = 0; i < 4; i++) {
    var hamSpan = document.createElement("SPAN");
    document.getElementById("hamburgerMenu").appendChild(hamSpan);
}


// Create name in header
// Create name container, set id attribute & add to header
const nameContainer = document.createElement("div");
nameContainer.setAttribute("id", "nameContainer");
document.getElementById("myHeader").appendChild(nameContainer);

// Create h1 for name contents, set id attribute & add to name container
const nameContents = document.createElement("h1");
nameContents.setAttribute("id", "name");
document.getElementById("nameContainer").appendChild(nameContents);

// Add contents to h1 container
document.getElementById("name").innerHTML = "IAN HERRERA";


// Create nav menu
// Create nav section
const navContainer = document.createElement("NAV");

// Set id for nav & add to body   
navContainer.setAttribute("id", "nav");
document.getElementById("myHeader").appendChild(navContainer);

// Add unordered list container to nav
const listContainer = document.createElement("ul");

// Set id for list container & add to nav container
listContainer.setAttribute("id", "navList")
document.getElementById("nav").appendChild(listContainer);

// Add list elements to list container
for (var i = 0; i < 3; i++) {
    var navListItem = document.createElement("li");
    document.getElementById("navList").appendChild(navListItem);
}

// Add anchor element to each list element
var listItemContainers = document.getElementById("navList").childNodes;
for (var i = 0; i < listItemContainers.length; i++) {
    var navAnchor = document.createElement("a");
    navAnchor.setAttribute("class", "navLinks");
    listItemContainers[i].appendChild(navAnchor);
}

// Add href & content to each anchor for Page links
var navLinks = document.querySelectorAll(".navLinks");
navLinks[0].href = "index.html";
navLinks[0].innerHTML = "About";
navLinks[1].href = "portfolio.html";
navLinks[1].innerHTML = "Portfolio";
navLinks[2].href = "connect.html";
navLinks[2].innerHTML = "Connect";