/**
 * Galactic Dashboard Core Logic
 * Handles safe external widget telemetry injection
 */
document.addEventListener("DOMContentLoaded", () => {
    
    console.log("Aloha! Galactic Dashboard initialized successfully.");

    // Select the weather placeholder widget link safely
    const weatherWidget = document.querySelector('.weatherwidget-io');

    if (weatherWidget) {
        // Safe programmatic initialization of the weather widget network
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (!d.getElementById(id)) {
                js = d.createElement(s);
                js.id = id;
                js.src = 'https://weatherwidget.io';
                fjs.parentNode.insertBefore(js, fjs);
            }
        }(document, 'script', 'weatherwidget-io-js'));
    }
});
