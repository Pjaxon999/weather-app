export default function render(weather, location, forecast) {
  //Grab divs to render, clear before rendering
  const today = document.querySelector(".today");
  const dayDivs = document.querySelectorAll("[data-index]");
  today.replaceChildren();
  dayDivs.forEach((div) => div.replaceChildren());

  //make sure error div no longer has the "active" class
  const errorDiv = document.getElementById("error-display");
  errorDiv.replaceChildren();

  //Declare path to icons for template string usage
  const iconPath = "images/icons";

  //Create elements, populate with relevant data
  dayDivs.forEach((div) => {
    const index = div.dataset.index;
    const dayNameHeading = document.createElement("h3");
    const temperatureNumber = document.createElement("h3");
    const iconImg = document.createElement("img");
    const conditionText = document.createElement("h3");

    dayNameHeading.textContent = `${weather[index].dayName}`;
    temperatureNumber.textContent = `${weather[index].temperature}`;
    iconImg.src = `${iconPath}/${weather[index].icon}.svg`;
    iconImg.className = "icon";
    conditionText.textContent = `${weather[index].condition}`;

    div.appendChild(dayNameHeading);
    div.appendChild(temperatureNumber);
    div.appendChild(iconImg);
    div.appendChild(conditionText);
  });

  //For the today section only
  const locationHeading = document.createElement("h3");
  const forecastHeading = document.createElement("h3");

  forecastHeading.textContent = `Resolved Location: ${location}`;
  locationHeading.textContent = `Forecast: ${forecast}`;

  today.appendChild(forecastHeading);
  today.appendChild(locationHeading);
}
