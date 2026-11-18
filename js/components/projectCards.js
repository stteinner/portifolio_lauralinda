import { knownDescriptions } from "../data/repositories.js";
import { escapeHTML } from "../utils/format.js";

function getCategory(repository) {
  const name = repository.name.toLowerCase();
  if (name.includes("api") || name.includes("back")) return "Backend / API";
  if (name.includes("front") || name.includes("class")) return "Frontend";
  if (name.includes("form")) return "Formulários";
  return "Desenvolvimento web";
}

function getIcon(repository) {
  const name = repository.name.toLowerCase();
  if (name.includes("api") || name.includes("back")) return "⚙";
  if (name.includes("form")) return "▤";
  if (name.includes("front")) return "✧";
  return "⌘";
}

export function renderProjects(repositories, filter) {
  const grid = document.getElementById("projectGrid");
  const count = document.getElementById("repoCount");
  const filtered = repositories.filter(repository => filter === "all" ||
    (filter === "other"
      ? !["JavaScript", "HTML"].includes(repository.language)
      : repository.language === filter));

  count.textContent = `${filtered.length} projeto(s) exibido(s)`;
  if (!filtered.length) {
    grid.innerHTML = '<div class="loading">Nenhum projeto encontrado nessa categoria.</div>';
    return;
  }

  grid.innerHTML = filtered.map(repository => {
    const description = repository.description || knownDescriptions[repository.name] ||
      `Repositório público de ${getCategory(repository).toLowerCase()}. Consulte o GitHub para ver o código e os detalhes.`;
    return `<article class="project-card">
      <div class="card-top"><span class="repo-icon">${getIcon(repository)}</span><span class="repo-type">${getCategory(repository)}</span></div>
      <h3>${escapeHTML(repository.name)}</h3>
      <p>${escapeHTML(description)}</p>
      <div class="card-bottom"><span class="language">${escapeHTML(repository.language || "Código")}</span>
      <a class="repo-link" href="${escapeHTML(repository.html_url)}" target="_blank" rel="noreferrer">Ver repositório ↗</a></div>
    </article>`;
  }).join("");
}
