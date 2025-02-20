
function convertCelsiusToFahrenheit() {

    let celsius = parseFloat(prompt("Enter temperature in Celsius:"));
  
    let fahrenheit = (celsius * 9 / 5) + 32;

    alert(celsius + "°C is equal to " + fahrenheit + "°F");
  }
  
  convertCelsiusToFahrenheit();
  