import { createSection } from "./textSection.js";

// Array of elements for Skillset section
const skillsetElements = [
    {
        sectionId: "skillset",
        h2Contents: "SKILLSET & TRAINING",
    },

    {
        subSectionClass2: "skillsetSubSection",
        iconSrc: "../Portfolio/images/illustrations/skills/brain.png",
        iconAlt: "illustration of brain",
        figCap: "PROBLEM-SOLVING",
        text: "I've always enjoyed the process of solving problems, driven by an innate curiosity about how things work. I have been able to debug my way into proficiencies in several coding languages. I am a <b>disciplined fast learner</b>, and I enjoy the challenge and research required to break down a problem into its smaller, solveable components."
    },

    {
        subSectionClass2: "skillsetSubSection",
        iconSrc: "../Portfolio/images/illustrations/skills/laptopbooks2.png",
        iconAlt: "illustration of laptop & books",
        figCap: "CS50X",
        text: "At the end of 2021, I began participation in Harvard University's CS50X course. Thus far, CS50X has provided me with an understanding of fundamentals in computer science, as well as coding proficiency in <b>C & Python</b>, and a familiarity with <b>SQL</b>. This program has been instrumental in instilling & developing the <b>critical thinking</b> and self-driven <b>research skills</b> that are required for success in coding and remaining current in a field that is constantly changing."
    },

    {
        subSectionClass2: "skillsetSubSection",
        iconSrc: "../Portfolio/images/illustrations/skills/develop.png",
        iconAlt: "illustration of coding editor on computer screen",
        figCap: "CODE LOUISVILLE",
        text: "In the spring of 2022, I began participation in the CODE Louisville program on a Front End Web Development track. CODE Louisville is a fantastic program seeking to strengthen our local tech community & industry by offering training, education & mentorship to motivated local residents, all at no cost to its students. This program is currently facilitating the development of my skills in <b>HTML, CSS & Javascript</b>, and I'm looking forward to future training in frameworks & backend functionality which will build on my currently growing skills. I am truly grateful to the program & its mentors for helping me develop this website as my Capstone Project!"
    },

    {
        subSectionClass2: "skillsetSubSection",
        iconSrc: "../Portfolio/images/illustrations/skills/webpicture.png",
        iconAlt: "illustration of computer screen with graphics icon",
        figCap: "DESIGN",
        text: "I enjoy proficiency in numerous visual design applications. I offer an experienced design sensibility, with a particular emphasis on <b>strong layout & UX design</b>, and the capability of merging pleasurable aesthetic experiences with a <b>clear communication of content</b>."
    },

    {
        subSectionClass2: "skillsetSubSection",
        iconSrc: "../Portfolio/images/illustrations/skills/transfer2.png",
        iconAlt: "illustration of person with outward connecting points",
        figCap: "SYNERGY",
        text: "Having worked extensively in customer service and with <b>facilitating team-based work</b>, I truly enjoy creating adaptive & enjoyable <b>user-oriented experiences</b> in fast-paced, rapidly changing, team-based environments."
    },

    {
        subSectionClass2: "skillsetSubSection",
        iconSrc: "../Portfolio/images/illustrations/skills/displaycode.png",
        iconAlt: "illustration of computer monitor with coding",
        figCap: "CODE",
        text1: "",
        linkInsertClass: "gitLink",
        linkInsertHref: "https://github.com/iantherrera",
        linkInsertText: "My GitHub",
        text2: " will continue to expand with content as I create new projects, so please do come back to see what's new!"
    }
];


// Function call to populate skillset text section elements
createSection(skillsetElements);

// Move skill set section to first child position in main
const experienceSection = document.getElementById("skillset");
const main = document.getElementsByTagName("main")[0];

main.prepend(experienceSection);


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
        src: "../Portfolio/images/skillsLogos/flask_logo.svg",
        class: "skillLogo",
        alt: "Flask logo",
        figClass: "skillFig",
        figCapClass: "skillFigCap",
        figCap: "FLASK"
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

    // Create figure caption, insert caption contents from array item, add to figure
    let figCaption = document.createElement("figcaption");
    figCaption.classList.add(skillIcons[i].figCapClass);
    figCaption.innerHTML = skillIcons[i].figCap;
    skillFigure.appendChild(figCaption);
}
