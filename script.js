fetch("https://api.open-meteo.com/v1/forecast?latitude=-6.9&longitude=107.6&current_weather=true")
  .then(res => res.json())
  .then(data => {
    const temp = data.current_weather.temperature;
    const code = data.current_weather.weathercode;

    document.getElementById("temp").textContent = temp + "°C";
    document.getElementById("desc").textContent = getWeatherText(code);
  });

function getWeatherText(code) {
  if (code === 0) return "Cerah ☀️";
  if (code <= 3) return "Berawan ☁️";
  if (code >= 61 && code <= 65) return "Hujan 🌧️";
  if (code >= 95) return "Badai ⛈️";
  return "Cuaca biasa 🌤️";
}

setInterval(getWeather, 600000);