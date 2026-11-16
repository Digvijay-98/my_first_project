const receipeListElmt = document.querySelector("#receipeList")
const loaderElmt = document.querySelector("#loader");
const errorMessageElmt = document.querySelector("#errorMessage");
const searchKeyElmlt = document.querySelector("#searchkey")
let recArray = [ ]
let category = [ ] 
const categoryelmt = document.querySelector("#category")


function renderReceipes(receipes) {
    receipeListElmt.innerHTML = receipes.map((rec) => `
            <div class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-2">

                <div class="card h-100 shadow-sm">

                    <img
                        src="${rec.strMealThumb}"
                        class="card-img-top"
                        alt="${rec.strMeal}"
                        loading="lazy"
                    >

                    <div class="card-body d-flex flex-column">

                        <h5 class="card-title">
                            ${rec.strMeal}
                        </h5>

                        <p class="card-text">
                            <span class="badge text-bg-success">
                                ${rec.strCategory || "Meal"}
                            </span>

                            <span class="badge text-bg-info">
                                ${rec.strArea || "International"}
                            </span>
                        </p>

                        <div class="mt-auto">

                            <button
                                class="btn btn-primary btn-sm"
                                onclick="showRecipeDetails('${rec.idMeal}')"
                                 data-bs-toggle="modal" 
                                 data-bs-target="#recipeModal"
                            >
                                More Info
                            </button>

                            <a
                                href="${rec.strYoutube || "#"}"
                                class="btn btn-danger btn-sm"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Video
                            </a>

                        </div>

                    </div>

                </div>

            </div>
    `).join('')
}



const recipeModal = new bootstrap.Modal(
    document.querySelector("#recipeModal")
);

const recipeDetails = document.querySelector("#recipeDetails");

async function showRecipeDetails(ID){
 recipeDetails.innerHTML = `
        <div class="text-center py-4">
            <div class="spinner-border text-primary"></div>
            <p class="mt-2">Loading recipe details...</p>
        </div>
    `;

    recipeModal.show();

    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ID}`)
        if (!response.ok) throw new Error("Unable to load recipe details")
        const data = await response.json()
        const receipe = data.meals?.[0]
        if (!receipe) throw new Error("Recipe not found")

        recipeDetails.innerHTML = `<div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">${receipe.strMeal}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <img src=${receipe.strMealThumb} alt="" class="CutomIMGMODAL"/>
        <p>${receipe.strInstructions}</p>
         <p class="card-text">
                            <span class="badge text-bg-success">
                                ${receipe.strCategory || "Meal"}
                            </span>

                            <span class="badge text-bg-info">
                                ${receipe.strArea || "International"}
                            </span>
                        </p>

      </div>
      `
    } catch (error) {
        recipeDetails.innerHTML = '<div class="modal-body text-danger">Unable to load recipe details. Please try again.</div>'
    }

}

function searchByName(){
    applyFilters()
}

function applyFilters(){
    const searchKeyValue = searchKeyElmlt.value.trim().toLowerCase()
    const selectedCategory = categoryelmt.value
    const filteredRecipes = recArray.filter(meal =>
        meal.strMeal.toLowerCase().includes(searchKeyValue) &&
        (selectedCategory === "all" || meal.strCategory === selectedCategory)
    )
    renderReceipes(filteredRecipes)
}

async function fetchData() {
    // Show loader before fetching
    loaderElmt.classList.remove("d-none");

    // Clear previous content and errors
    receipeListElmt.innerHTML = "";
    errorMessageElmt.classList.add("d-none");

    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
        if (!response.ok) throw new Error("Unable to fetch recipes")
        const data = await response.json()
        recArray = data.meals || []
        category = [...new Set(recArray.map(meal => meal.strCategory))]
        rendercategory(category)
        renderReceipes(recArray)
    } catch (error) {
        errorMessageElmt.classList.remove("d-none")
        console.error(error)
    } finally {
        loaderElmt.classList.add("d-none");
    }
}


function rendercategory(cat){
    categoryelmt.innerHTML = `<option value="all">All categories</option>` + cat.map(v=>`
        <option value="${v}">${v}</option>`).join('')
}

function filterbycategory(){
    applyFilters()
}

window.addEventListener('load', () => {
    fetchData()

}) 