import render from "./render";
export default async function getWeather() {
  const search = document.getElementById("search");
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${search.value}?unitGroup=us&key=L2FAVUHB39XZKSTQV38BRJZKP`,
    { mode: "cors" },
  );
  const weatherData = await response.json();
  const location = weatherData.resolvedAddress;
  const forecast = weatherData.description;
  const weeklyWeather = weatherData.days.slice(0, 7);
  render(weeklyWeather, location, forecast);
}
