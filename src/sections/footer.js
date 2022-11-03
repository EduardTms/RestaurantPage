
export default function createFooter() {
    const footerContainer = document.createElement("div");
    footerContainer.classList.add("footer");

    const footerText = document.createElement("div");
    footerText.classList.add("footerText");
    footerText.textContent = "Copyright © 2022 EduardTms";

    const gitIcon = document.createElement("a");
    gitIcon.setAttribute("href", "https://github.com/EduardTms");
    gitIcon.classList.add("fa");
    gitIcon.classList.add("fa-github");

    footerText.append(gitIcon);
    footerContainer.append(footerText);

    return footerContainer;
}