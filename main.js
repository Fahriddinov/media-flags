let body = document.querySelector("body");
let header = document.querySelector("header");
let main = document.querySelector(".main-section");
let footer = document.querySelector(".footer");
let darkMode = document.querySelector(".header-btn");

darkMode.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    header.classList.toggle("dark-mode");
    main.classList.toggle("dark-mode2");
    footer.classList.toggle("dark-mode2");
})

let search = document.querySelector(".main-input");