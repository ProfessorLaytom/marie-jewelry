import makeHeaderFooter from "../headerfooter.js";

makeHeaderFooter('../')
const ligneContainer = document.querySelector('.ligne-container');

const getNumberOfJewelInLigne = (ligne, bijoux) => {
    // returns the number of bijoux for each ligne
    if (ligne == 'bleu') {
        switch (bijoux) {
            case 'bague':
                return 8
            case 'manchette':
                return 0
            case 'collier':
                return 0
            case 'bracelet':
                return 0
        }
    }
    if (ligne == 'blanche') {
        switch (bijoux) {
            case 'bague':
                return 8
            case 'manchette':
                return 0
            case 'collier':
                return 0
            case 'bracelet':
                return 0
        }
    }
    if (ligne == 'argent') {
        switch (bijoux) {
            case 'bague':
                return 6
            case 'manchette':
                return 0
            case 'collier':
                return 0
            case 'bracelet':
                return 0
        }
    }
    if (ligne == 'noire') {
        switch (bijoux) {
            case 'bague':
                return 1
            case 'manchette':
                return 0
            case 'collier':
                return 0
            case 'bracelet':
                return 0
        }
    }
    if (ligne == 'pyrite') {
        switch (bijoux) {
            case 'bague':
                return 5
            case 'manchette':
                return 0
            case 'collier':
                return 0
            case 'bracelet':
                return 0
        }
    }
    if (ligne == 'verte') {
        switch (bijoux) {
            case 'bague':
                return 2
            case 'manchette':
                return 0
            case 'collier':
                return 0
            case 'bracelet':
                return 0
        }
    }
    if (ligne == 'violette') {
        switch (bijoux) {
            case 'bague':
                return 1
            case 'manchette':
                return 0
            case 'collier':
                return 0
            case 'bracelet':
                return 0
        }
    }
}

const pictureCollector = (ligne, bijoux) => {
    //creates cards for each bijoux in a specific ligne.
    const n = getNumberOfJewelInLigne(ligne, bijoux)
    // n is the number of a certain jewel type in the ligne
    const folder = '../img/bijoux/ligne-'+ ligne + '/'
    for (let k = 1; k<=n; k++){
        const a = document.createElement('a')
        a.href = `./product_pages/${ligne}-${bijoux}-${k}.html`
        a.classList.add('product-link')
        const div = document.createElement('div');
        div.classList.add('ligne');
        div.classList.add('list');
        const img = document.createElement('img');
        img.src = folder + bijoux + '-' + k+'1.jpg';
        const legend1 = document.createElement('h3')
        const legend2 = document.createElement('h4')
        legend1.textContent = `ligne ${ligne}`
        legend2.textContent =  `${bijoux} n°${k}`
        div.appendChild(img);
        div.appendChild(legend1)
        div.appendChild(legend2)
        a.appendChild(div)
        ligneContainer.appendChild(a)
    }
}

const lignes = ['bleu', 'blanche', 'argent', 'coloree', 'noire', 'pyrite', 'verte', 'violette'];
//checking for the jewel to display 
const bijouxDiv = document.querySelector('.lignes>h2');
//removes the 'Nos ' and the 's' at the end (plural)
const bijouxName = bijouxDiv.textContent.replace('Nos ', '').slice(0, -1);
console.log(bijouxName)
//creates the cards for a particular bijoux type in each ligne.
lignes.forEach(x => pictureCollector(x, bijouxName))
console.log('ok')