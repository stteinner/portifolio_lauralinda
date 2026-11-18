import { fetchRepositories } from "./services/github.js";
import { renderProjects } from "./components/projectCards.js";
import { setupProjectFilters } from "./components/filters.js";
import { setupCursor } from "./components/cursor.js";
import { setupScrollEffects } from "./components/scrollEffects.js";
import { setupNavigation } from "./components/navigation.js";

let repositories = [];
let activeFilter = "all";

async function initializeProjects() {
  const result = await fetchRepositories();
  repositories = result.repositories;
  renderProjects(repositories, activeFilter);
  if (result.fallback) {
    document.getElementById("repoCount").textContent = "Projetos em modo de contingência";
  }
}

function initializePortfolio() {
  document.getElementById("year").textContent = new Date().getFullYear();
  setupCursor();
  setupScrollEffects();
  setupNavigation();
  setupProjectFilters(filter => {
    activeFilter = filter;
    renderProjects(repositories, activeFilter);
  });
  initializeProjects();
}

document.addEventListener("DOMContentLoaded", initializePortfolio);
