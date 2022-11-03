import "../src/css/styles.css";
import createHeader from './sections/header';

const contentContainer = document.querySelector('.content');
contentContainer.append(createHeader());