async function weatherres() {
    const city = document.getElementById("input").value;
    const apiKey = "bb4cf0031ccdc1848f8e5b3439a5ec44"; // <-- Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("City Not Found");
        const data = await response.json();

        const result = `
        <h2>${data.name}, ${data.sys.country}</h2>

      <p>Temperature : ${data.main.temp} °C</p>
      <p>Weather: ${data.weather[0].description}</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;

        document.getElementById("weatherResult").innerHTML = result;
    } catch (error) {
        document.getElementById("weatherResult").innerHTML =
            `<p style="color:Black;">${error.message}</p>`;

    }
}

