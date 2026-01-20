import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function App() {
  const [isVisible, setIsVisible] = useState({});
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.dataset.section]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-section]").forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const projects = [
    {
      title: "Smart Factory Dashboard",
      tag: "SaaS",
      description: "Real-time production analytics & OEE tracking with predictive maintenance insights",
      tech: "React • Node.js • PostgreSQL",
    },
    {
      title: "3D Robotics Housing",
      tag: "Hardware",
      description: "Industrial-grade robotic arm casings optimized for FDM printing with custom tooling",
      tech: "CAD • FDM • Material Science",
    },
    {
      title: "Trading Platform",
      tag: "Fintech",
      description: "Low-latency multi-exchange integration with real-time risk analytics",
      tech: "Python • WebSockets • Redis",
    },
  ];

  const stats = [
    { number: "50+", label: "Projects Delivered" },
    { number: "12", label: "Countries Served" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "5yr", label: "Average Partnership" },
  ];

  return (
    <div className="app">
      {/* Voxel rain particles */}
      <div className="voxel-rain"></div>

      {/* HEADER */}
      <header className="header">
        <a href="#" className="logo">degentech</a>
        <nav className="nav">
          <a href="#services">services</a>
          <a href="#work">work</a>
          <a href="#contact">contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero" data-section="hero">
        <div className={`hero-content ${isVisible.hero ? "visible" : ""}`}>
          <h1 className="hero-title">degentech</h1>
          <p className="hero-subtitle">Software & hardware for the autonomous economy</p>
          <a href="#work" className="btn-launch">View Projects</a>
        </div>
      </section>

      {/* STATS */}
      <section className="stats" data-section="stats">
        <div className="container">
          <div className={`stats-grid ${isVisible.stats ? "visible" : ""}`}>
            {stats.map((stat, i) => (
              <div key={i} className="stat-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services" data-section="services">
        <div className="container">
          <div className={`fade-in ${isVisible.services ? "visible" : ""}`}>
            <h2 className="section-title">Capabilities</h2>
            <div className="services-grid">
              {[
                { icon: "⚡", title: "Custom Software", desc: "SaaS, APIs & internal tools" },
                { icon: "🔷", title: "3D Manufacturing", desc: "Rapid prototyping & production" },
                { icon: "🔗", title: "IoT Integration", desc: "Hardware meets software" },
                { icon: "📊", title: "Product Strategy", desc: "From concept to launch" },
              ].map((service, i) => (
                <div key={i} className="service-card" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="work" data-section="work">
        <div className="container">
          <div className={`fade-in ${isVisible.work ? "visible" : ""}`}>
            <h2 className="section-title">Featured Projects</h2>
            <div className="project-grid">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="project-card"
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  <div className="project-tag">{project.tag}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">{project.tech}</div>
                  <div className="project-arrow">→</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process" data-section="process">
        <div className="container">
          <div className={`fade-in ${isVisible.process ? "visible" : ""}`}>
            <h2 className="section-title">Process</h2>
            <div className="timeline">
              {[
                { title: "Discover", desc: "Scope & planning" },
                { title: "Design", desc: "Architecture & UX" },
                { title: "Build", desc: "Iterative development" },
                { title: "Launch", desc: "Deploy & optimize" },
              ].map((step, i) => (
                <div key={i} className="timeline-item" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="timeline-dot"></div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact" data-section="contact">
        <div className="container">
          <div className={`fade-in ${isVisible.contact ? "visible" : ""}`}>
            <h2 className="section-title">Get Started</h2>
            <p className="section-subtitle">
              Ready to build? Let's talk about your project.
            </p>

            <div className="contact-grid">
              <div className="contact-card">
                <h3>Email</h3>
                <a href="mailto:hello@degentech.dev">admin@degentech.co</a>
              </div>
              <div className="contact-card">
                <h3>Location</h3>
                <p>Remote-first / Global</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-pattern"></div>
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/logo.png" alt="DegenTech Logo" />
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Products</h4>
              <a href="#services">Custom Software</a>
              <a href="#services">3D Manufacturing</a>
              <a href="#services">IoT Integration</a>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <a href="#work">Projects</a>
              <a href="#contact">Contact</a>
              <Link to="/privacy">Privacy Policy</Link>
            </div>
            <div className="footer-column">
              <h4>Connect</h4>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} degentech. Building the future of autonomous systems.</p>
        </div>
      </footer>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          background: rgb(29, 29, 29);
          color: #e0e0e0;
          overflow-x: hidden;
        }

        .app {
          min-height: 100vh;
          background: rgb(29, 29, 29);
          position: relative;
          overflow-x: hidden;
        }

        /* VOXEL RAIN EFFECT */
        .voxel-rain {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
          background-image:
            radial-gradient(1px 1px at 15% 20%, rgba(100, 150, 255, 0.2), transparent),
            radial-gradient(1px 1px at 80% 10%, rgba(100, 150, 255, 0.15), transparent),
            radial-gradient(1.5px 1.5px at 40% 70%, rgba(100, 150, 255, 0.2), transparent),
            radial-gradient(1px 1px at 65% 35%, rgba(100, 150, 255, 0.15), transparent),
            radial-gradient(2px 2px at 25% 60%, rgba(100, 150, 255, 0.25), transparent),
            radial-gradient(1px 1px at 90% 80%, rgba(100, 150, 255, 0.15), transparent),
            radial-gradient(1.5px 1.5px at 50% 15%, rgba(100, 150, 255, 0.2), transparent);
          background-size: 100% 100%;
          animation: voxelFall 25s linear infinite;
        }

        @keyframes voxelFall {
          0% {
            transform: translateY(-100vh);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }

        /* Subtle grid background */
        .app::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
          background-image:
            linear-gradient(90deg, transparent 99%, rgba(100, 100, 255, 0.03) 100%),
            linear-gradient(0deg, transparent 99%, rgba(100, 100, 255, 0.03) 100%);
          background-size: 60px 60px;
          opacity: 0.5;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 32px;
          position: relative;
          z-index: 2;
        }

        /* FADE IN ANIMATION */
        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* HEADER */
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 48px;
          background: rgba(29, 29, 29, 0.9);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(100, 100, 255, 0.08);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .logo {
          font-size: 16px;
          font-weight: 500;
          text-decoration: none;
          color: #fff;
          letter-spacing: 0.5px;
          transition: opacity 0.2s;
        }

        .logo:hover {
          opacity: 0.7;
        }

        .nav {
          display: flex;
          gap: 40px;
          align-items: center;
        }

        .nav a {
          text-decoration: none;
          color: #888;
          font-size: 13px;
          letter-spacing: 0.3px;
          transition: color 0.2s;
        }

        .nav a:hover {
          color: #fff;
        }

        /* HERO */
        .hero {
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
          z-index: 2;
          padding: 0 32px;
        }

        .hero-content {
          opacity: 0;
          transform: translateY(40px);
          animation: heroFadeIn 1s ease forwards;
          animation-delay: 0.2s;
        }

        @keyframes heroFadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-title {
          font-size: 80px;
          font-weight: 300;
          margin-bottom: 20px;
          letter-spacing: 2px;
          color: #fff;
        }

        .hero-subtitle {
          font-size: 16px;
          color: #888;
          margin-bottom: 40px;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
          letter-spacing: 0.3px;
        }

        .btn-launch {
          display: inline-block;
          padding: 14px 32px;
          background: rgba(100, 100, 255, 0.1);
          border: 1px solid rgba(100, 100, 255, 0.3);
          color: #6488ff;
          text-decoration: none;
          font-size: 13px;
          letter-spacing: 0.5px;
          border-radius: 6px;
          transition: all 0.3s ease;
        }

        .btn-launch:hover {
          background: rgba(100, 100, 255, 0.15);
          border-color: #6488ff;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(100, 100, 255, 0.15);
        }

        /* STATS */
        .stats {
          padding: 80px 32px;
          position: relative;
          z-index: 2;
          border-bottom: 1px solid rgba(100, 100, 255, 0.08);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 32px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s ease;
        }

        .stats-grid.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .stat-card {
          text-align: center;
          padding: 24px;
          opacity: 0;
          transform: translateY(20px);
        }

        .stats-grid.visible .stat-card {
          opacity: 1;
          transform: translateY(0);
        }

        .stat-number {
          font-size: 48px;
          font-weight: 300;
          color: #6488ff;
          margin-bottom: 8px;
          letter-spacing: -1px;
        }

        .stat-label {
          font-size: 13px;
          color: #888;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* SECTIONS */
        .section-title {
          font-size: 36px;
          font-weight: 400;
          margin-bottom: 48px;
          letter-spacing: 0.5px;
          color: #fff;
        }

        .section-subtitle {
          font-size: 15px;
          color: #888;
          margin-bottom: 40px;
          max-width: 600px;
          line-height: 1.7;
        }

        /* SERVICES */
        .services {
          padding: 120px 32px;
          position: relative;
          z-index: 2;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .service-card {
          padding: 32px 24px;
          background: rgba(40, 40, 50, 0.4);
          border-radius: 10px;
          border: 1px solid rgba(100, 100, 255, 0.1);
          transition: all 0.4s ease;
          opacity: 0;
          transform: translateY(20px);
        }

        .fade-in.visible .service-card {
          opacity: 1;
          transform: translateY(0);
        }

        .service-card:hover {
          border-color: rgba(100, 100, 255, 0.3);
          background: rgba(40, 40, 50, 0.6);
          transform: translateY(-6px);
        }

        .service-icon {
          font-size: 28px;
          margin-bottom: 16px;
          filter: grayscale(0.3);
        }

        .service-card h3 {
          font-size: 15px;
          font-weight: 500;
          margin-bottom: 8px;
          color: #fff;
        }

        .service-card p {
          font-size: 13px;
          color: #888;
          line-height: 1.6;
        }

        /* WORK */
        .work {
          padding: 120px 32px;
          position: relative;
          z-index: 2;
        }

        .project-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
        }

        .project-card {
          padding: 36px 28px;
          background: rgba(40, 40, 50, 0.4);
          border-radius: 10px;
          border: 1px solid rgba(100, 100, 255, 0.1);
          position: relative;
          cursor: pointer;
          transition: all 0.4s ease;
          display: flex;
          flex-direction: column;
          opacity: 0;
          transform: translateY(20px);
        }

        .fade-in.visible .project-card {
          opacity: 1;
          transform: translateY(0);
        }

        .project-card:hover {
          border-color: rgba(100, 100, 255, 0.4);
          background: rgba(40, 40, 50, 0.7);
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
        }

        .project-card:hover .project-arrow {
          transform: translateX(6px);
          opacity: 1;
        }

        .project-tag {
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #6488ff;
          margin-bottom: 16px;
          font-weight: 500;
        }

        .project-card h3 {
          font-size: 20px;
          font-weight: 500;
          margin-bottom: 12px;
          color: #fff;
        }

        .project-card p {
          font-size: 13px;
          color: #888;
          line-height: 1.7;
          margin-bottom: 16px;
        }

        .project-tech {
          font-size: 11px;
          color: #666;
          margin-top: 12px;
          padding-top: 12px;
          border-top: 1px solid rgba(100, 100, 255, 0.1);
          letter-spacing: 0.5px;
        }

        .project-arrow {
          margin-top: 16px;
          font-size: 20px;
          color: #6488ff;
          opacity: 0.5;
          transition: all 0.3s ease;
        }

        /* PROCESS */
        .process {
          padding: 120px 32px;
          background: rgba(35, 35, 45, 0.3);
          position: relative;
          z-index: 2;
        }

        .timeline {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 32px;
        }

        .timeline-item {
          padding: 24px;
          position: relative;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.4s ease;
        }

        .fade-in.visible .timeline-item {
          opacity: 1;
          transform: translateY(0);
        }

        .timeline-dot {
          width: 8px;
          height: 8px;
          background: #6488ff;
          border-radius: 50%;
          margin-bottom: 16px;
          box-shadow: 0 0 12px rgba(100, 136, 255, 0.5);
        }

        .timeline-item h3 {
          font-size: 17px;
          font-weight: 500;
          margin-bottom: 8px;
          color: #fff;
        }

        .timeline-item p {
          font-size: 13px;
          color: #888;
          line-height: 1.6;
        }

        /* CONTACT */
        .contact {
          padding: 120px 32px;
          position: relative;
          z-index: 2;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          margin-top: 40px;
        }

        .contact-card {
          padding: 32px 28px;
          background: rgba(40, 40, 50, 0.4);
          border-radius: 10px;
          border: 1px solid rgba(100, 100, 255, 0.1);
          transition: all 0.3s ease;
        }

        .contact-card:hover {
          border-color: rgba(100, 100, 255, 0.3);
          background: rgba(40, 40, 50, 0.6);
        }

        .contact-card h3 {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #6488ff;
          margin-bottom: 12px;
          font-weight: 500;
        }

        .contact-card a {
          color: #fff;
          text-decoration: none;
          font-size: 15px;
          transition: color 0.2s;
        }

        .contact-card a:hover {
          color: #6488ff;
        }

        .contact-card p {
          font-size: 15px;
          color: #aaa;
        }

        /* FOOTER */
        .footer {
          position: relative;
          z-index: 2;
          background: rgba(20, 20, 25, 0.8);
          margin-top: 60px;
          overflow: hidden;
        }

        .footer-pattern {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          opacity: 0.4;
          background-image:
            radial-gradient(circle, rgba(100, 150, 255, 0.8) 1px, transparent 1px),
            radial-gradient(circle, rgba(100, 150, 255, 0.6) 1px, transparent 1px),
            radial-gradient(circle, rgba(100, 150, 255, 0.4) 1px, transparent 1px);
          background-size:
            40px 40px,
            80px 80px,
            120px 120px;
          background-position:
            0 0,
            20px 20px,
            40px 40px;
          animation: pixelFloat 30s linear infinite;
        }

        @keyframes pixelFloat {
          0% {
            background-position: 0 0, 20px 20px, 40px 40px;
          }
          100% {
            background-position: 40px 40px, 60px 60px, 80px 80px;
          }
        }

        .footer-content {
          position: relative;
          max-width: 1100px;
          margin: 0 auto;
          padding: 60px 32px 40px;
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 60px;
          align-items: start;
        }

        .footer-logo {
          display: flex;
          align-items: center;
        }

        .footer-logo img {
          max-width: 180px;
          height: auto;
          filter: brightness(0.9);
          transition: filter 0.3s ease;
        }

        .footer-logo img:hover {
          filter: brightness(1.1);
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .footer-column h4 {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #6488ff;
          margin-bottom: 16px;
          font-weight: 500;
        }

        .footer-column a {
          display: block;
          font-size: 13px;
          color: #888;
          text-decoration: none;
          margin-bottom: 10px;
          transition: color 0.2s ease;
        }

        .footer-column a:hover {
          color: #fff;
        }

        .footer-bottom {
          position: relative;
          text-align: center;
          padding: 24px 32px;
          border-top: 1px solid rgba(100, 100, 255, 0.08);
          font-size: 12px;
          color: #666;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .header {
            padding: 16px 24px;
          }

          .nav {
            gap: 24px;
          }

          .nav a {
            font-size: 12px;
          }

          .hero {
            min-height: 70vh;
            padding: 0 24px;
          }

          .hero-title {
            font-size: 56px;
            letter-spacing: 1px;
          }

          .hero-subtitle {
            font-size: 14px;
          }

          .stats {
            padding: 60px 24px;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }

          .stat-number {
            font-size: 36px;
          }

          .services,
          .work,
          .process,
          .contact {
            padding: 80px 24px;
          }

          .section-title {
            font-size: 28px;
            margin-bottom: 36px;
          }

          .services-grid,
          .project-grid,
          .timeline,
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .service-card,
          .project-card,
          .contact-card {
            padding: 28px 20px;
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 40px 24px 30px;
          }

          .footer-logo img {
            max-width: 140px;
          }

          .footer-links {
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }

          .footer-column h4 {
            font-size: 10px;
          }

          .footer-column a {
            font-size: 12px;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 42px;
          }

          .section-title {
            font-size: 24px;
          }

          .nav {
            gap: 16px;
          }

          .logo {
            font-size: 14px;
          }

          .stats-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .footer-links {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `}</style>
    </div>
  );
}
