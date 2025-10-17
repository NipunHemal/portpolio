// --- Element Selectors ---
const navItems = document.querySelectorAll(".nav-item");
const body = document.body;
const hamburger = document.getElementById("hamburger-menu");
const navMenu = document.querySelector(".nav-menu");

// --- Navigation Item Active State ---
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".nav-item.active").classList.remove("active");
    item.classList.add("active");

    // Close mobile menu when a link is clicked
    if (navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
      hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    }
  });
});

// --- Hamburger Menu ---
hamburger.addEventListener("click", () => {
  const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
  navMenu.classList.toggle("active");
  hamburger.setAttribute("aria-expanded", !isExpanded);
  // Change icon to 'X' when menu is open
  if (!isExpanded) {
    hamburger.innerHTML = '<i class="fas fa-times"></i>';
  } else {
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
  }
});

// --- Theme Toggle Functionality ---
// function applySavedTheme() {
//   const savedTheme = localStorage.getItem("theme");
//   if (savedTheme === "light") {
//     body.classList.add("light-theme");
//   }
// }

// applySavedTheme();

// themeToggleButton.addEventListener("click", () => {
//   body.classList.toggle("light-theme");
//   if (body.classList.contains("light-theme")) {
//     localStorage.setItem("theme", "light");
//   } else {
//     localStorage.setItem("theme", "dark");
//   }
// });
