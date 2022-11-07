import makeHeaderFooter from "../headerfooter.js";

const nombreImages = 7; 

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

const images = document.querySelector('.images')

for (let k = 1; k <= nombreImages; k++ ){
    const img = document.createElement('img')
    img.classList.add('gallery-img')
    img.src = `../img/gallery/${k}.png`
    images.appendChild(img)
}
window.addEventListener("scroll", reveal);








