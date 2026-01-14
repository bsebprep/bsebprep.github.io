/* main.js
   Future-ready JavaScript file
   Author: Intangible Network
*/

document.addEventListener("DOMContentLoaded", () => {
  console.log("Intangible Network website loaded successfully");

  // Example: dynamic year update
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
