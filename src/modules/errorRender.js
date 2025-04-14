export default function errorRender(error) {
  //Get the error display div and clear it of any previous errors
  const errorDiv = document.getElementById("error-display");

  //remove any currently displaying weather information
  const today = document.querySelector(".today");
  const dayDivs = document.querySelectorAll("[data-index]");
  today.replaceChildren();
  dayDivs.forEach((div) => div.replaceChildren());

  //Store some user-friendly messages for common errors
  const errorMessages = {
    // Network/connection errors
    "Failed to fetch":
      "Couldn't connect to the weather service. Check your internet connection.",
    "Unexpected token 'B', \"Bad API Re\"... is not valid JSON":
      "Invalid location. Please try another city or country.",

    // API-specific errors (add more as needed)
    "Bad API Request": "Invalid location. Please try another city or country.",
    400: "Invalid request. Please check your input.",
    404: "Location not found. Try a nearby city.",
    500: "Weather service is currently unavailable. Try again later.",
  };

  //Error handling
  let errorMessage = "";
  if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  }

  const userFriendlyMessage =
    errorMessages[errorMessage] || "Something went wrong. Please try again.";

  //Make sure the error div is clear of any possible previous errors
  errorDiv.replaceChildren();

  //Create elements needed for the div, update content, then render
  const heading = document.createElement("h2");
  const errorElement = document.createElement("p");
  heading.textContent = "Oops!";
  errorElement.textContent = `${userFriendlyMessage}`;
  errorDiv.appendChild(heading);
  errorDiv.appendChild(errorElement);
}
