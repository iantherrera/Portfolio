import { createSection } from "./textSection.js";

// Array of elements for About section
const aboutElements = [
    {
        sectionId: "about",
        h2Contents: "ABOUT",
    },

    {
        subSectionClass2: "aboutSubSection",
        iconSrc: "../Portfolio/images/illustrations/about/hillsun.png",
        iconAlt: "illustration of hill with sun rising",
        figCap: "BIO",
        text: "I was born in the Philippines and raised primarily in the beautiful state of Kentucky. My amazing partner, Ashley, & I share our lives with two beautiful children, Elijah & June."
    },

    {
        subSectionClass2: "aboutSubSection",
        iconSrc: "../Portfolio/images/illustrations/about/house.png",
        iconAlt: "illustration of home",
        figCap: "HOME",
        text: "We've enjoyed establishing our family's roots in the city of Louisville, and we've come to enjoy its diverse and cosmopolitan aspects. From exploring its insanely good local dining scene to enjoying its solid pull of entertainment options, we've truly come to love this town."
    },

    {
        subSectionClass2: "aboutSubSection",
        iconSrc: "../Portfolio/images/illustrations/about/tentriver.png",
        iconAlt: "illustration of tent by river",
        figCap: "HAPPY PLACE",
        text: "Living in Louisville, I've been grateful for easy access to a state filled with seeemingly endless natural beauty. The opportunity to hike and explore, with my family, is truly one of my greatest joys. Our family's ongoing project to visit every waterfall that we can find in Kentucky has been a gift unto itself."
    },

    {
        subSectionClass2: "aboutSubSection",
        iconSrc: "../Portfolio/images/illustrations/about/openbook.png",
        iconAlt: "illustration of open book",
        figCap: "EDUCATION",
        text: "With a technical aptitude and affinity for math & science, I began my college studies in Engineering at Purdue University. However, as a creative soul, with a lifelong love of drawing & illustration, I pursued my passion into the art program at the University of Kentucky and later at the University of Louisville, where I received formal training in Art Studio with a focus in Graphic Design & Illustration."
    },

    {
        subSectionClass2: "aboutSubSection",
        iconSrc: "../Portfolio/images/illustrations/about/restaurant1.png",
        iconAlt: "illustration of plate with fork and knife ",
        figCap: "HOSPITALITY CAREER",
        text: "I initially worked in the hospitality industry as a means of support, but it soon developed into a career. Working with food satisfied my creative urges as well as being a fulfilling environment for a naturally social person."
    },

    {
        subSectionClass2: "aboutSubSection",
        iconSrc: "../Portfolio/images/illustrations/about/light.png",
        iconAlt: "illustration of lightbulb",
        figCap: "TECH ASPIRATIONS",
        text: "Although satisfied with achieving my ambitions within the hospitality industry, I felt a calling to my original vocational pursuits. At the end of 2021, I heeded the call by focusing my efforts toward a transition into the tech industry, in hopes of fulfilling my natural talents & technical skills, and establishing myself in a satisfying career in development."
    },

    {
        subSectionClass2: "aboutSubSection",
        iconSrc: "../Portfolio/images/illustrations/about/deal.png",
        iconAlt: "illustration of handshake",
        figCap: "CONTACT ME",
        text1: "Thank you for spending a bit of your time getting to know a little about me. Feel free to send me a message on my ",
        linkInsertClass: "navLinks",
        linkInsertHref: "connect.html",
        linkInsertText: "Connect",
        text2: " page, if you'd like to know more."
    }
];


// Array of elements for Experience section
const experienceElements = [
    {
        sectionId: "experience",
        h2Contents: "EXPERIENCE",
    },

    {
        subSectionClass2: "experienceSubSection",
        iconSrc: "../Portfolio/images/illustrations/experience/designtools.png",
        iconAlt: "illustration of pen & paintbrush",
        figCap: "VISUAL ARTS",
        text: "My love for the visual arts has always been a constant passion. I've been happy to pursue freelance graphic design & illustration, throughout my working life."
    },

    {
        subSectionClass2: "experienceSubSection",
        iconSrc: "../Portfolio/images/illustrations/experience/teamsales.png",
        iconAlt: "illustration of team",
        figCap: "HOSPITALITY",
        text: "In the hospitality industry, I've worked in almost every type of restaurant from short-order, in my humble beginnings, to fine dining, where I thrived at the peak of my skills as a captain on the dining room floor. My experience carried me, most recently, into management roles, where I have enjoyed applying my expertise into coordinating staffing & operations."
    },

    {
        subSectionClass2: "experienceSubSection",
        iconSrc: "../Portfolio/images/illustrations/experience/microprocessor.png",
        iconAlt: "illustration of microprocessor",
        figCap: "TECH SUPPORT",
        text: "Early in 2022, I made the transition into the tech industry, and I'm currently serving in a technical support role for maintaining point-of-sale systems offered by Global Payments in Jeffersonville, Indiana. I've worked as a manager with many similar systems, and it's a been a particular pleasure to provide assistance to managers, whom aren't able to provide satisfying customer service, due to a technical problem that is out of their hands. Technology should be a solution, not a problem, and it's particularly fulfilling to prove that to be true."
    },

    {
        subSectionClass2: "experienceSubSection",
        iconSrc: "../Portfolio/images/illustrations/experience/connector.png",
        iconAlt: "illustration of technology connecting",
        figCap: "PROGRESSION",
        text: "I'm excited to bring a strong foundation in customer service and effective team-based dynamics into a technologically-driven environment. I'm passionate about utilizing my creative talent in the tech industry and look forward to continuing to hone and broaden my skills."
    },

    {
        subSectionClass2: "experienceSubSection",
        iconSrc: "../Portfolio/images/illustrations/experience/deal.png",
        iconAlt: "illustration of handshake",
        figCap: "CONTACT ME",
        text1: "If you'd like to know more about what experience I could bring to your organization, please reach out to me on my ",
        linkInsertClass: "navLinks",
        linkInsertHref: "connect.html",
        linkInsertText: "Connect",
        text2: " page."
    }
];

// Call function to create About text section
createSection(aboutElements);

createSection(experienceElements);