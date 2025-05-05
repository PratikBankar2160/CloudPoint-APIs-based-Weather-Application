const Input_box = document.querySelector(".Input-box")
const searchBtn = document.querySelector("#searchBtn")
const weather_img = document.querySelector(".weather-img")
const temperature = document.querySelector(".temperature")
const discription = document.querySelector(".discription")
const humidity = document.querySelector("#humidity")
const wind_speed = document.querySelector("#wind-speed")
async function checkWeather(city){
    const api_key = "67f545d7ac1b2ae5d9d7c90b514bf29f";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(`${url}`).then(response => response.json());
    console.log(weather_data);

    temperature.innerHTML = `${Math.round(weather_data.main.temp-273.15)}°C`;

    discription.innerHTML = `${weather_data.weather[0].description}`;

    wind_speed.innerHTML = `${weather_data.wind.speed}Km\h`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;

    switch(weather_data.weather[0].main){
        case "Clouds" :
            weather_img.src = "cloud.png";
            break;
        case "Clear" :
            weather_img.src = "clear.png";
            break;
        case "Rain" :
            weather_img.src = "rain.png";
            break;
        case "Mist" :
            weather_img.src = "mist.png";
            break;
        case "Snow" :
            weather_img.src = "snow.png";
            break;
    }

}

searchBtn.addEventListener("click" , ()=>{
    checkWeather(Input_box.value);
});