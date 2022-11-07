import makeHeaderFooter from "../headerfooter.js";

makeHeaderFooter('../')

let submitted = false;


const gform = document.querySelector('#form');
const vanish = document.getElementById('dissapear1');
const vanish2 = document.getElementById('dissapear2');

gform.addEventListener('submit', function(e){
    gform.remove();
    vanish.remove();
    vanish2.remove();
    const formContainer = document.querySelector('.form-container') 
    const h3 = document.createElement('h3')
    h3.textContent = 'Thank you ! Your message has been sent !'
    formContainer.appendChild(h3)
})