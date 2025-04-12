import "./styles/modern-normalize.css";
import "./styles/styles.css";

async function defaultWeather() {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London?unitGroup=us&key=L2FAVUHB39XZKSTQV38BRJZKP`,
    { mode: "cors" },
  );
  const weatherData = await response.json();
  console.log(weatherData);
  console.log(weatherData.address);
  console.log(weatherData.currentConditions.temp);
  console.log(weatherData.currentConditions.conditions);
  console.log(weatherData.description);
}
defaultWeather();

async function getWeather() {
  const search = document.getElementById("search");
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${search.value}?unitGroup=us&key=L2FAVUHB39XZKSTQV38BRJZKP`,
    { mode: "cors" },
  );
  const weatherData = await response.json();
  console.log(weatherData);
  console.log(weatherData.address);
  console.log(weatherData.currentConditions.temp);
  console.log(weatherData.currentConditions.conditions);
  console.log(weatherData.description);
}
const button = document.querySelector("button");
button.addEventListener("click", getWeather);

window.defaultWeather = defaultWeather();
