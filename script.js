function getWeather(){
    ("https://api.open-meteo.com/v1/forecast?latitude=-5.4292&longitude=105.2611&current_weather=true")
    
    fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log("DATA:", data);

      const tempEl = document.getElementById("temp");

      if (!data.current_weather) {
        tempEl.textContent = "No data";
        return;
      }

      const temp = data.current_weather.temperature;
      tempEl.textContent = temp + "°C";
    })
    .catch(err => {
      console.log("ERROR:", err);
      document.getElementById("temp").textContent = "Offline";
    });
}

getWeather();