
//Created img element for setting part of logo, which is located at na section

import logo from "../assets/Elegant-Element-logo.png";
const img = document.createElement("img");
img.src = logo;

const paragraph = document.querySelector(".logo a");
paragraph.prepend(img);

//Drop-down menu

const burgerMenu = document.querySelector(".burger__menu");
const open = document.querySelector(".burger__menu .open");
const close = document.querySelector(".burger__menu .close");
const mainMenu = document.querySelector(".nav__menu");

burgerMenu.addEventListener("click", () => {
    if(burgerMenu.classList.contains(".active")) {
        burgerMenu.classList.toggle(".active");
        mainMenu.classList.toggle(".active");
        open.style.display = "block";
        close.style.display = "none";
        mainMenu.style.cssText = `
        left: -1000px;
        `
    } else {
        burgerMenu.classList.toggle(".active");
        mainMenu.classList.toggle(".active");
        close.style.display = "block";
        open.style.display = "none";
        mainMenu.style.cssText = `
        left: 0;
        `
    }
})

//Drop down menu end

//Header img start

// import imgHeaderSrc from "./assets/header-img.jpg";
// const imgHeader = document.createElement("img");
// imgHeader.src = imgHeaderSrc;
// const header = document.querySelector(".header .header__img");

// header.prepend(imgHeader);
