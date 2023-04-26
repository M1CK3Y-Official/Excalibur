import service from "./service.js";

import { arrangementTemplate, arrangementArtikle } from "./templates.js";

let arrangementPage = document.querySelector('.arrangement-page');
let products = service.getProducts.products;
let arrangementContainer = document.querySelector('.item-container');


// Her kan man se alle 'previews' på siden.
if(arrangementContainer){
    arrangementContainer.innerHTML = '';
    products.forEach(arrangementItem => {
        arrangementContainer.innerHTML += arrangementTemplate(arrangementItem);        
    });
};



// Det her printer den valgte artikle ud på sin egen side.
if(arrangementPage){
    let search = location.search;
    let productID = new URLSearchParams(search).get('id');

    const productContainer = document.querySelector('.product-container');
    const foundProduct = products.find( (arrangementItem) => arrangementItem.id == productID);

    productContainer.innerHTML = arrangementArtikle(foundProduct);
    document.title = foundProduct.title;

};


let joinButton = document.querySelector('.join-button');

if(joinButton){
    // Cheking if users are loged in.
    if ('login = true', joinButton){
        joinButton.classList.add('active');
        let campaignBtn = joinButton.lastElementChild;

    // On click it join/ or remove users.
        campaignBtn.addEventListener('click', (e)=>{
            e.target.classList.toggle('true');

            if(e.target.classList.value == 'true'){
                e.target.innerHTML = 'Tildmeldt';
                
            }else{
                e.target.innerHTML = 'Tildmeld kampagne';
            }
        })

    // If not, then they're sent to login page.
    }else{
        joinButton.classList.remove('active');
    }
};