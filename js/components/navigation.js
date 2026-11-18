export function setupNavigation() {
  const menuButton = document.getElementById("menuBtn");
  const navigationLinks = document.getElementById("navlinks");
  menuButton.addEventListener("click", () => navigationLinks.classList.toggle("open"));
  navigationLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => navigationLinks.classList.remove("open"));
  });
}
