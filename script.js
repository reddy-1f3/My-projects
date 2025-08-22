const temperatureData = {
    "new-york": "15°C",
    "los-angeles": "22°C",
    "chicago": "10°C",
    "houston": "25°C",
    "miami": "28°C"
};

function displayTemperature() {
    const location = document.getElementById("location").value;
    const temperature = temperatureData[location];
    const temperatureDiv = document.getElementById("temperature");

    if (temperature) {
        temperatureDiv.textContent = `The current temperature in ${location.replace('-', ' ')} is ${temperature}.`;
    } else {
        temperatureDiv.textContent = "";
    }
}