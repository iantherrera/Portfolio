// Array of elements for About section
const aboutElements = [
    {
        subSectionClass1: "textSubSection",
        subSectionClass2: "aboutSubSection",
        iconContainerClass: "iconContainer",
        iconClass: "textIcon",
        iconSrc: "../Portfolio/images/illustrations/about/hillsun.png",
        iconAlt: "illustration of hill with sun rising",
        text: "I was born in the Philippines and raised primarily in the beautiful state of Kentucky. My amazing partner, Ashley, & I share our lives with two beautiful children, Elijah & June."
    },

    {
        subSectionClass1: "textSubSection",
        subSectionClass2: "aboutSubSection",
        iconContainerClass: "iconContainer",
        iconClass: "textIcon",
        iconSrc: "../Portfolio/images/illustrations/about/house.png",
        iconAlt: "illustration of home",
        text: "We've enjoyed establishing our family's roots in the city of Louisville, and we've come to enjoy its diverse and cosmopolitan aspects. From exploring its insanely good local dining scene to enjoying its solid pull of entertainment options, we've truly come to love this town."
    },

    {
        subSectionClass1: "textSubSection",
        subSectionClass2: "aboutSubSection",
        iconContainerClass: "iconContainer",
        iconClass: "textIcon",
        iconSrc: "../Portfolio/images/illustrations/about/tentriver.png",
        iconAlt: "illustration of tent by river",
        text: "Living in Louisville, I've been grateful for easy access to a state filled with seeemingly endless natural beauty. The opportunity to hike and explore, with my family, is truly one of my greatest joys. Our family's ongoing project to visit every waterfall that we can find in Kentucky has been a gift unto itself."
    },

    {
        subSectionClass1: "textSubSection",
        subSectionClass2: "aboutSubSection",
        iconContainerClass: "iconContainer",
        iconClass: "textIcon",
        iconSrc: "../Portfolio/images/illustrations/about/openbook.png",
        iconAlt: "illustration of open book",
        text: "With a technical aptitude and affinity for math & science, I began my college studies in Engineering at Purdue University. However, as a creative soul, with a lifelong love of drawing & illustration, I pursued my passion into the art program at the University of Kentucky and later at the University of Louisville, where I received formal training in Art Studio with a focus in Graphic Design & Illustration. I also minored in Art History to satisfy my interest in providing context to artistic styles & aesthetic sensibilities."
    },

    {
        subSectionClass1: "textSubSection",
        subSectionClass2: "aboutSubSection",
        iconContainerClass: "iconContainer",
        iconClass: "textIcon",
        iconSrc: "../Portfolio/images/illustrations/about/restaurant1.png",
        iconAlt: "illustration of plate with fork and knife ",
        text: "I initially worked in the hospitality industry as a means of support, but it soon developed into a career. Working with food satisfied my creative urges as well as being a fulfilling environment for a naturally social person."
    },

    {
        subSectionClass1: "textSubSection",
        subSectionClass2: "aboutSubSection",
        iconContainerClass: "iconContainer",
        iconClass: "textIcon",
        iconSrc: "../Portfolio/images/illustrations/about/light.png",
        iconAlt: "illustration of lightbulb",
        text: "Although satisfied with achieving my ambitions within the hospitality industry, I felt a calling to my original vocational pursuits. At the end of 2021, I heeded the call by focusing my efforts toward a transition into the tech industry, in hopes of fulfilling my natural talents & technical skills, and establishing myself in a satisfying career in development."
    },

    {
        subSectionClass1: "textSubSection",
        subSectionClass2: "aboutSubSection",
        iconContainerClass: "iconContainer",
        iconClass: "textIcon",
        iconSrc: "../Portfolio/images/illustrations/about/deal.png",
        iconAlt: "illustration of handshake",
        text1: "Thank you for spending a bit of your time getting to know a little about me. Feel free to send me a message on my ",
        linkInsertClass: "navLinks",
        linkInsertHref: "connect.html",
        linkInsertText: "Connect",
        text2: " page, if you'd like to know more."
    }
];

// Populate elements in About section
// Create About section main div, set class, add to About section
const aboutSection = document.getElementById("about");

const mainAboutDiv = document.createElement("div");
mainAboutDiv.classList.add("textContainer");
mainAboutDiv.setAttribute("id", "aboutTextContainer");
aboutSection.appendChild(mainAboutDiv);

// Create header container, add to About section main div
const aboutHeaderContainer = document.createElement("h3");
aboutHeaderContainer.setAttribute("id", "aboutTextHeaderContainer");
mainAboutDiv.appendChild(aboutHeaderContainer);

// Loop through elements array for About section
// Create About text subsection div, add to header container
for (let i = 0; i < aboutElements.length; i++) {
    let subSectionContainer = document.createElement("div");
    subSectionContainer.classList.add(aboutElements[i].subSectionClass1);
    subSectionContainer.classList.add(aboutElements[i].subSectionClass2);
    aboutHeaderContainer.appendChild(subSectionContainer);

    // Create image div container, add to About text subsection div
    let iconContainer = document.createElement("div");
    iconContainer.classList.add(aboutElements[i].iconContainerClass);
    subSectionContainer.appendChild(iconContainer);

    // Embed image with attributes in image div container
    let icon = document.createElement("img");
    icon.classList.add(aboutElements[i].iconClass);
    icon.src = aboutElements[i].iconSrc;
    icon.alt = aboutElements[i].iconAlt;
    iconContainer.appendChild(icon);

    // Create paragraph container, insert contents, add to About text subsection div
    let sectionText = document.createElement("p");
    subSectionContainer.appendChild(sectionText);

    // Check if array element only contains text key, add text contents to p container
    if ("text" in aboutElements[i]) {
        sectionText.innerHTML = aboutElements[i].text;
    }

    // Check if array element contains alt text key for contents that includes anchor link
    if ("text1" in aboutElements[i]) {
        // Add initial text before link to p container
        sectionText.innerHTML = aboutElements[i].text1;

        // Create anchor element, set attributes, add to p container
        let linkInsert = document.createElement("a");
        linkInsert.classList.add(aboutElements[i].linkInsertClass);
        linkInsert.href = aboutElements[i].linkInsertHref;
        linkInsert.innerHTML = aboutElements[i].linkInsertText;
        sectionText.appendChild(linkInsert);

        // Add remaining text content to p container
        sectionText.innerHTML += aboutElements[i].text2;
    }
}