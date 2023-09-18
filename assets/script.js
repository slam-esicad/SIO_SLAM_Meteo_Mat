async function getvalue() {

    var city = document.getElementById("info").value;

    var response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=14d4d94cf3bfbf3e9e35e7155e243848&units=metric");
    var  data = await response.json();

    var temp = data.main.temp
    document.getElementById("temp").innerHTML= "La température à " + city +" est de " + temp + "°C";
}