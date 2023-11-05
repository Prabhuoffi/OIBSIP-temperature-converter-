function convertTemperature() {
    const input = document.getElementById("temperatureInput").value;
    const unit = document.getElementById("unit").value;
    const resultElement = document.getElementById("result");

    if (isNaN(input)) {
        resultElement.innerText = "Please enter a valid number.";
        return;
    }

    let convertedTemperature;
    let convertedUnit;

    if (unit === "Celsius") {
        convertedTemperature = (input - 32) * (5/9);
        convertedUnit = "Celsius";
    } else if (unit === "Fahrenheit") {
        convertedTemperature = (input * 9/5) + 32;
        convertedUnit = "Fahrenheit";
    } else if (unit === "Kelvin") {
        convertedTemperature = parseFloat(input) + 273.15;
        convertedUnit = "Kelvin";
    }

    resultElement.innerText = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${convertedUnit}`;
}
