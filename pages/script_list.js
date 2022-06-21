import makeHeaderFooter from "../headerfooter.js";

makeHeaderFooter('../')

const ligneContainer = document.querySelector('.ligne-container');


for (let k = 1; k <5; k++) {
    const div = document.createElement('div');
    div.classList.add('ligne');
    div.classList.add('list');
    const img = document.createElement('img');
    img.src = `../img/bijoux/bagues/B${k}.jpg`;
    div.appendChild(img);
    ligneContainer.appendChild(div)
}