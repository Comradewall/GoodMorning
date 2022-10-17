
const options = {
    country: "ro",
    lang: "ro",                                             //To be modified, maybe....
    units: "metric",
    appid: "{API Key}",
}

let city = "Ramnicu Valcea";

function processWeatherData(response){

    //Raw Data
    let WeatherMain = response.main;
    let WeatherData = response;
    let WeatherWind = response.wind;
    //Shown Data
    let cityName = "";
    cityName = WeatherData.name;
    let temperature = ""
    temperature = WeatherMain.temp;
    let feel_like = "";
    feel_like = WeatherMain.feels_like;
    let humidity = "";
    humidity = WeatherMain.humidity;
    let athPressure = "";
    athPressure = WeatherMain.pressure;
    let windSpeed = "";
    windSpeed = WeatherWind.speed;
    //Debug
    console.log(WeatherData);
    console.log(WeatherWind);
    console.log(WeatherMain);
    //Implementing the Data
    document.getElementById("City").innerHTML(cityName);
    docuemnt.getElementById("Temperature").innerHTML(temperature);
    document.getElementById("WeatherDescription").innerHTML("The current temperature in "+ cityName + "is " + temperature + "degrees Celsius" + "but the tempreture felt is of around" + feel_like + "degrees Celsius");
    docuemnt.getElementById("SecondaryWeatherDesc").innerHTML("")
    

}

fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+","+options.country+"&lang="+options.lang+"&units="+options.units+"&appid="+options.appid)
    .then(response=>{
        return response.json()
    })
    .then(response=>{
        processWeatherData(response);       //This is not the best way to do this but its late and i am lazy.
    })
    .catch(err=>console.error(err));
