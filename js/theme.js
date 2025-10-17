// Select the necessary elements
const themeToggleButton = document.getElementById("theme-toggle-button");
const bodyElement = document.body;


console.log("jhiwhrfbierfiebrfieriuwer");



// Function to apply the saved or preferred theme
function applyTheme() {
  // 1. Check localStorage for a saved user preference
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    // If a theme is saved, apply it
    bodyElement.classList.toggle("dark-theme", savedTheme === "dark");
  } else {
    // 2. If no preference, check the media query for the user's OS setting
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    bodyElement.classList.toggle("dark-theme", prefersDark);
  }
}

// Function to handle the button click
function toggleTheme() {
  // Toggle the class on the body
  bodyElement.classList.toggle("dark-theme");

  // Save the user's choice to localStorage
  const currentTheme = bodyElement.classList.contains("dark-theme")
    ? "dark"
    : "light";
  localStorage.setItem("theme", currentTheme);
}

// Add event listener to the button
themeToggleButton.addEventListener("click", toggleTheme);

// Apply the initial theme when the page loads
document.addEventListener("DOMContentLoaded", applyTheme);
