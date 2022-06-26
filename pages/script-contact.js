import makeHeaderFooter from "../headerfooter.js";

makeHeaderFooter('../')

let submitted = false;


const gform = document.querySelector('#gform');
const iframe = document.querySelector('iframe')
gform.onsubmit(function(e) {submitted=true})
iframe.onload(function(e) {if(submitted){}})

gform.addEventListener('submit', function(e){
    gform.remove()
    const formContainer = document.querySelector('.form-container') 
    const h3 = document.createElement('h3')
    h3.textContent = 'Thank you ! Your message has been sent !'
    formContainer.appendChild(h3)
})