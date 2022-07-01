import products from './products.js'

// filter the jewels on a page by removing the jewels NOT  
// included by the chosen filters.
// ONLY in view by jewel type (not by ligne)

const filterJewels = (filter) => {
    // filter is an array where the first element is the
    // filtering condition and the second is the parameter
    // (example ['size', 55])
    const links = Array.from(document.querySelectorAll('.product-link'))
    const ligneContainer = document.querySelector('.ligne-container');
    const onPageItemsIdList = []
    for (let k = 0; k< links.length ; k++ ) {
        const itemId = links[k].href.replace('./product_pages/', '').replace('.html', '') 
        onPageItemsIdList.push(itemId)
    }
    for (let k = 0; k< links.length ; k++ ){
        const itemK = onPageItemsIdList[k]
        for (let j = 0; j< products.length ; j++ ){
            if (products[j][id] == itemK && products[j][filter[0]] != filter[1] ){
                ligneContainer.removeChild(links[k])
            }
        }
    }
}