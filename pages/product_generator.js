import makeHeaderFooter from "../headerfooter.js";

makeHeaderFooter('')

const showMore = document.querySelector('.show-more')
showMore.addEventListener('click', revealCharacteristics)

function revealCharacteristics() {
    const more = document.querySelector(".more");
    const btnText = document.querySelector(".show-more");
  
    if (more.classList.contains('hidden')) {
      btnText.innerHTML = "Characteristics ∧"; 
      more.classList.remove('hidden')
    } else {
      btnText.innerHTML = "Characteristics ∨"; 
      more.classList.add('hidden')
    }
  }