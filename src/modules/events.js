import checkInput from "./checkInput";

export default function events() {
  const button = document.querySelector(".button");
  button.addEventListener("click", checkInput);

  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkInput();
  });
}
