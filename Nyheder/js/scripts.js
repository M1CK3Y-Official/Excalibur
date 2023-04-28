import service from "./service.js";

import { newsTemplate, newsArtikle } from "./templates.js";

let newsPage = document.querySelector('.news-page');
let products = service.getProducts.products;
let newsContainer = document.querySelector('.item-container');


// Her kan man se alle 'previews' på siden.
if(newsContainer){
    newsContainer.innerHTML = '';
    products.forEach(newsItem => {
        newsContainer.innerHTML += newsTemplate(newsItem);        
    });
};



// Det her printer den valgte artikle ud på sin egen side.
if(newsPage){
    let search = location.search;
    let productID = new URLSearchParams(search).get('id');

    const productContainer = document.querySelector('.product-container');
    const foundProduct = products.find( (newsItem) => newsItem.id == productID);

    productContainer.innerHTML = newsArtikle(foundProduct);
}