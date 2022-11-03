import "../src/css/styles.css";
import createFooter from "./sections/footer";
import createHeader from './sections/header';
import createDescription from "./sections/home";

const contentContainer = document.querySelector('.content');
contentContainer.append(createHeader());
contentContainer.append(createDescription());
contentContainer.append(createFooter());