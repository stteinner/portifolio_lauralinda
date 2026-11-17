import { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Heart,
  Code2,
  Sparkles,
  ExternalLink,
  Download,
  Menu,
  X,
  Cat,
  Star,
  Instagram
} from "lucide-react";

import "./App.css";

const profile = {
  name: "Seu Nome",
  role: "Desenvolvedora Web",
  description:
    "Sou apaixonada por tecnologia, criatividade e desenvolvimento de soluções digitais. Transformo ideias em experiências bonitas, funcionais e acessíveis.",
  email: "seuemail@email.com",
  github: "https://github.com/seuusuario",
  linkedin: "https://linkedin.com/in/seuusuario",
  instagram: "https://instagram.com/seuusuario"
};

const skills = [
  { name: "HTML5", level: "Intermediário" },
  { name: "CSS3", level: "Intermediário" },
  { name: "JavaScript", level: "Em aprendizado" },
  { name: "React", level: "Em aprendizado" },
  { name: "Git & GitHub", level: "Básico" },
  { name: "TypeScript", level: "Em aprendizado" }
];

const projects = [
  {
    title: "Pink Store",
    category: "Frontend",
    description:
      "Uma loja virtual moderna com identidade visual delicada, layout responsivo e experiência intuitiva.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/seuusuario",
    emoji: "🛍️"
  },
  {
    title: "My To Do List",
    category: "Aplicação web",
    description:
      "Aplicação para organização de tarefas, com foco em produtividade e simplicidade.",
    technologies: ["React", "CSS"],
    link: "https://github.com/seuusuario",
    emoji: "📝"
  },
  {
    title: "Cat Café",
    category: "Projeto criativo",
    description:
      "Página fictícia de uma cafeteria temática, com design criativo e navegação responsiva.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/seuusuario",
    emoji: "🐱"
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState("");

  const navItems = [
    ["Início", "#home"],
    ["Sobre mim", "#about"],
    ["Habilidades", "#skills"],
    ["Projetos", "#projects"],
    ["Contato", "#contact"]
  ];

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error("Não foi possível enviar.");
      }

      setFeedback("Mensagem enviada com sucesso! 💗");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setFeedback(
        "O envio automático ainda não está configurado. Entre em contato pelo e-mail!"
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <header className="header">
        <a href="#home" className="logo">
          <Cat size={25} />
          Pink Code Club<span>♡</span>
        </a>

        <button
          className="mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav active" : "nav"}>
          {navItems.map(([label, link]) => (
            <a
              key={link}
              href={link}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a href="#contact" className="nav-button">
            Vamos conversar! 💌
          </a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-content">
            <span className="eyebrow">
              <Sparkles size={16} /> WELCOME TO MY LITTLE WORLD
            </span>

            <h1>
              Hello,
              <br />
              <span>world!</span>
              <span className="heart">♡</span>
            </h1>

            <h2>
              Eu sou <span>{profile.name}</span>!
            </h2>

            <p className="hero-description">
              {profile.description}
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                Ver meus projetos <Code2 size={18} />
              </a>
              <a href="#contact" className="secondary-button">
                Entre em contato <Heart size={18} />
              </a>
            </div>

            <div className="socials">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="E-mail">
                <Mail />
              </a>
              <a href={profile.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                <Instagram />
              </a>
            </div>
          </div>

          <div className="hero-art">
            <div className="floating-star star-one">✦</div>
            <div className="floating-star star-two">♡</div>
            <div className="cat-circle">
              <div className="cat-emoji">🐱</div>
              <div className="sunglasses">🕶️</div
