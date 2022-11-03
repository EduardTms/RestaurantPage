export default function createContact() {
    const parentContainer = document.createElement("div");
    parentContainer.classList.add("contact");

    const details = document.createElement("div");
    details.classList.add("contactDetails");

    const contactLogo = document.createElement("div");
    contactLogo.classList.add("contactLogo");
    const logo = document.createElement("img");
    logo.src = "/src/assets/img/odin.png";
    contactLogo.append(logo);

    const address = document.createElement("div");
    address.classList.add("contactAddress");
    const add1 = document.createElement("p");
    add1.textContent = "Old Scandinavia";
    const add2 = document.createElement("p");
    add2.textContent = "Corner of the Sky in Valhalla";
    const add3 = document.createElement("p");
    add3.textContent = "Old Norse";
    address.append(add1,add2,add3);

    const map = document.createElement("div");
    map.classList.add("contactMap");
    const frame = document.createElement("iframe");
    frame.style.height = "400px";
    frame.style.width = "600px";
    frame.src = "https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed";
    map.append(frame);

    details.append(contactLogo,address);
    parentContainer.append(details,map);

    return parentContainer;
}