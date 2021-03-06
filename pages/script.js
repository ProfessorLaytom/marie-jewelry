import makeHeaderFooter from "../headerfooter.js";

makeHeaderFooter('../')

function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 80;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
        }
        
}

window.addEventListener("scroll", reveal);
