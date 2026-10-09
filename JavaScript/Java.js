document.addEventListener("DOMContentLoaded", () => {
    // Correct active live forecast URL for New Castle, DE grid point
    const weatherUrl = "https://weather.gov";
    const weatherCard = document.getElementById("weather-card");

    fetch(weatherUrl, {
        headers: {
            'User-Agent': 'MaryAnnPortfolioApp (contact@example.com)'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Network error fetching weather data");
        }
        return response.json();
    })
    .then(data => {
        // Grab the most current upcoming hour from the live NWS forecast periods
        const currentPeriod = data.properties.periods[0];
        
        const temperature = currentPeriod.temperature;
        const unit = currentPeriod.temperatureUnit;
        const shortForecast = currentPeriod.shortForecast;
        const windSpeed = currentPeriod.windSpeed;
        const windDirection = currentPeriod.windDirection;

        // Update the display card with live Delaware data
        weatherCard.innerHTML = `
            <div class="weather-temp">${temperature}°${unit}</div>
            <div class="weather-desc">${shortForecast}</div>
            <div class="weather-details">Wind: ${windSpeed} ${windDirection}</div>
        `;
    })
    .catch(error => {
        console.error("Error updating weather:", error);
        weatherCard.innerHTML = `<p style="color:#d13b68; font-weight:bold;">Failed to load live weather. Please refresh.</p>`;
    });
});
