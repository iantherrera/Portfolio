# Portfolio
Website Capstone Project for CODE Louisville & personal professional portfolio page

*by Ian Herrera*

[Portfolio Website](https://iantherrera.github.io/Portfolio/)

[Project notes & wireframes](https://drive.google.com/file/d/1ZWJ9nSAYxI09EU6xMQwX4jmH5hyXAI-z/view?usp=sharing)

# Project Overview:

Responsive portfolio website will consist of 3 pages: 

- “About” page contents:
  - Headshot photo
  - Biographical information
  - Experience information

- “Portfolio” page contents:
  - Skillset information
  - Software & language proficiencies
  - Link to GitHub for future & current coding projects
  - Design portfolio

- “Connect” page contents:
  - Fields for collecting
    - Name
    - Email
    - Message
  - Submit button
  - Captcha or similar security for bots

# Capstone Project Requirement Goals:

A majority of possible project requirements were met. As content progressed, I was able to incorporate more criteria, while increasing the scope of this project.

- The project minimum of 2 media queries was exceeded by this site, utilizing both Flexbox & Grid. Site was designed with "mobile first" principles, and it's design dynamically reflects these principles as media sizes change. Media sizes were considered up to 4k resolution screens.

## CSS FEATURES INCLUDED:
- A navigation menu that expands and collapses properly at desktop and mobile sizes, such as by switching between vertical and horizontal styles, or is opened and closed by clicking the “hamburger” icon
- Use Flexbox or CSS Grid to organize content areas based on mobile or desktop views
- Use “:nth-child” or “nth-of-type” to style a series of elements on your page
  - Utilized “:nth-child” for transformation of hamburger menu spans and also for styling first and last paragraphs in text sections
- Create your own original CSS animation
  - Customized transformation animations for hamburger menu spans and utilized CSS animations for sliding elements into page on loading

## JAVASCRIPT FEATURES INCLUDED:
- Create and populate a JavaScript array with one or more values and display the contents of some or all of the array on your page
  - Utilized an array for populating gallery image container, nav links, and text sections on About and Portfolio pages
- Create a Javascript loop that dynamically displays HTML on your page
  - Generated header on every page, gallery display of images, and text sections with loops
- Create at least 3 variables (var, const, or let), set their values in JavaScript, and display the values somewhere on your page
  - Created multiple variables and objects, assigned attributes or properties as values, and many are visually represented in the display
- Show/hide one or more content areas or elements on your site through clicking a button or some other user interaction
  - Utilized click and key events to create multiple interactions for hamburger menu and lightbox, both in the gallery and on the modal

NOTE: As proof of concept and an opportunity to exercise my skills, I generated a majority of the document elements with Javascript. 
I relied on vanilla javascript to focus on attaining maximum proficiency with core language.
I also experimented with reaching similar results for similar problems with different solutions and methodology.

## THINGS TO DO:
- Address accessibility issues
- Replace JotForm with my own backend functionality for form collection
