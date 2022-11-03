export default function createHeader() {
    // -----Header-----
    const header = document.createElement("div");
    header.classList.add("header");

    // -----Logo/Name Container-----
    const logoContainer = document.createElement("div");
    logoContainer.classList.add("logo");

    const odinPicture = document.createElement("img");
    odinPicture.src = "../src/assets/img/odin.png";
    odinPicture.setAttribute("id", "odinLogo");
    const restaurantName = document.createElement("p");
    restaurantName.setAttribute("id", "nameLogo");
    restaurantName.textContent = "Odin's Cooking";

    // -----Links Container-----
    const links = document.createElement("div");
    links.classList.add("links");

    const homeLink = document.createElement("a");
    homeLink.classList.add("home");
    homeLink.textContent = "Home";
    homeLink.setAttribute("href", "#");
    homeLink.classList.add("active");
    const menuLink = document.createElement("a");
    menuLink.classList.add('ourMenu');
    menuLink.setAttribute("href", "#");
    menuLink.textContent = "Menu";
    const contactLink = document.createElement("a");
    contactLink.classList.add('contact');
    contactLink.setAttribute("href", "#");
    contactLink.textContent = "Contact";

    logoContainer.append(odinPicture,restaurantName);
    links.append(homeLink,menuLink,contactLink);
    header.append(logoContainer,links);

    return header;
}