import getWeather from "./getWeather";

export default function checkInput() {
  const search = document.getElementById("search");
  const searchError = document.getElementById("error");
  if (search.validity.valueMissing) {
    searchError.textContent = "You need to enter a location to search";
    searchError.className = "error active";
  } else if (search.validity.valid) {
    searchError.textContent = "";
    searchError.className = "error";
    getWeather();
  }
}
