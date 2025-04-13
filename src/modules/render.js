export default function render(weather, location, forecast) {
  const renderArray = [];
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  console.log(location);
  console.log(forecast);
  weather.forEach((day) => {
    renderArray.push({
      dayName: dayNames[new Date(day.datetime).getUTCDay()],
      temperature: day.temp,
      condition: day.conditions,
      icon: day.icon,
    });
  });
  console.log(renderArray);
}
