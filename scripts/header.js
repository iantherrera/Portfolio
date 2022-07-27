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
for (let i = 0; i < 4; i++) {
    let hamSpan = document.createElement("SPAN");
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


// Create subtitle in header
// Create h2 for subtitle contents, set id attribute & add to name container
const subtitleContents = document.createElement("h2");
subtitleContents.setAttribute("id", "subtitle");
document.getElementById("nameContainer").appendChild(subtitleContents);

// Add contents to h2 container
document.getElementById("subtitle").innerHTML = "// WEB DEVELOPER //"


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
for (let i = 0; i < 3; i++) {
    let navListItem = document.createElement("li");
    document.getElementById("navList").appendChild(navListItem);
}

// Add anchor element to each list element
let listItemContainers = document.getElementById("navList").childNodes;
for (let i = 0; i < listItemContainers.length; i++) {
    let navAnchor = document.createElement("a");
    navAnchor.setAttribute("class", "navLinks");
    listItemContainers[i].appendChild(navAnchor);
}


// Create Nav links
// Array of Nav links & attributes
const navLinkContents = [
    {
        href: "index.html",
        innerHTML: "About"
    },

    {
        href: "portfolio.html",
        innerHTML: "Portfolio"
    },

    {
        href: "connect.html",
        innerHTML: "Connect"
    }
];

// Function to add attributes & content to Nav link anchor tags
let setNavLink = (linkArray) => {
    let navLinks = document.querySelectorAll(".navLinks");
    linkArray.forEach((element, index) => {
        navLinks[index].href = element.href;
        navLinks[index].innerHTML = element.innerHTML;
    });
};

// Call on function to generate Nav Menu links
setNavLink(navLinkContents);