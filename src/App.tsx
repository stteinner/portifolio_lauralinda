import { useState } from "react";
import {
  ArrowDown, ArrowUpRight, Code2, Github, Heart, Menu, X,
  Braces, Palette, Smartphone, Sparkles, GraduationCap, Mail
} from "lucide-react";

const githubUrl = "https://github.com/stteinner/portifolio_lauralinda";
const githubProfileUrl = "https://github.com/stteinner";

const skills = [
  { name: "HTML", detail: "Estrutura de páginas web", icon: Braces },
  { name: "CSS", detail: "Estilização de interfaces", icon: Palette },
  { name: "JavaScript", detail: "Lógica e interatividade", icon: Code2 },
  { name: "Front-end", detail: "Interfaces para usuários", icon: Smartphone },
  { name: "Back-end", detail: "Conhecendo a lógica dos sistemas", icon: Code2 },
  { name: "Desenvolvimento de sistemas", detail: "Minha área de formação", icon: Github },
];

const navItems = [
  ["Início", "#inicio"],
  ["Sobre", "#sobre"],
  ["Habilidades", "#habilidades"],
  ["Projetos", "#projetos"],
  ["Contato", "#contato"],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Voltar ao início">
          <span className="brand-mark"><Code2 size={19} /></span>
          <span>meu<span className="brand-accent">portfólio</span><span className="brand-heart">♡</span></span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Navegação principal">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a className="nav-cta" href="#contato" onClick={() => setMenuOpen(false)}>Vamos conversar <span>↗</span></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> PORTFÓLIO • DESENVOLVIMENTO WEB</p>
            <h1>Transformando ideias em <span>experiências digitais.</span></h1>
            <p className="hero-lead">
              Olá! Meu nome é Laura Steiner. Estudo Desenvolvimento de Sistemas e gosto da área de tecnologia, especialmente de aprender como ideias se transformam em soluções digitais.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projetos">Conheça meu trabalho <ArrowUpRight size={18} /></a>
              <a className="button button-quiet" href="#sobre">Um pouco sobre mim <ArrowDown size={17} /></a>
            </div>
            <div className="hero-note"><Heart size={15} fill="currentColor" /> Gentileza, esforço e vontade de aprender fazem parte da minha jornada.</div>
          </div>

          <div className="hero-visual" aria-label="Ilustração decorativa de código">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="visual-card">
              <div className="window-dots"><i /><i /><i /></div>
              <div className="code-lines">
                <p><span className="code-pink">const</span> objetivo = <span className="code-green">"criar"</span>;</p>
                <p><span className="code-pink">function</span> <span className="code-purple">meuFuturo</span>() {"{"}</p>
                <p className="indent">aprender();</p>
                <p className="indent">praticar();</p>
                <p className="indent">evoluir();</p>
                <p>{"}"}</p>
              </div>
              <div className="visual-sticker"><Sparkles size={18} /> feito com carinho</div>
            </div>
            <span className="decor decor-star">✳</span>
            <span className="decor decor-heart">♡</span>
            <span className="decor decor-sparkle">✦</span>
          </div>
        </section>

        <section className="section-wrap about-section" id="sobre">
          <div className="section-heading">
            <p className="eyebrow">01 / SOBRE MIM</p>
            <h2>Prazer, vamos <span>nos conhecer?</span></h2>
          </div>
          <div className="about-grid">
            <div className="about-highlight">
              <span className="about-icon"><Heart size={25} /></span>
              <h3>Curiosidade que vira código.</h3>
              <p>Sou uma pessoa gentil e esforçada, que gosta de tecnologia e está sempre buscando aprender coisas novas.</p>
            </div>
            <div className="about-text">
              <p>Atualmente, estudo Desenvolvimento de Sistemas e venho aprendendo HTML, CSS e JavaScript, além de conhecer melhor as áreas de front-end e back-end. Gosto de tecnologia e de descobrir como os sistemas são criados.</p>
              <p>Meu objetivo é aprimorar meus conhecimentos, aprender a manusear melhor as ferramentas e tecnologias da área e ganhar experiência desenvolvendo projetos.</p>
              <div className="about-tags"><span>gentileza</span><span>dedicação</span><span>tecnologia</span></div>
            </div>
          </div>
        </section>

        <section className="skills-section" id="habilidades">
          <div className="section-wrap">
            <div className="section-heading">
              <p className="eyebrow">02 / HABILIDADES</p>
              <h2>Conhecimentos que estou <span>desenvolvendo.</span></h2>
              <p className="section-description">Áreas e linguagens que fazem parte da minha formação em Desenvolvimento de Sistemas.</p>
            </div>
            <div className="skills-grid">
              {skills.map(({ name, detail, icon: Icon }) => (
                <article className="skill-card" key={name}>
                  <span className="skill-icon"><Icon size={21} /></span>
                  <div><h3>{name}</h3><p>{detail}</p></div>
                  <span className="skill-arrow">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-wrap projects-section" id="projetos">
          <div className="section-heading projects-heading">
            <div><p className="eyebrow">03 / PROJETOS</p><h2>Projetos e experiências <span>da minha jornada.</span></h2></div>
            <a className="text-link" href={githubUrl} target="_blank" rel="noreferrer">Ver repositório no GitHub <ArrowUpRight size={17} /></a>
          </div>
          <article className="project-card">
            <div className="project-art">
              <div className="project-window">
                <div className="window-dots"><i /><i /><i /></div>
                <div className="project-preview">
                  <span className="preview-flower">✿</span>
                  <span className="preview-title">Inova Tec<br />Assinatura Digital<span>♡</span></span>
                  <span className="preview-caption">PROJETO INOVA TEC</span>
                </div>
              </div>
              <span className="project-orbit">✦</span>
            </div>
            <div className="project-info">
              <span className="project-label">PROJETO / EXPERIÊNCIA • 01</span>
              <h3>Inova Tec — Assinatura Digital</h3>
              <p>Projeto ou atividade relacionado à assinatura digital, que faz parte das experiências da minha trajetória de aprendizado em tecnologia.</p>
              <div className="tech-list"><span>Tecnologia</span><span>Inovação</span><span>Assinatura digital</span></div>
              <a className="project-link" href={githubUrl} target="_blank" rel="noreferrer">Acessar código <ArrowUpRight size={17} /></a>
            </div>
          </article>
          <p className="projects-footnote"><Sparkles size={16} /> Novos projetos serão adicionados conforme eu avançar nos estudos.</p>
        </section>

        <section className="contact-section" id="contato">
          <div className="section-wrap contact-inner">
            <div>
              <p className="eyebrow">04 / CONTATO</p>
              <h2>Vamos criar algo <span>legal juntos?</span></h2>
              <p>Você pode acompanhar meus estudos e projetos pelo GitHub.</p>
            </div>
            <a className="button button-light" href={githubProfileUrl} target="_blank" rel="noreferrer"><Github size={19} /> Meu GitHub <ArrowUpRight size={17} /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="brand footer-brand" href="#inicio"><span className="brand-mark"><Code2 size={17} /></span><span>meu<span className="brand-accent">portfólio</span><span className="brand-heart">♡</span></span></a>
        <p>Laura Steiner • Estudante de Desenvolvimento de Sistemas</p>
        <a className="back-top" href="#inicio" aria-label="Voltar ao topo">↑</a>
      </footer>
    </div>
  );
}

export default App;
