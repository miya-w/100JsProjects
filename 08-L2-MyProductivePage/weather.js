
const iconElement = document.querySelector(".weather-icon")
const tempElement = document.querySelector(".temperature-value p")
const descElement = document.querySelector(".temperature-description p")
const locationElement = document.querySelector(".location p")
const notificationElement = document.querySelector(".notification")

const weather = {};

weather.temperature = {
    unit : "celsius"
}

const KELVIN = 273;
const key = "3917f3a764d0394f234b9a09d3463ef4";

if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
    notificationElement.style.diplay = "block";
    notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>"
}

//set user's location
function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getWeather(latitude, longitude);
}

//show error

function showError(error){
    notificationElement.style.diplay = "block";
    notificationElement.innerHTML = `<p> ${error.message}</p>`
}

//get weather from API

function getWeather(latitude, longitude){
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`
   
    fetch(api).then(function(response){
        let data = response.json();
       
        return data;
    })
    .then(function(data){
        weather.temperature.value =  Math.floor(data.main.temp - KELVIN);//???????
        console.log(data.main)
        weather.description = data.weather[0].description;
        weather.iconId = data.weather[0].icon;
        weather.city = data.name; 
        weather.country = data.sys.country;
    })
    .then(function(){
       displayWeather(); 
    });
}


//dispaly weather to UI

function displayWeather(){
    iconElement.innerHTML = `<img src ="img/${weather.iconId}.png/">`;
    tempElement.innerHTML = `${weather.temperature.value}<span>C</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city},${weather.country}`;
    
}