// When the page loads
document.addEventListener("DOMContentLoaded", () => {
  // Get DOM elements
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const cityName = document.getElementById("city-name");
  const temperature = document.getElementById("temperature");
  const description = document.getElementById("description");
  const humidity = document.getElementById("humidity");
  const windSpeed = document.getElementById("wind-speed");
  const errorMessage = document.getElementById("error-message");
  const apiKey = "YOUR_API_KEY";

  // Event listener for the get weather button
  getWeatherBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (city) {
      try {
        const data = await getWeather(city);
        displayWeather(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }
  });

  // Helper function to get weather data from API
  function getWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  }

  // Helper function to display weather data
  function displayWeather(data) {
    cityName.textContent = data.name;
    temperature.textContent = `${Math.round(data.main.temp - 273.15)}°C`;
    description.textContent = data.weather[0].description;
    humidity.textContent = `${data.main.humidity}%`;
    windSpeed.textContent = `${data.wind.speed} m/s`;
  }
});
