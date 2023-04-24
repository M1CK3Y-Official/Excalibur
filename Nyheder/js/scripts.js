// Vi henter vores service der giver adgang til data
import service from "./service.js";

import {productPreview, productTmpl} from './templates.js';

// Referencer til DOM elementer.
const singleNews = document.querySelector('.single-news');
const itemContainer = document.querySelector('.item-container');

// Vi opretter en reference til vores ProductFromFile metode i service.
let productsFromFile = service.getProductsFromFile();



// Hvis vi har en Item Container så udføre vi følgende arbejde.
if(itemContainer) {

    // console.log('productsFromFile', productsFromFile)

    productsFromFile.then(productsInJson => {

        console.log(productsInJson)
        itemContainer.innerHTML = '';
        productsInJson.forEach( (product) => {

            itemContainer.innerHTML += productPreview(product);
        
        });
    
    })
    
}

// Hvis vi er på produkt siden udføre vi følgende.
if(singleNews) {

    let search = location.search;
    let productID = new URLSearchParams(search).get('id');

    const productContainer = document.querySelector('.product-container');
    const foundProduct = fileProducts.find( (product) => product.id == productID)

    productContainer.innerHTML = productTmpl(foundProduct);

    console.log('foundProduct', foundProduct);

}
