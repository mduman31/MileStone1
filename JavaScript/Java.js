// Wait for DOM to load fully before injecting data
document.addEventListener("DOMContentLoaded", () => {
    
    // Selecting elements based on updated semantic markup IDs
    const cityElement = document.getElementById("city-name");
    const tempElement = document.getElementById("temp-display");
    const descElement = document.getElementById("condition-desc");
    const humidityElement = document.getElementById("humidity-display");

    // Simulating API telemetry callback
    function loadGalacticWeather() {
        // Mock data matching the Kauai setting from the show!
        const weatherData = {
            city: "Kokaua Town, Kauai",
            temp: 27,
            description: "Warm Tropical Breeze",
            humidity: 78
        };

        // Injecting text properties safely to prevent breaking layout frames
        cityElement.textContent = weatherData.city;
        tempElement.textContent = `${weatherData.temp}°C`;
        descElement.textContent = weatherData.description;
        humidityElement.textContent = `Humidity: ${weatherData.humidity}%`;
    }

    // Trigger simulation after a short 1-second system startup delay
    setTimeout(loadGalacticWeather, 1000);
});
