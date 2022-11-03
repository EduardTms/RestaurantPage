import "../src/css/styles.css";
import createContact from "./sections/contact";
import createFooter from "./sections/footer";
import createHeader from './sections/header';
import createDescription from "./sections/home";
import createMenu from "./sections/menu";
import loadPage from "./load";
const contentContainer = document.querySelector('.content');
const root = document.querySelector("html");

loadPage();

function setActiveLink(newActive) {
    const currentActive = document.getElementsByClassName("active");
    console.log(newActive.textContent);
    if (newActive != currentActive) {
      currentActive[0].classList.toggle("active");
      newActive.classList.toggle("active");
    }
    if((newActive).textContent !== 'Menu') {
        contentContainer.style.height = "100vh";
    }
    else{
        contentContainer.style.height = "100%";
        root.style.height = "100%";
    }
}

const menuLinks = document.querySelectorAll(".headerLink");
Array.from(menuLinks).forEach((link) => {
    link.addEventListener("click", (e) => {
        setActiveLink(e.target);
        switch ((e.target).textContent) {
            case "Menu":
                contentContainer.replaceChild(createMenu(),contentContainer.childNodes[1]);                
                while(contentContainer.childNodes[2]){
                    contentContainer.removeChild(contentContainer.childNodes[2]);
                }                
                break;

            case "Contact":
                contentContainer.append(createFooter());
                contentContainer.replaceChild(createContact(),contentContainer.childNodes[1]);
                break;
            default: 
                contentContainer.replaceChild(createDescription(),contentContainer.childNodes[1]);
                contentContainer.append(createFooter());
                break;
        }
    });
});

