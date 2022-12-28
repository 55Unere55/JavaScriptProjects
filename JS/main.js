function weather_Function() {
    var weather_Output;
    var weathers = document.getElementById(Weather_Input).value;
    var weather_string = ",that is a great Weather!";
    switch(weathers){
    case "snowy":
    weather_Output = "snowy" + weather_string;
    break;
    case "rainy":
    weather_Output = "rainy" + weather_string;
    break;
    case "stormy":
    weather_Output = "stormy" + weather_string;
    break;
    case "Thunder":
    weather_Output = "Thunder" + weather_string;
    break;
    case "hot":
    weather_Output = "hot" + weather_string;
    break;
    case "breeze":
    weather_Output = "breeze" + weather_string;
    break;
    default:
    weather_Output = Please enter a weather exacatly as written in the list above";
}
document.getElementById("Output").innerHTML = weather_Output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The Text has changed!";
    }

