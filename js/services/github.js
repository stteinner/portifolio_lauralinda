import { GITHUB_USER, knownDescriptions } from "../data/repositories.js";

export async function fetchRepositories() {
  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated&type=owner`);
    if (!response.ok) throw new Error("GitHub API indisponível");
    const data = await response.json();
    const repositories = data
      .filter(repository => !repository.fork)
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
    if (!repositories.length) throw new Error("Nenhum repositório retornado");
    return { repositories, fallback: false };
  } catch (error) {
    const repositories = Object.keys(knownDescriptions).map(name => ({
      name,
      description: knownDescriptions[name],
      language: name.includes("formulario") ? "HTML" : "JavaScript",
      html_url: `https://github.com/${GITHUB_USER}/${name}`
    }));
    return { repositories, fallback: true };
  }
}
