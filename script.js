function toggleMenu() {
    // target two elements
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    // whenever clicked, either add or remove open class
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}