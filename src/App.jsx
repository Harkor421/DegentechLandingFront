import React, { useState, useEffect } from "react";

export default function App() {
  const projects = [
    {
      title: "Smart Factory Dashboard",
      tag: "SaaS • Manufacturing",
      description:
        "Real-time OEE, maintenance tracking, and production analytics for multi-plant operations.",
      image:
        "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "3D Printed Robotics Housing",
      tag: "3D Manufacturing • Hardware",
      description:
        "High-strength, lightweight casings for industrial robotic arms, fully optimized for FDM printing.",
      image:
        "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Fintech Trading Platform",
      tag: "Custom Software • Fintech",
      description:
        "Latency-optimized trading tools, multi-exchange integrations, and custom risk dashboards.",
      image:
        "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Rapid Prototype Lab",
      tag: "3D Printing Lab • R&D",
      description:
        "On-demand prototyping for startups: from concept CAD to functional parts in days, not weeks.",
      image:
        "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
  ];

  const [projectIndex, setProjectIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setProjectIndex((prev) => (prev + 1) % projects.length);
    }, 6000);
    return () => clearInterval(id);
  }, [projects.length]);

  const currentProject = projects[projectIndex];

  return (
    <>
      <div className="app">
        <header className="nav">
          <div className="nav-left">
            <div className="logo-mark">
              <img src="/logo.png" alt="DegenTech logo" />
            </div>
            <div className="logo-text">
              <span className="logo-title">DegenTech</span>
              <span className="logo-subtitle">Software & 3D Manufacturing</span>
            </div>
          </div>

          <nav className="nav-links">
            <a href="#services">Services</a>
            <a href="#software">Software</a>
            <a href="#manufacturing">3D Lab</a>
            <a href="#process">Process</a>
            <a href="#work">Work</a>
            <a href="#contact" className="nav-cta">
              Contact
            </a>
          </nav>
        </header>

        {/* HERO */}
        <section className="hero">
          <div className="hero-glow" />
          <div className="hero-content">
            <div className="hero-left">
              <p className="eyebrow">DEGENTECH • BUILT FOR BUILDERS</p>
              <h1>
                We build <span className="accent">software</span> and{" "}
                <span className="accent">3D hardware</span> that actually ships.
              </h1>
              <p className="hero-text">
                DegenTech is a full-stack product studio focused on high-impact
                apps, SaaS platforms, and 3D-printed hardware. From idea to
                deployed code and physical products on your desk.
              </p>

              <div className="hero-cta-row">
                <a href="#contact" className="btn primary">
                  Get a project quote
                </a>
                <a href="#work" className="btn ghost">
                  View recent work
                </a>
              </div>

              <div className="hero-metrics">
                <div className="metric">
                  <span className="metric-value">40+</span>
                  <span className="metric-label">Launched products</span>
                </div>
                <div className="metric">
                  <span className="metric-value">10x</span>
                  <span className="metric-label">Faster prototyping</span>
                </div>
                <div className="metric">
                  <span className="metric-value">24/7</span>
                  <span className="metric-label">Print farm uptime</span>
                </div>
              </div>
            </div>

            <div className="hero-right">
              <div className="hero-card hero-card-main">
                <div className="hero-card-header">
                  <span className="pill pill-live">Live build</span>
                  <span className="hero-card-title">
                    Sprint: SaaS + 3D Prototype
                  </span>
                </div>
                <div className="hero-card-body">
                  <div className="hero-card-row">
                    <div className="hero-chip">
                      <span className="icon-circle">
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="icon"
                        >
                          <path d="M4 4h16v2H4zm0 7h16v2H4zm0 7h16v2H4z" />
                        </svg>
                      </span>
                      <div>
                        <p className="chip-label">SaaS backend</p>
                        <p className="chip-sub">
                          Node • React • Postgres • Cloud
                        </p>
                      </div>
                    </div>
                    <div className="hero-chip">
                      <span className="icon-circle">
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="icon"
                        >
                          <path d="M4 4h16v10H4zM6 16h12v2H6zM9 19h6v1H9z" />
                        </svg>
                      </span>
                      <div>
                        <p className="chip-label">3D manufacturing</p>
                        <p className="chip-sub">
                          FDM • Resin • Functional prototypes
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hero-status-row">
                    <div className="status-item">
                      <span className="status-dot" />
                      <span>CI pipeline green</span>
                    </div>
                    <div className="status-item">
                      <span className="status-dot secondary" />
                      <span>Printers: 3/3 online</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hero-card hero-card-image">
                <img
                  src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="3D printer running a job"
                />
                <div className="hero-overlay-tag">
                  <span className="dot" />
                  Live print batch • 124 units
                </div>
              </div>
            </div>
          </div>

          <div className="hero-partners">
            <span className="partners-label">Trusted by teams building:</span>
            <div className="partners-row">
              <span className="partner-pill">SaaS dashboards</span>
              <span className="partner-pill">Robotics & IoT</span>
              <span className="partner-pill">Manufacturing 4.0</span>
              <span className="partner-pill">Crypto & DeFi tooling</span>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="section">
          <div className="section-header">
            <p className="eyebrow">WHAT WE DO</p>
            <h2>From concept to code to physical product.</h2>
            <p className="section-sub">
              DegenTech combines a software studio and 3D manufacturing lab
              under one roof. We build opinionated, production-ready products
              with clear timelines and transparent roadmaps.
            </p>
          </div>

          <div className="cards-grid">
            <div className="card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" className="icon">
                  <path d="M4 4h16v4H4zM4 10h7v10H4zM13 10h7v10h-7z" />
                </svg>
              </div>
              <h3>Custom Software & SaaS</h3>
              <p>
                We architect and ship full-stack web apps, APIs, internal tools,
                and customer-facing SaaS products tailored to your business.
              </p>
              <ul className="card-list">
                <li>Product strategy & UX flows.</li>
                <li>React, Node, TypeScript, Python.</li>
                <li>Billing, auth, analytics, admin panels.</li>
              </ul>
            </div>

            <div className="card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" className="icon">
                  <path d="M4 18V6l8-4 8 4v12l-8 4z" />
                </svg>
              </div>
              <h3>3D Manufacturing & Prototyping</h3>
              <p>
                We take your product idea from sketch or CAD file to high-quality,
                functional 3D-printed parts ready for validation.
              </p>
              <ul className="card-list">
                <li>Print farm for rapid iteration.</li>
                <li>Material selection & strength tuning.</li>
                <li>Mechanical fit, tolerances & finishing.</li>
              </ul>
            </div>

            <div className="card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" className="icon">
                  <path d="M12 3l9 4.5v9L12 21 3 16.5v-9z" />
                </svg>
              </div>
              <h3>Productized Services & APIs</h3>
              <p>
                We turn your internal workflows into clean, documented APIs and
                productized platforms that scale with your clients.
              </p>
              <ul className="card-list">
                <li>API design & documentation.</li>
                <li>Usage-based pricing & metering.</li>
                <li>Multi-tenant architecture & RBAC.</li>
              </ul>
            </div>

            <div className="card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" className="icon">
                  <path d="M6 7l6-4 6 4v10l-6 4-6-4zM6 7l6 4 6-4" />
                </svg>
              </div>
              <h3>R&D Partnerships</h3>
              <p>
                Embedded teams for ambitious companies that need a technical
                partner to explore new products and hardware ideas.
              </p>
              <ul className="card-list">
                <li>Experiment design & validation.</li>
                <li>CAD + software co-development.</li>
                <li>Long-term product roadmaps.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SOFTWARE SECTION */}
        <section id="software" className="section split-section">
          <div className="split-text">
            <p className="eyebrow">SOFTWARE STUDIO</p>
            <h2>We build opinionated software that feels fast and intentional.</h2>
            <p className="section-sub">
              Personalized dashboards, customer portals, internal tools, real-time
              analytics, and full SaaS products. We obsess over details: from
              database schema and API contracts to micro-animations and loading
              states.
            </p>
            <div className="pill-row">
              <span className="tech-pill">React / Next.js</span>
              <span className="tech-pill">Node.js / TypeScript</span>
              <span className="tech-pill">Postgres / SQL</span>
              <span className="tech-pill">REST & WebSockets</span>
            </div>

            <div className="bullets">
              <div className="bullet">
                <span className="bullet-icon">✓</span>
                <div>
                  <p className="bullet-title">Custom SaaS for your niche</p>
                  <p className="bullet-text">
                    Turn your processes into subscription products with
                    onboarding, billing, and admin views built-in.
                  </p>
                </div>
              </div>
              <div className="bullet">
                <span className="bullet-icon">✓</span>
                <div>
                  <p className="bullet-title">Internal tools that don&apos;t suck</p>
                  <p className="bullet-text">
                    Replace spreadsheets and random scripts with clean dashboards
                    your team actually wants to use.
                  </p>
                </div>
              </div>
              <div className="bullet">
                <span className="bullet-icon">✓</span>
                <div>
                  <p className="bullet-title">Scalable from day one</p>
                  <p className="bullet-text">
                    Cloud-native, container-ready, instrumented with logs,
                    metrics, and error tracking from the start.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="split-media">
            <div className="code-window">
              <div className="code-header">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
                <span className="code-title">analytics-dashboard.tsx</span>
              </div>
              <pre className="code-block">
{`const usage = await api.metrics.get({
  from: "2025-01-01",
  to: "2025-01-07",
});

return (
  <UsageChart
    data={usage}
    highlightAlerts
    groupBy="factory"
  />
);`}
              </pre>
            </div>
            <img
              className="software-img"
              src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Developer working on laptop"
            />
          </div>
        </section>

        {/* MANUFACTURING SECTION */}
        <section id="manufacturing" className="section split-section reverse">
          <div className="split-media">
            <img
              className="manufacturing-img"
              src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="3D printed parts on a table"
            />
            <div className="stats-card">
              <p className="stats-title">Print farm snapshot</p>
              <div className="stats-row">
                <div>
                  <p className="stats-value">3</p>
                  <p className="stats-label">Printers online</p>
                </div>
                <div>
                  <p className="stats-value">18h</p>
                  <p className="stats-label">Longest job</p>
                </div>
                <div>
                  <p className="stats-value">0.2 mm</p>
                  <p className="stats-label">Layer height</p>
                </div>
              </div>
            </div>
          </div>

          <div className="split-text">
            <p className="eyebrow">3D MANUFACTURING LAB</p>
            <h2>Iterate on physical products without waiting on factories.</h2>
            <p className="section-sub">
              We bridge the gap between code and hardware with in-house 3D
              printing. Test ergonomics, fit, strength, and assembly before
              committing to tooling or large-scale production.
            </p>

            <div className="pill-row">
              <span className="tech-pill">FDM & Resin</span>
              <span className="tech-pill">PLA / PETG / ABS</span>
              <span className="tech-pill">Functional prototypes</span>
              <span className="tech-pill">Low-volume runs</span>
            </div>

            <ul className="card-list">
              <li>CAD support (STEP, STL, OBJ) and light design cleanup.</li>
              <li>Mechanical validation for clips, hinges, and assemblies.</li>
              <li>
                Color and finish options for client-facing demo hardware and
                trade-show pieces.
              </li>
            </ul>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="section">
          <div className="section-header">
            <p className="eyebrow">HOW WE WORK</p>
            <h2>A simple, transparent process.</h2>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-badge">01</div>
              <h3>Discovery & scoping</h3>
              <p>
                We map your goals, sketch user flows, review existing systems,
                and define what success actually looks like.
              </p>
            </div>
            <div className="timeline-item">
              <div className="timeline-badge">02</div>
              <h3>Design & architecture</h3>
              <p>
                UX wireframes, technical architecture, and print requirements
                planned together to avoid surprises later.
              </p>
            </div>
            <div className="timeline-item">
              <div className="timeline-badge">03</div>
              <h3>Build & iterate</h3>
              <p>
                We ship in weekly slices: working software, printed parts, and
                clear updates instead of vague progress bars.
              </p>
            </div>
            <div className="timeline-item">
              <div className="timeline-badge">04</div>
              <h3>Launch & support</h3>
              <p>
                Deploy, monitor, and refine. We stay on to help operate, tweak,
                and extend your product as it grows.
              </p>
            </div>
          </div>
        </section>

        {/* PROJECT SLIDER / GALLERY */}
        <section id="work" className="section">
          <div className="section-header">
            <p className="eyebrow">SELECTED WORK</p>
            <h2>Software + hardware in one timeline.</h2>
            <p className="section-sub">
              A quick glimpse of how we combine digital products and physical
              prototyping for different industries.
            </p>
          </div>

          <div className="slider">
            <div className="slider-main">
              <div className="slider-image-wrapper">
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="slider-image"
                />
                <div className="slider-tag">{currentProject.tag}</div>
              </div>
              <div className="slider-info">
                <h3>{currentProject.title}</h3>
                <p>{currentProject.description}</p>
                <div className="slider-dots">
                  {projects.map((_, idx) => (
                    <button
                      key={idx}
                      className={
                        "slider-dot" +
                        (idx === projectIndex ? " slider-dot-active" : "")
                      }
                      onClick={() => setProjectIndex(idx)}
                      aria-label={`Go to project ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="slider-thumbs">
              {projects.map((p, idx) => (
                <button
                  key={p.title}
                  className={
                    "thumb" + (idx === projectIndex ? " thumb-active" : "")
                  }
                  onClick={() => setProjectIndex(idx)}
                >
                  <span className="thumb-index">{idx + 1}</span>
                  <div className="thumb-text">
                    <p className="thumb-title">{p.title}</p>
                    <p className="thumb-tag">{p.tag}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* CTA + CONTACT */}
        <section id="contact" className="section contact-section">
          <div className="contact-grid">
            <div className="contact-left">
              <p className="eyebrow">LET&apos;S BUILD</p>
              <h2>Tell us what you want to launch next.</h2>
              <p className="section-sub">
                Share a rough idea, Figma file, Notion doc, or CAD export.
                We&apos;ll come back with a clear scope, timeline, and
                budget—no fluff.
              </p>

              <div className="contact-cards">
                <div className="contact-card">
                  <h3>Contact information</h3>
                  <ul className="contact-list">
                    <li>
                      <span className="contact-label">Email</span>
                      <a href="mailto:hello@degentech.dev">
                        aerustudiohelp@gmail.com
                      </a>
                    </li>
                    <li>
                      <span className="contact-label">Phone</span>
                      <a href="tel:+1234567890">+1 (234) 567-890</a>
                    </li>
                    <li>
                      <span className="contact-label">Location</span>
                      <span>Global / Remote-first</span>
                    </li>
                  </ul>
                </div>

                <div className="contact-card">
                  <h3>Project types</h3>
                  <ul className="card-list small">
                    <li>New SaaS or internal platform.</li>
                    <li>Prototype for hardware or robotics.</li>
                    <li>Custom integrations & automation.</li>
                    <li>Print runs for early customers.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="contact-right">
              <form
                className="contact-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(
                    "Thanks for reaching out to DegenTech! (Wire this up to your backend or form tool.)"
                  );
                }}
              >
                <div className="form-row">
                  <label>
                    Name
                    <input type="text" placeholder="Your name" required />
                  </label>
                  <label>
                    Company
                    <input type="text" placeholder="Your company" />
                  </label>
                </div>
                <div className="form-row">
                  <label>
                    Email
                    <input
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </label>
                  <label>
                    Project type
                    <select defaultValue="SaaS / Web app">
                      <option>SaaS / Web app</option>
                      <option>Internal tool</option>
                      <option>3D prototype</option>
                      <option>Software + 3D combo</option>
                      <option>Other</option>
                    </select>
                  </label>
                </div>
                <label>
                  Brief project description
                  <textarea
                    rows="4"
                    placeholder="What do you want to build? Timelines, budget, and any links are helpful."
                  />
                </label>
                <button type="submit" className="btn primary full">
                  Send message
                </button>
                <p className="form-footnote">
                  We typically respond within 1–2 business days with next steps.
                </p>
              </form>
            </div>
          </div>
        </section>

        <footer className="footer">
          <span>© {new Date().getFullYear()} DegenTech. All rights reserved.</span>
          <span className="footer-links">
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </span>
        </footer>
      </div>

      {/* INLINE CSS */}
      <style>{`
        * {
          box-sizing: border-box;
        }

        :root {
          color-scheme: dark;
        }

        body {
          margin: 0;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text",
            "Segoe UI", sans-serif;
          background: radial-gradient(circle at top, #14161f 0, #050509 50%, #020308 100%);
          color: #f5f5f6;
        }

        .app {
          min-height: 100vh;
          background: radial-gradient(circle at top, #161825 0, #05050a 40%, #020308 100%);
          color: #f5f7ff;
          padding-bottom: 64px;
        }

        .accent {
          color: #4ae3ff;
        }

        .nav {
          position: sticky;
          top: 0;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 7vw;
          backdrop-filter: blur(16px);
          background: linear-gradient(
            to bottom,
            rgba(5, 5, 12, 0.96),
            rgba(5, 5, 12, 0.6),
            transparent
          );
          border-bottom: 1px solid rgba(88, 104, 255, 0.2);
        }

        .nav-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .logo-mark {
          width: 34px;
          height: 34px;
          border-radius: 999px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          box-shadow: 0 0 24px rgba(88, 104, 255, 0.7);
        }

        .logo-mark img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .logo-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .logo-title {
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          font-size: 12px;
        }

        .logo-subtitle {
          font-size: 11px;
          color: #9da3c2;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 18px;
          font-size: 13px;
        }

        .nav-links a {
          color: #d2d7ff;
          text-decoration: none;
          padding: 6px 10px;
          border-radius: 999px;
          transition: color 0.2s ease, background 0.2s ease, transform 0.1s ease;
        }

        .nav-links a:hover {
          color: #ffffff;
          background: rgba(74, 227, 255, 0.08);
          transform: translateY(-1px);
        }

        .nav-cta {
          border: 1px solid rgba(74, 227, 255, 0.7);
          background: radial-gradient(circle at top left, rgba(74, 227, 255, 0.18), transparent);
        }

        .nav-cta:hover {
          background: linear-gradient(135deg, #4ae3ff, #5868ff);
          color: #050509;
        }

        .hero {
          padding: 32px 7vw 64px;
          position: relative;
          overflow: hidden;
        }

        .hero-glow {
          position: absolute;
          inset: -200px;
          background:
            radial-gradient(circle at 10% 0%, rgba(41, 237, 255, 0.18), transparent 55%),
            radial-gradient(circle at 90% 0%, rgba(109, 82, 255, 0.2), transparent 55%),
            radial-gradient(circle at 50% 110%, rgba(255, 77, 138, 0.08), transparent 55%);
          opacity: 0.9;
          pointer-events: none;
        }

        .hero-content {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
          gap: 40px;
          align-items: center;
        }

        .hero-left h1 {
          font-size: clamp(32px, 4vw, 44px);
          line-height: 1.1;
          margin: 8px 0 16px;
        }

        .eyebrow {
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-size: 11px;
          color: #9ca3ff;
        }

        .hero-text {
          font-size: 15px;
          color: #c1c5ea;
          max-width: 520px;
        }

        .hero-cta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 22px;
          margin-bottom: 20px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 9px 18px;
          border-radius: 999px;
          font-size: 13px;
          border: 1px solid transparent;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.2s ease, transform 0.1s ease, box-shadow 0.2s ease, border 0.2s ease;
        }

        .btn.primary {
          background: linear-gradient(135deg, #4ae3ff, #5868ff);
          color: #050509;
          box-shadow: 0 0 24px rgba(74, 227, 255, 0.45);
        }

        .btn.primary:hover {
          transform: translateY(-1px);
          box-shadow: 0 0 32px rgba(74, 227, 255, 0.65);
        }

        .btn.ghost {
          border-color: rgba(158, 163, 255, 0.5);
          color: #d3d5ff;
          background: rgba(7, 9, 28, 0.9);
        }

        .btn.ghost:hover {
          background: rgba(88, 104, 255, 0.16);
        }

        .btn.full {
          width: 100%;
        }

        .hero-metrics {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
          margin-top: 10px;
        }

        .metric {
          min-width: 120px;
        }

        .metric-value {
          font-size: 20px;
          font-weight: 600;
        }

        .metric-label {
          font-size: 12px;
          color: #9ba0c5;
        }

        .hero-right {
          position: relative;
          display: grid;
          gap: 18px;
        }

        .hero-card {
          border-radius: 16px;
          background: radial-gradient(circle at top left, rgba(90, 88, 255, 0.3), #050613);
          border: 1px solid rgba(120, 138, 255, 0.5);
          padding: 16px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 22px 60px rgba(0, 0, 0, 0.65);
          animation: floatUp 0.9s ease-out forwards;
        }

        .hero-card-main {
          transform-origin: top right;
        }

        .hero-card-image {
          padding: 0;
          overflow: hidden;
          background: #050613;
        }

        .hero-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .pill {
          padding: 3px 9px;
          border-radius: 999px;
          font-size: 10px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .pill-live {
          background: rgba(67, 217, 173, 0.22);
          color: #a6ffe6;
        }

        .hero-card-title {
          font-size: 13px;
          color: #e1e3ff;
        }

        .hero-card-body {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .hero-card-row {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .hero-chip {
          display: flex;
          gap: 10px;
          padding: 8px;
          border-radius: 12px;
          background: rgba(5, 8, 28, 0.9);
          border: 1px solid rgba(110, 123, 255, 0.5);
        }

        .icon-circle {
          width: 30px;
          height: 30px;
          border-radius: 999px;
          background: radial-gradient(circle at top, #4ae3ff, #5868ff);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon {
          width: 16px;
          height: 16px;
          fill: #050509;
        }

        .chip-label {
          font-size: 12px;
          font-weight: 500;
        }

        .chip-sub {
          font-size: 11px;
          color: #9ea3d4;
        }

        .hero-status-row {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          color: #a9b0f1;
        }

        .status-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: #55ffb4;
          box-shadow: 0 0 10px rgba(85, 255, 180, 0.7);
        }

        .status-dot.secondary {
          background: #4ae3ff;
          box-shadow: 0 0 10px rgba(74, 227, 255, 0.7);
        }

        .hero-card-image img {
          width: 100%;
          height: 190px;
          object-fit: cover;
          display: block;
          filter: contrast(1.05) saturate(1.05);
          transform: scale(1.03);
        }

        .hero-overlay-tag {
          position: absolute;
          left: 10px;
          bottom: 10px;
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(5, 6, 26, 0.88);
          font-size: 11px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border: 1px solid rgba(74, 227, 255, 0.5);
        }

        .hero-overlay-tag .dot {
          width: 7px;
          height: 7px;
          border-radius: 999px;
          background: #4ae3ff;
        }

        .hero-partners {
          position: relative;
          margin-top: 44px;
          padding-top: 18px;
          border-top: 1px solid rgba(88, 104, 255, 0.35);
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px 18px;
          font-size: 12px;
          color: #9ca3ff;
        }

        .partners-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .partner-pill {
          padding: 5px 9px;
          border-radius: 999px;
          border: 1px solid rgba(88, 104, 255, 0.3);
          background: rgba(10, 12, 35, 0.9);
        }

        .section {
          padding: 48px 7vw;
          position: relative;
        }

        .section:nth-of-type(odd) {
          background: radial-gradient(circle at top, rgba(30, 32, 74, 0.35), transparent 60%);
        }

        .section-header {
          max-width: 680px;
          margin-bottom: 26px;
        }

        .section-header h2 {
          font-size: 24px;
          margin: 8px 0;
        }

        .section-sub {
          font-size: 14px;
          color: #b0b4d9;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
          gap: 18px;
        }

        .card {
          background: radial-gradient(circle at top left, rgba(89, 96, 255, 0.12), #050712);
          border-radius: 16px;
          padding: 16px 16px 18px;
          border: 1px solid rgba(89, 96, 255, 0.5);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.6);
          transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease,
            background 0.18s ease;
        }

        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.75);
          border-color: rgba(74, 227, 255, 0.9);
          background: radial-gradient(circle at top left, rgba(74, 227, 255, 0.22), #050712);
        }

        .card-icon {
          width: 36px;
          height: 36px;
          border-radius: 12px;
          background: radial-gradient(circle at top, #4ae3ff, #5868ff);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
        }

        .card h3 {
          margin: 0 0 6px;
          font-size: 16px;
        }

        .card p {
          margin: 0 0 8px;
          font-size: 13px;
          color: #b9bdeb;
        }

        .card-list {
          padding-left: 18px;
          margin: 0;
          list-style: disc;
        }

        .card-list li {
          font-size: 12px;
          color: #a6a9d8;
          margin-bottom: 4px;
        }

        .card-list.small li {
          font-size: 11px;
        }

        .split-section {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(0, 1.1fr);
          gap: 36px;
          align-items: center;
        }

        .split-section.reverse {
          grid-template-columns: minmax(0, 1.1fr) minmax(0, 1.2fr);
        }

        .split-text h2 {
          font-size: 22px;
          margin: 8px 0 12px;
        }

        .pill-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 12px 0 16px;
        }

        .tech-pill {
          font-size: 11px;
          border-radius: 999px;
          padding: 5px 10px;
          border: 1px solid rgba(122, 129, 255, 0.6);
          background: rgba(5, 8, 30, 0.9);
          color: #dfe3ff;
        }

        .bullets {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .bullet {
          display: flex;
          gap: 10px;
        }

        .bullet-icon {
          width: 20px;
          height: 20px;
          border-radius: 999px;
          background: rgba(67, 217, 173, 0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          margin-top: 2px;
        }

        .bullet-title {
          font-size: 13px;
          margin: 0 0 2px;
        }

        .bullet-text {
          font-size: 12px;
          color: #b2b5e1;
          margin: 0;
        }

        .split-media {
          position: relative;
          display: grid;
          gap: 12px;
        }

        .code-window {
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(102, 112, 255, 0.8);
          background: radial-gradient(circle at top left, rgba(74, 227, 255, 0.22), #050616);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.78);
        }

        .code-header {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 10px;
          background: rgba(3, 4, 15, 0.95);
          font-size: 11px;
          color: #9ca4ff;
        }

        .code-header .dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
        }

        .code-header .dot.red {
          background: #ff5f57;
        }

        .code-header .dot.yellow {
          background: #febc2e;
        }

        .code-header .dot.green {
          background: #28c840;
        }

        .code-title {
          margin-left: 6px;
        }

        .code-block {
          margin: 0;
          padding: 12px;
          font-size: 11px;
          line-height: 1.4;
          font-family: "SF Mono", ui-monospace, Menlo, Monaco, Consolas, "Liberation Mono",
            "Courier New", monospace;
          background: radial-gradient(circle at top, rgba(21, 24, 57, 0.95), #040414);
          color: #e1e7ff;
          white-space: pre;
        }

        .software-img {
          width: 100%;
          border-radius: 16px;
          border: 1px solid rgba(80, 94, 255, 0.6);
          object-fit: cover;
          max-height: 220px;
        }

        .manufacturing-img {
          width: 100%;
          border-radius: 16px;
          border: 1px solid rgba(80, 94, 255, 0.6);
          object-fit: cover;
          max-height: 240px;
        }

        .stats-card {
          position: absolute;
          right: 12px;
          bottom: 12px;
          padding: 10px 12px;
          border-radius: 14px;
          border: 1px solid rgba(74, 227, 255, 0.7);
          background: rgba(3, 4, 20, 0.95);
          font-size: 11px;
        }

        .stats-title {
          margin: 0 0 6px;
          color: #cfd5ff;
        }

        .stats-row {
          display: flex;
          gap: 12px;
        }

        .stats-value {
          margin: 0;
          font-weight: 600;
        }

        .stats-label {
          margin: 0;
          color: #a3a7d9;
          font-size: 10px;
        }

        .timeline {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 16px;
        }

        .timeline-item {
          position: relative;
          padding: 14px 14px 16px;
          border-radius: 16px;
          background: radial-gradient(circle at top left, rgba(89, 96, 255, 0.18), #050712);
          border: 1px solid rgba(109, 119, 255, 0.7);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.6);
          overflow: hidden;
        }

        .timeline-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          font-size: 10px;
          border-radius: 999px;
          padding: 4px 9px;
          border: 1px solid rgba(74, 227, 255, 0.7);
          color: #9ee9ff;
        }

        .timeline-item h3 {
          margin: 0 0 6px;
          font-size: 14px;
        }

        .timeline-item p {
          margin: 0;
          font-size: 12px;
          color: #b7bce8;
        }

        .slider {
          border-radius: 20px;
          border: 1px solid rgba(94, 108, 255, 0.8);
          background: radial-gradient(circle at top left, rgba(74, 227, 255, 0.16), #050614);
          padding: 16px;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.75);
        }

        .slider-main {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
          gap: 18px;
          margin-bottom: 14px;
        }

        .slider-image-wrapper {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
        }

        .slider-image {
          width: 100%;
          height: 220px;
          object-fit: cover;
          transform: scale(1.02);
          transition: transform 0.3s ease;
        }

        .slider-image-wrapper:hover .slider-image {
          transform: scale(1.05);
        }

        .slider-tag {
          position: absolute;
          left: 10px;
          bottom: 10px;
          padding: 5px 10px;
          border-radius: 999px;
          background: rgba(0, 0, 0, 0.8);
          font-size: 11px;
          border: 1px solid rgba(74, 227, 255, 0.7);
        }

        .slider-info h3 {
          margin: 0 0 6px;
          font-size: 16px;
        }

        .slider-info p {
          margin: 0 0 10px;
          font-size: 13px;
          color: #c3c7ec;
        }

        .slider-dots {
          display: flex;
          gap: 6px;
          align-items: center;
        }

        .slider-dot {
          width: 9px;
          height: 9px;
          border-radius: 999px;
          border: 1px solid rgba(123, 134, 255, 0.7);
          background: transparent;
          cursor: pointer;
          padding: 0;
        }

        .slider-dot-active {
          background: #4ae3ff;
          box-shadow: 0 0 12px rgba(74, 227, 255, 0.7);
          border-color: #4ae3ff;
        }

        .slider-thumbs {
          display: flex;
          flex-wrap: nowrap;
          overflow-x: auto;
          gap: 10px;
          padding-bottom: 4px;
        }

        .thumb {
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 10px;
          border-radius: 999px;
          background: rgba(7, 9, 30, 0.9);
          border: 1px solid transparent;
          cursor: pointer;
          min-width: 200px;
        }

        .thumb-active {
          border-color: rgba(74, 227, 255, 0.8);
          background: rgba(30, 38, 86, 0.98);
        }

        .thumb-index {
          width: 18px;
          height: 18px;
          border-radius: 999px;
          background: rgba(74, 227, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
        }

        .thumb-text {
          text-align: left;
        }

        .thumb-title {
          margin: 0;
          font-size: 12px;
        }

        .thumb-tag {
          margin: 0;
          font-size: 11px;
          color: #9ba1d4;
        }

        .contact-section {
          padding-bottom: 40px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(0, 1.1fr);
          gap: 30px;
          align-items: flex-start;
        }

        .contact-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
          gap: 12px;
          margin-top: 16px;
        }

        .contact-card {
          border-radius: 16px;
          padding: 12px 14px;
          background: radial-gradient(circle at top left, rgba(88, 104, 255, 0.18), #050712);
          border: 1px solid rgba(107, 118, 255, 0.7);
        }

        .contact-card h3 {
          margin: 0 0 8px;
          font-size: 13px;
        }

        .contact-list {
          list-style: none;
          padding: 0;
          margin: 0;
          font-size: 12px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .contact-label {
          display: block;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #9ba1d7;
        }

        .contact-list a {
          color: #e6ebff;
          text-decoration: none;
        }

        .contact-list a:hover {
          text-decoration: underline;
        }

        .contact-form {
          border-radius: 18px;
          padding: 18px;
          border: 1px solid rgba(99, 114, 255, 0.9);
          background: radial-gradient(circle at top left, rgba(74, 227, 255, 0.18), #050615);
          box-shadow: 0 22px 60px rgba(0, 0, 0, 0.78);
        }

        .form-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
          margin-bottom: 10px;
        }

        .contact-form label {
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-size: 12px;
        }

        .contact-form input,
        .contact-form select,
        .contact-form textarea {
          border-radius: 10px;
          border: 1px solid rgba(118, 131, 255, 0.8);
          padding: 7px 9px;
          background: rgba(6, 8, 30, 0.95);
          color: #eef1ff;
          font-family: inherit;
          font-size: 12px;
          outline: none;
          transition: border 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
        }

        .contact-form input:focus,
        .contact-form select:focus,
        .contact-form textarea:focus {
          border-color: #4ae3ff;
          box-shadow: 0 0 0 1px rgba(74, 227, 255, 0.6);
          background: rgba(5, 7, 26, 1);
        }

        .contact-form textarea {
          resize: vertical;
          min-height: 80px;
        }

        .form-footnote {
          margin-top: 8px;
          font-size: 11px;
          color: #a0a4d8;
        }

        .footer {
          padding: 18px 7vw 0;
          border-top: 1px solid rgba(72, 84, 196, 0.6);
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 11px;
          color: #a5aad6;
        }

        .footer-links {
          display: flex;
          gap: 14px;
        }

        .footer-links a {
          color: #c6cbff;
          text-decoration: none;
        }

        .footer-links a:hover {
          text-decoration: underline;
        }

        @keyframes floatUp {
          from {
            opacity: 0;
            transform: translateY(16px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (max-width: 960px) {
          .nav {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }

          .hero-content {
            grid-template-columns: minmax(0, 1fr);
          }

          .hero-right {
            order: -1;
          }

          .split-section,
          .split-section.reverse {
            grid-template-columns: minmax(0, 1fr);
          }

          .software-img,
          .manufacturing-img {
            max-height: 200px;
          }

          .slider-main {
            grid-template-columns: minmax(0, 1fr);
          }

          .contact-grid {
            grid-template-columns: minmax(0, 1fr);
          }

          .footer {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
          }
        }

        @media (max-width: 640px) {
          .nav-links {
            display: none;
          }

          .hero {
            padding-top: 24px;
          }

          .section {
            padding-inline: 20px;
          }

          .hero-card-image img {
            height: 160px;
          }

          .slider-image {
            height: 190px;
          }

          .form-row {
            grid-template-columns: minmax(0, 1fr);
          }
        }
      `}</style>
    </>
  );
}
