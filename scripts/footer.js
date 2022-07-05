// Generate footer in html //
// Store current year
let currentYear = new Date().getFullYear();

// Create footer element
let foot = document.createElement("FOOTER");

// Set id for footer & add to body   
foot.setAttribute("id", "myFooter");
document.body.appendChild(foot);

// Create h4 to contain footer contents & add to footer element
let footContainer = document.createElement("h4");
document.getElementById("myFooter").appendChild(footContainer);

// Set id for footer contents container
footContainer.setAttribute("id", "footContainer");

// Insert html into footer contents container
document.getElementById("footContainer").innerHTML = "&copy; Copyright " + currentYear + " Ian Herrera";