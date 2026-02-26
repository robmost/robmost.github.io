document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const themeText = document.getElementById("theme-text");
  const root = document.documentElement;

  // Set initial button text based on the theme applied in the <head>
  if (root.getAttribute("data-theme") === "dark") {
    themeText.textContent = "Light Mode";
  }

  themeToggle.addEventListener("click", () => {
    const currentTheme = root.getAttribute("data-theme");
    if (currentTheme === "dark") {
      root.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      themeText.textContent = "Dark Mode";
    } else {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      themeText.textContent = "Light Mode";
    }
  });
});
