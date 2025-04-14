import getWeather from "./getWeather";

export default function events() {
  const button = document.querySelector(".button");
  button.addEventListener("click", getWeather);

  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    getWeather();
  });
}
