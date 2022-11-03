import createHeader from "./sections/header";
import createDescription from "./sections/home";

export default function loadPage() {
    let contentContainer = document.querySelector(".content");
    contentContainer.append(createHeader(),createDescription());
    return contentContainer;
}