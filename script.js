function clicked() {
    const options = { method: 'GET' };

    fetch("https://api.openweathermap.org/data/2.5/weather?lat=33.68&lon=-117.82&appid=1068d6439f6a7dfd311dcd1027070f81", options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            //let weqth = response.coord, lon
            const temperature = Math.round((response.main.temp - 273.15) * (9.0 / 5.0) + 32);
            const feels_like = Math.round((response.main.feels_like - 273.15) * (9.0 / 5.0) + 32);
            const min_temp = Math.round((response.main.temp_min - 273.15) * (9.0 / 5.0) + 32);
            const max_temp = Math.round((response.main.temp_max - 273.15) * (9.0 / 5.0) + 32);
            document.getElementById("display").innerHTML = "The temperature in Irvine today is " + temperature + "°F"
            document.getElementById("display2").innerHTML = "Feels like " + feels_like + "°F"
            document.getElementById("display3").innerHTML = "Today's minimum temperature is " + min_temp + "°F"
            document.getElementById("display4").innerHTML = "Today's maximum temperature is " + max_temp + "°F"
        })

        .catch(err => console.error(err))
}

function popup1() {

    alert("Masculine Outfit successfully added to Favorites")
}

function popup2() {

    alert("Femimine Outfit successfully added to Favorites")
}

function refreshPage() {
    location.reload();
}

function Images() {
    const myImage = new Image()
    myImage.src = "outfit-male.jpg"
}