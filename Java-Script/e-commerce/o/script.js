let products = [
    { id: 1, name: "Laptop", price: 1000, category: "Electronics", stock: 5 },
    { id: 2, name: "Headphones", price: 200, category: "Electronics", stock: 15 },
    { id: 3, name: "T-shirt", price: 20, category: "Apparel", stock: 50 },
    { id: 4, name: "juice", price: 60, category: "grossary", stock: 90 },

];

const productListElmt = document.querySelector("#productList");
const inputNameElmt =document.querySelector("#inputName")
const inputCategoryElmt = document.querySelector("#inputCategory")
const inputPriceElmt = document.querySelector("#inputPrice")
const inputStockElmt = document.querySelector("#inputStock")
const addBtnElmt = document.querySelector("#addNewBtn")

// Local Storage
function saveToLocal(p){
    localStorage.setItem("b98", JSON.stringify(p))
}
function getFromLocal(){
    return JSON.parse(localStorage.getItem("b98"))
}

// render Products
function renderproducts(prod) {
    productListElmt.innerHTML = prod.map((product, i) => `
    <div class="col-12 col-md-6 col-lg-3">
        <div class="card" style="width: 18rem;">
            <img src="" class="card-img-top" alt="...">
            <div  class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <h6 class="card-subtitle text-body-secondory">${product.price}</h6>
               <p class="card-text">${product.category}</p>
               <p class="card-text">${product.stock}</p>
               <button class= "btn btn-primary" onclick=deleteProd(${product.id})>Delete </button> 
              <a href="./cart.html" class="btn bt1n-primary">Add to cart</a>
              <a href="#" class="btn bt1n-primary">buy now</a>
            </div>
        </div>
    </div> 

    `).join("")
}

// add New Products
function addNewProducts(){
    newProductObj = {
        id : Date.now(),
        name: inputNameElmt.value,
        price : inputPriceElmt.value,
        category : inputCategoryElmt.value,
        stock : inputStockElmt.value,
    }
    prodFromLocal = getFromLocal()
    prodFromLocal.push(newProductObj)
    renderproducts(prodFromLocal)
    saveToLocal(prodFromLocal)
    inputNameElmt.value = ''
    inputPriceElmt.value = '' 
    inputCategoryElmt.value = ''
    inputStockElmt.value = ''
}
addBtnElmt.addEventListener("click", addNewProducts)

// edit Btn Function



// Local Storage Delete Function
function deleteProd(ID){
    prodFromLocal = getFromLocal()
     indexOfProd = prodFromLocal.findIndex((p)=> p.id == ID)
    if(indexOfProd == -1){
        alert("product not found")
    }else{
        prodFromLocal.splice(indexOfProd ,1)
        saveToLocal(prodFromLocal)
        renderproducts(prodFromLocal)
    }
}

// saved local Storage 
window.addEventListener('load', ()=>{
    savedToLocalstore = JSON.parse(localStorage.getItem("b98"))
    if(savedToLocalstore.lenght >0 ){
        renderproducts(savedToLocalstore)
    }else{
        localStorage.setItem("b98", JSON.stringify(products))
        renderproducts(products)
    }
    

} )