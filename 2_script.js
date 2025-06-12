
const now = new Date();

// Determine the day of the year (1–365)
const start = new Date(now.getFullYear(), 0, 0);
const diff = now - start;
const oneDay = 1000 * 60 * 60 * 24;
const dayOfYear = Math.floor(diff / oneDay);

// Get DOM elements
const photoElement = document.getElementById("daily-photo");
const messageElement = document.getElementById("message");

// Show image corresponding to current day of year
if (dayOfYear >= 1 && dayOfYear <= 365) {
  const imgPath = `images/${dayOfYear}.png`;
  photoElement.src = imgPath;
  messageElement.textContent = "";
} else {
  messageElement.textContent = "Unable to determine the current day of the year.";
  photoElement.style.display = "none";
}
