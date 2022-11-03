export default function createDescription() {
    const parentContainer = document.createElement("div");
    parentContainer.classList.add("descriptionContainer");

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("descriptionImg");

    const descriptionImg = document.createElement("img");
    descriptionImg.src = "/src/assets/img/descriptionImg.png";
    descriptionImg.alt = "OdinOnThrone";

    const textContainer = document.createElement("div");
    textContainer.classList.add("descriptionText");
    textContainer.textContent = `Odin's opened on Viking Age Alley in 9th century CE. Chef / Owner Odin
    began baking pies and selling them to restaurants and his neighbors
    out of a small kitchen at the corner of Sky in Valhalla. Today,
    Valhalla's beloved restaurant and pie shop celebrates ~ years of
    classic, made from scratch Divine cooking.`;

    imgContainer.append(descriptionImg);
    parentContainer.append(imgContainer,textContainer);

    return parentContainer;
}