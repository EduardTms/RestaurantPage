import "../src/css/styles.css";
import createFooter from "./sections/footer";
import createHeader from './sections/header';
import createDescription from "./sections/home";
import createMenu from "./sections/menu";

const contentContainer = document.querySelector('.content');
contentContainer.append(createHeader());
contentContainer.append(createMenu());
contentContainer.style.height = "100%";
contentContainer.append(createFooter());
const foot = document.querySelector(".footer");
foot.style.position = "relative";