const inputTaskElmt = document.getElementById("inputTask")
const addNewTaskBtnElmt = document.getElementById("addNewTaskBtn")
const clearTaskBtnElmt = document.getElementById("clearTaskBtn")
const toDosElmt = document.getElementById("toDos")

let toDos = []

function addNewTask() {
    const tDo = inputTaskElmt.value
    toDos.push(tDo)
    inputTaskElmt.value = ''
    console.log(toDos);
    rendertoDOs()
}

addNewTaskBtnElmt.addEventListener('click', addNewTask)

function rendertoDOs() {
    toDosElmt.innerHTML = toDos.map((td, i) => `
                       <p>${td} <button class="btn btn-danger" onclick="deletetoDos(${i})">Delete </button> </p>
    `).join("")

}

function deletetoDos() {
    toDos.splice(index, 1)
    rendertoDOs()
}

clearTaskBtnElmt.addEventListener("click", () => {
    toDos = []
    rendertoDOs()
})


// Students Marks Calculator
const inputMarksElmt = document.getElementById("inputMarks")
const addNewMarksBtnElmt = document.getElementById("addNewMarksBtn")
const calculateBtnElmt = document.getElementById("calculateBtn")
const resetBtnElmt = document.getElementById("resetBtn")
const marksDisplayElmt = document.getElementById("marksDisplay")

let marksDisplay = []

function addmarks() {
    newMarks = Number(inputMarksElmt.value)
    inputMarksElmt.value = ''
    marksDisplay.push(newMarks)
    console.log(marksDisplay);

}

addNewMarksBtnElmt.addEventListener('click', addmarks)

function calculate() {
    totalMarks = marksDisplay.reduce((sum, m) =>{
        return sum = sum + m
    },0)
    avgMarks = (totalMarks / marksDisplay.length).toFixed(2)

    highestMarks =  0
    lowestMarks = Infinity
    for ( i = 0; i<marksDisplay.length; i++) {
        if (marksDisplay[i] > highestMarks) {
            highestMarks = marksDisplay[i]
        }
    }

    for ( i = 0; i<marksDisplay.length; i++) {
        if (marksDisplay[i] < lowestMarks) {
            lowestMarks = marksDisplay[i]
        }
    }
    marksDisplayElmt.innerHTML = `
    <p>total Marks: ${totalMarks}</P>
    <p> Average Marks: ${avgMarks} </P>
    <p> Highest Marks: ${highestMarks} </P>
    <p> Lowest Marks: ${lowestMarks} </P>
    `
}

calculateBtnElmt.addEventListener('click', calculate)

function reset(){
    marksDisplay =[]
    marksDisplayElmt.innerHTML = ''
}
resetBtnElmt.addEventListener('click',reset)



// Search in an Array

const searchCars = ["audi", "bmw", "ferrari", "porsche"]

function addSearchDisplay(){
     // Get the value typed by the user and convert to lowercase
        const searchInputElmt = document.getElementById("searchInput").value.trim().toLowerCase();
        const resultOutputElmt = document.getElementById("resultOutput");

        // Clear previous results if the input is empty
        if (searchInputElmt === "") {
            resultOutputElmt.innerText = "";
            return;
        }

        // Search for a matching brand (case-insensitive)
        const match = searchCars.find(brand => brand.toLowerCase() === searchInputElmt);

        // Display the matching item or the "No matches found" message
        if (match) {
            resultOutputElmt.innerText = match;
        } else {
            resultOutputElmt.innerText = "No matches found";
        }
}
        

// odd and Even Number





// sort Names Alpbetacally


let sortArray = [] ;

function AddNames(){
    const sortInputElmt = document.getElementById("sortInput")
    const sna = sortInputElmt.value
    
     if (sna === "") {
              alert("Please enter a valid name string first!");
             return;
  }

  sortArray.push(sna)
  console.log(sortArray);
  
}


