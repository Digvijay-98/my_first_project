

function RenderData(data){
    console.log(data);
    
}

function fetchData (displayData) {
    setTimeout(()=> {
        const data = {name: "Digvijay", age: 26} ;
        displayData(data)
    },1000)
}

function displayData(data) {
    console.log("Data", data);
    
}

fetchData(displayData)
fetchData(RenderData)


