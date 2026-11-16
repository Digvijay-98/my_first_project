const cityInputElmt = document.querySelector("#cityInput")
const weatherResultElmt = document.querySelector("#weatherResult")
function getWeather(){
    city = cityInputElmt.value 
    fetchWeather(city)
}

async function fetchWeather(city){
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=307707da4086030e834ef77c0bc3eb38&units=metric`)
        .then(res=>res.json())
    .then(data=>renderData(data))
    .catch(err=>console.log(err))
}

function renderData(data){
    console.log(data)
    console.log(typeof data)
    weatherResultElmt.innerHTML = `
        <h2>${data.name} <i>${data.sys.country}</i></h2>
        <p>Temp: <b>${data.main.temp} <sup>o</sup>C</b> </br>
        min Temp : ${data.main.temp_min} max Temp: ${data.main.temp_max}
        </p>
        <p> visibility: ${data.visibility}
        <p>${data.weather[0].main} : <b>${data.weather[0].description}</b>
        <img src='https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png' alt=${data.weather[0].description} />
        wind Speed: ${data.wind.speed}
        </p>
        <p> sunrise: ${data.sys.sunrise} , Sunset${data.sys.sunset} 
        </br>
                
      </p>

    `
}