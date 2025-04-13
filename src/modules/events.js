import checkInput from "./checkInput";

export default function events() {
  const button = document.querySelector(".button");
  const search = document.querySelector(".search-input");
  button.addEventListener("click", checkInput);
  search.addEventListener("blur", checkInput);
}
