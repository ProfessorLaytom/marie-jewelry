import makeHeaderFooter from "../headerfooter.js";

makeHeaderFooter('../')

let submitted = false;


const gform = document.querySelector('#form');

gform.addEventListener('submit', function(e){
    gform.remove()
    const formContainer = document.querySelector('.form-container') 
    const h3 = document.createElement('h3')
    h3.textContent = 'Thank you ! Your message has been sent !'
    formContainer.appendChild(h3)
})