const apiKey="e9107830d08d9fea92b1163e0c11f5a9";
const city=document.querySelector(".input");
const btn=document.querySelector(".button");
const weather_pic=document.querySelector(".weather_pic");
btn.addEventListener("click",()=>{
    checkWeather(city.value);
})
const url="https://api.openweathermap.org/data/2.5/weather?units=metric";

async function checkWeather(city)
{
    const response= await fetch(`${url}&appid=${apiKey}&q=${city}`);
    

   if(response.status==404)
   {
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";
    document.querySelector(".details").style.display="none";
   }
   else
   {
    var data=await response.json();
    document.querySelector(".error").style.display="none";
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+" km/hr";

        const condition=data.weather[0].main;
        if(condition=="Clouds")
        {
            weather_pic.src="./assets/clouds.png";
        }
        else if(condition=="Clear")
        {
            weather_pic.src="./assets/clear.png";
        }
        else if(condition=="Rain")
        {
            weather_pic.src="./assets/rain.png";
        }
        else if(condition=="Drizzle")
        {
            weather_pic.src="./assets/drizzle.png";
        }
        else if(condition=="Mist")
        {
            weather_pic.src="./assets/mist.png";
        }

        document.querySelector(".weather").style.display="block";
        document.querySelector(".details").style.display="flex";
    }
}
