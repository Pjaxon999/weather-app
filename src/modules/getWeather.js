import render from "./render";
import errorRender from "./errorRender";

export default async function getWeather() {
  //Initialize array for storing the output data as an array later
  const weeklyWeatherArr = [];

  //Needed to convert output of getting the UTC day from a number to an actual day name
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  //Grab the search element and then fetch data based on the value of the search
  const search = document.getElementById("search");
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${search.value}?unitGroup=us&key=L2FAVUHB39XZKSTQV38BRJZKP`,
      { mode: "cors" },
    );
    const weatherData = await response.json();
    //Make sure errors get caught and then passed to the error renderer
    if (weatherData.error) {
      throw new Error(weatherData.error);
    }
    //Store location and forecast separately
    const location = weatherData.resolvedAddress;
    const forecast = weatherData.description;
    //Get information for the week, then push into the data array and render
    const weeklyWeather = weatherData.days.slice(0, 7);
    weeklyWeather.forEach((day) => {
      weeklyWeatherArr.push({
        dayName: dayNames[new Date(day.datetime).getUTCDay()],
        temperature: day.temp,
        condition: day.conditions,
        icon: day.icon,
      });
    });
    render(weeklyWeatherArr, location, forecast);
  } catch (error) {
    errorRender(error);
  }
}
