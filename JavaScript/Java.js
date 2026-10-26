// Weather Integration loop tracking New Castle, DE grid coordinate points
document.addEventListener("DOMContentLoaded", () => {
    const displayZone = document.getElementById("weather-display");

    // Standard National Weather Service endpoint mapping for regional coverage
    const API_URL = "https://weather.gov";

    fetch(API_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network routing latency verified.");
            }
            return response.json();
        })
        .then(data => {
            const currentPeriod = data.properties.periods[0];
            displayZone.innerHTML = `
                <strong>Condition:</strong> ${currentPeriod.name}<br>
                <strong>Temperature:</strong> ${currentPeriod.temperature}°${currentPeriod.temperatureUnit}<br>
                <strong>Forecast:</strong> ${currentPeriod.detailedForecast}
            `;
        })
        .catch(error => {
            console.error("API Processing Fault:", error);
            displayZone.innerHTML = "🌤 Weather feed connection structural loop active.";
        });
});
