let products =[
    {id: 1, name: "laptop", price: 1000, category:"electronics", stock:5},
    {id: 2, name: "headphones", price: 200, category:"electronics", stock:15},
    {id: 3, name: "t-shirt", price: 100, category:"apparel", stock:50}
];

const productListElmt = document.querySelector("#Product List"); 
const nameElmt = document.querySelector("#name"); 
const categoryElmt = document.querySelector("#category");
const priceElmt = document.querySelector("#price"); 
const stockElmt = document.querySelector("#stock"); 
const addNewBtnElmt = document.querySelector("#addNewBtn");


function renderProducts(prod){
    productListElmt.innerHTML = prod.map((product, i) => `
        <div class="col-12 col-md-6 col-lg-3">
        <div class="card text-bg-info" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${product.name}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
`)
}

window.addEventListener("load", function(){
    renderProducts(products);   
});