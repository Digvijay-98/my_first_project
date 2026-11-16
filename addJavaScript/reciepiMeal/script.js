const reciepeListElmt = document.querySelector("#reciepeList")

function renderReciepe(reciepes) {
    reciepeListElmt.innerHTML = reciepes.map((rec) => `
    <div class="col"> 
         <div class="card" style="width: 18rem;">
               <img src="${rec.strMealThumb}" class="card-img-top" alt="${rec.strMeal}">
            <div class="card-body">
                 <h5 class="card-title">${rec.strMeal}</h5>
                 <p class="card-text">${rec.strInstructions ? rec.strInstructions.slice(0, 120) + '...' : 'No description available.'}</p>
                 <a href="${rec.strYoutube}" target="_blank" class="btn btn-primary">Watch recipe</a>
            </div>
        </div>
    </div>`).join('')
}

async function fetchData() {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s');
    const data = await response.json();
    const meals = data.meals || [];
    console.log(data);
    console.log(meals);
    renderReciepe(meals);
  } catch (err) {
    console.log(err);
  }
}

window.addEventListener('load', () => {
  fetchData();
});

