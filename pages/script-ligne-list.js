import makeHeaderFooter from "../headerfooter.js";
import products from './product_pages/products.js';


makeHeaderFooter('../')
const ligneContainer = document.querySelector('.ligne-container');

const getNumberOfJewelInLigne = (ligne, bijoux) => {
    // returns the number of bijoux for each ligne
    if (ligne == 'altair') {
        switch (bijoux) {
            case 'bague':
                return 7
            case 'manchette':
                return 3
            case 'collier':
                return 1
            case 'bracelet':
                return 0
        }
    }
    if (ligne == 'antares') {
        switch (bijoux) {
            case 'bague':
                return 1
            case 'manchette':
                return 3
            case 'collier':
                return 1
            case 'bracelet':
                return 0
        }
    }
    if (ligne == 'adama') {
        switch (bijoux) {
            case 'bague':
                return 4
            case 'manchette':
                return 4
            case 'collier':
                return 7
            case 'bracelet':
                return 0
        }
    }
    if (ligne == 'bellatrix') {
        switch (bijoux) {
            case 'bague':
                return 11
            case 'manchette':
                return 2
            case 'collier':
                return 3
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
        a.href = `product_pages/${ligne}-${bijoux}-${k}.html`
        a.classList.add('product-link')
        const div = document.createElement('div');
        div.classList.add('ligne');
        div.classList.add('list');
        const img = document.createElement('img');
        img.src = folder + bijoux + '-' + k+'1.jpg';
        let name = ''
        for (let j = 0; j <= products.length-1;j++){
            console.log(j)
            if (products[j]['id'] == `${ligne}-${bijoux}-${k}`){
                name = products[j]['name']
            }
        }
        const legend1 = document.createElement('h3')
        legend1.textContent =  name
        div.appendChild(img);
        div.appendChild(legend1)
        a.appendChild(div)
        ligneContainer.appendChild(a)
    }
}

const bijoux = ['collier', 'bague', 'manchette'];
//checking for the jewel to display 
const ligneDiv = document.querySelector('.lignes>h2');
//removes the 'Nos ' and the 's' at the end (plural)
const ligneName = ligneDiv.textContent.replace('Ligne ', '').toLowerCase().replace('ï', 'i');
console.log(ligneName)
//creates the cards for a particular bijoux type in each ligne.
bijoux.forEach(x => pictureCollector(ligneName, x))
