const apiKey="4501d6d1304373cacbddefc8623796e4";
const form=document.querySelector("form");

form.addEventListener('submit',function(e){
    e.preventDefault();
    const cityName=document.getElementById('city-name').value;
    getData(cityName);
    
})
async function getData(cityName){

    try{
    let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apiKey}`;
    const response=await fetch(url);
    const data=await response.json();

    showWeatherInfo(data);
    }
    catch(err){
        alert('City is not found!')
    }
    
}
function showWeatherInfo(data){
    //console.log(data);
    const weatherInfo=document.getElementById('weather-info');
    weatherInfo.innerHTML=`
    <h2>CountryCode:${data.sys.country}</h2>
    <h3>CityName:${data.name}</h3>
    <p>Temperature:${Math.round(data.main.temp)-273.15}</p>
    <p>Humidity:${data.main.humidity}%</p>
    <p>Pressure:${data.main.pressure} hPa</p>
    <p>Weather:${data.weather[0].description}</p>
    <p>Wind Speed:${data.wind.speed} m/s</p>
    `;
}

function rset(){
    document.getElementById("city-name").value = " ";
}
