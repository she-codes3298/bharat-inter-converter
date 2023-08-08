function displaytemp ( event ) {
    event.preventDefault();
    let formElement = document.querySelector( "#temp-data" );
    let displayDetails = document.querySelector( "#convert" );
    displayDetails.innerHTML = formElement.value;
    celsiusTemperature = parseFloat( formElement.value ); // Store entered temperature in celsiusTemperature
}

let form = document.querySelector( "#temp" );
form.addEventListener( "submit", displaytemp );

function displayFahrenheitTemperature ( event ) {
    event.preventDefault();
    let temperatureElement = document.querySelector( "#convert" );

    celsiusLink.classList.remove( "active" );
    fahrenheitLink.classList.add( "active" );
    let fahrenheitTemperature = ( celsiusTemperature * 9 ) / 5 + 32; // Convert to Fahrenheit
    temperatureElement.innerHTML = Math.round( fahrenheitTemperature );
}

function displayCelsiusTemperature ( event ) {
    event.preventDefault();
    celsiusLink.classList.add( "active" );
    fahrenheitLink.classList.remove( "active" );
    let temperatureElement = document.querySelector( "#convert" );
    temperatureElement.innerHTML = Math.round( celsiusTemperature );
}

let celsiusTemperature = null;

let fahrenheitLink = document.querySelector( ".fahrenheit-link a" ); // Fixed selector
fahrenheitLink.addEventListener( "click", displayFahrenheitTemperature );

let celsiusLink = document.querySelector( ".celsius-link a" ); // Fixed selector
celsiusLink.addEventListener( "click", displayCelsiusTemperature );
