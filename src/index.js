import "../src/css/styles.css";
import createHeader from './sections/header';
import createDescription from "./sections/home";

const contentContainer = document.querySelector('.content');
contentContainer.append(createHeader());
contentContainer.append(createDescription());