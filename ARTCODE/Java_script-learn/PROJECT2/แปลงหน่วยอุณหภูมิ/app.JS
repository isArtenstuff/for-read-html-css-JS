function toCelsius(Fahrenheit) {
    let value = (Fahrenheit - 32) / 1.8
    return value.toFixed(2) + "°C"
}
// function display(elementId, value) {
//     document.getElementById(elementId).innerHTML = "<b>" + value + "</b>"
// }
function toFahrenheit(Celsius) {
    let value = (Celsius * 1.8) + 32
    return value.toFixed(2) + "°F"
}
function toCelsiusProgram(value) {
    alert(toCelsius(value))
}
function toFahrenheitProgram(value) {
    alert(toFahrenheit(value))
}
