// Function to populate text sections and element contents from array
export function createSection(elementArray) {

    const main = document.querySelector("main");

    // Create text section, set attributes, add to main
    const textSection = document.createElement("section");
    textSection.classList.add("textSection");
    textSection.setAttribute("id", elementArray[0].sectionId);
    main.appendChild(textSection);

    // Create h2 element, set attribute, add contents, add to text section
    const textSectionHeader = document.createElement("h2");
    textSectionHeader.classList.add("title");
    textSectionHeader.innerHTML = elementArray[0].h2Contents;
    textSection.appendChild(textSectionHeader);

    // Create text container, set attribute, add to text section
    const textContainer = document.createElement("div");
    textContainer.classList.add("textContainer");
    textSection.appendChild(textContainer);

    // Loop through elements array
    // Create text subsection div, add to text container
    for (let i = 1; i < elementArray.length; i++) {
        let subSectionContainer = document.createElement("div");
        subSectionContainer.classList.add("textSubSection");
        subSectionContainer.classList.add(elementArray[i].subSectionClass2);
        textContainer.appendChild(subSectionContainer);

        // Create figure container, add to text subsection div
        let iconContainer = document.createElement("figure");
        iconContainer.classList.add("iconContainer");
        subSectionContainer.appendChild(iconContainer);

        // Create embedded image with attributes, add to figure container
        let icon = document.createElement("img");
        icon.classList.add("textIcon");
        icon.src = elementArray[i].iconSrc;
        icon.alt = elementArray[i].iconAlt;
        iconContainer.appendChild(icon);

        // Create figure caption, insert caption contents from array item, add to figure
        let figCaption = document.createElement("figcaption");
        figCaption.classList.add("textIconFigCap");
        figCaption.innerHTML = elementArray[i].figCap;
        iconContainer.appendChild(figCaption);

        // Create paragraph container, insert contents, add to text subsection div
        let sectionText = document.createElement("p");
        subSectionContainer.appendChild(sectionText);

        if ("text" in elementArray[i]) {
            sectionText.innerHTML = elementArray[i].text;
        }

        // Check if array element contains alt text key for contents that include anchor link
        // Else add text contents to p container
        if ("text1" in elementArray[i]) {
            // Add initial text before link to p container
            sectionText.innerHTML = elementArray[i].text1;

            // Create anchor element, set attributes, add to p container
            let linkInsert = document.createElement("a");
            linkInsert.classList.add(elementArray[i].linkInsertClass);
            linkInsert.href = elementArray[i].linkInsertHref;
            linkInsert.innerHTML = elementArray[i].linkInsertText;
            sectionText.appendChild(linkInsert);

            // Add remaining text content to p container
            sectionText.innerHTML += elementArray[i].text2;
        }
    }

    console.log("script loaded")
};