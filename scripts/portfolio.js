// Array of Skill Icon images and attributes
const skillIcons = [
    {
        src: "../Portfolio/images/skillsLogos/HTML5_Badge.svg",
        class: "skillLogo",
        alt: "HTML5 logo",
        figClass: "skillFig",
        figCapClass: "skillFigCap",
        figCap: "HTML"
    },

    {
        src: "../Portfolio/images/skillsLogos/CSS3_logo.svg",
        class: "skillLogo",
        alt: "CSS3 logo",
        figClass: "skillFig",
        figCapClass: "skillFigCap",
        figCap: "CSS"
    },

    {
        src: "../Portfolio/images/skillsLogos/javascript_logo.svg",
        class: "skillLogo",
        alt: "Javascript logo",
        figClass: "skillFig",
        figCapClass: "skillFigCap",
        figCap: "JAVASCRIPT"
    },

    {
        src: "../Portfolio/images/skillsLogos/C_Programming_Language_logo.svg",
        class: "skillLogo",
        alt: "C programming language logo",
        figClass: "skillFig",
        figCapClass: "skillFigCap",
        figCap: "C"
    },

    {
        src: "../Portfolio/images/skillsLogos/Python_logo.svg",
        class: "skillLogo",
        alt: "Python programming language logo",
        figClass: "skillFig",
        figCapClass: "skillFigCap",
        figCap: "PYTHON"
    },

    {
        src: "../Portfolio/images/skillsLogos/sql_logo.svg",
        class: "skillLogo",
        alt: "SQL logo",
        figClass: "skillFig",
        figCapClass: "skillFigCap",
        figCap: "SQL"
    },

    {
        src: "../Portfolio/images/skillsLogos/Adobe_Creative_Cloud_rainbow_icon.svg",
        class: "skillLogo",
        alt: "Adobe Creative Cloud logo",
        figClass: "skillFig",
        figCapClass: "skillFigCap",
        figCap: "ADOBE CC"
    }
];


// Populate elements in Skill List container
// Create unordered list, set id, add to skill list section
const skillList = document.createElement("ul");
skillList.setAttribute("id", "skillList");
document.getElementById("skillListSection").appendChild(skillList);


// Loop through array of icon images & their attributes
// Create figure, set class, add to unordered list
for (let i = 0; i < skillIcons.length; i++) {
    let skillFigure = document.createElement("figure");
    skillFigure.classList.add(skillIcons[i].figClass);
    document.getElementById("skillList").appendChild(skillFigure);

    // Create img element, set attributes from array item, add to figure
    let iconImage = document.createElement("img");
    iconImage.classList.add(skillIcons[i].class);
    iconImage.src = skillIcons[i].src;
    iconImage.alt = skillIcons[i].alt;
    skillFigure.appendChild(iconImage);

    // Create figcaption, insert caption contents from array item, add to figure
    const skillFig = document.getElementsByClassName("skillFig")

    let figCaption = document.createElement("figcaption");
    figCaption.classList.add(skillIcons[i].figCapClass);
    figCaption.innerHTML = skillIcons[i].figCap;
    skillFig[i].appendChild(figCaption);
}