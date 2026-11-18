export function setupProjectFilters(onFilterChange) {
  document.querySelectorAll(".filter").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter").forEach(item => item.classList.remove("active"));
      button.classList.add("active");
      onFilterChange(button.dataset.filter);
    });
  });
}
