
function toCelsius(fahrenheit){
    return (fahrenheit - 32) * 5/9;
}

function toFahrenheit(celsius){
    return (celsius * 9/5) + 32;
}

function updateCelsius(form){
    form.celsius.value = toCelsius(form.fahrenheit.value);
}

function updateFahrenheit(form){
    form.fahrenheit.value = toFahrenheit(form.celsius.value);
}
