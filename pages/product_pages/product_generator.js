import makeHeaderFooter from "../../headerfooter.js";

makeHeaderFooter('../../')

const showMore = document.querySelector('.show-more')
showMore.addEventListener('click', revealCharacteristics)

const productName = document.querySelector('h2');
const text = productName.textContent.split('-')
productName.style.display = 'none';


function revealCharacteristics() {
    const more = document.querySelector(".more");
    const btnText = document.querySelector(".show-more");
  
    if (more.classList.contains('hidden')) {
      btnText.innerHTML = "Show less"; 
      more.classList.remove('hidden')
    } else {
      btnText.innerHTML = "Show more info"; 
      more.classList.add('hidden')
    }
  }

function currentDiv(e) {
  const n = e.target.attributes['data-key'].value
  showDivs(+n);
}

function showDivs(n) {
  // image flipbook
  const slideIndex = n
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" selected", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " selected";
}

const demo = Array.from(document.querySelectorAll('.demo'))
demo.forEach(x => x.addEventListener('click', e => currentDiv(e)));

let x = window.matchMedia("(max-width: 700px)")
if (!x.matches){
  document.querySelectorAll('.mySlides').forEach(x => x.addEventListener('click', loupe))
}

function loupe(e){
  const zoomContainer = document.querySelector('.img_zoom')
  const zoomed = document.createElement('img')
  zoomed.src = e.target.src
  zoomed.classList.add('zoomed')
  zoomContainer.appendChild(zoomed)
  zoomed.addEventListener('click', x => zoomed.remove())  
}

const description = document.querySelector('.description')
const material = document.querySelector('.material').textContent
const treatment = document.querySelector('.treatment').textContent
const stone = document.querySelector('.stone').textContent

description.textContent = `${text[1]} en ${material}, avec un traitement ${treatment}, ornée de ${stone}`

const images = Array.from(document.querySelectorAll('.product-images>img'));
const demoImages = Array.from(document.querySelectorAll('.demo'))
const numImages = 3
console.log(images)

for (let k = 0; k<numImages; k++ ){
  images[k].src = `../../img/bijoux/ligne-${text[0]}/${text[1]}-${text[2]}${k+1}.jpg`
  demo[k].src= `../../img/bijoux/ligne-${text[0]}/${text[1]}-${text[2]}${k+1}.jpg`
}

