import React from "react";
import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <div className="privacy-page">
      <div className="voxel-rain"></div>

      {/* HEADER */}
      <header className="header">
        <Link to="/" className="logo">degentech</Link>
        <nav className="nav">
          <Link to="/#services">services</Link>
          <Link to="/#work">work</Link>
          <Link to="/#contact">contact</Link>
        </nav>
      </header>

      {/* CONTENT */}
      <main className="privacy-content">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

          <section>
            <h2>Introduction</h2>
            <p>
              DegenTech ("we," "our," or "us") respects your privacy and is committed to protecting your personal data.
              This privacy policy explains how we collect, use, and safeguard your information when you visit our website
              or use our services.
            </p>
          </section>

          <section>
            <h2>Information We Collect</h2>
            <h3>Information You Provide</h3>
            <ul>
              <li>Contact information (name, email address, phone number)</li>
              <li>Project details and requirements you share with us</li>
              <li>Communication records when you contact us</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <ul>
              <li>Device and browser information</li>
              <li>IP address and approximate location</li>
              <li>Pages visited and time spent on our site</li>
              <li>Referring website or source</li>
            </ul>
          </section>

          <section>
            <h2>How We Use Your Information</h2>
            <p>We use the collected information to:</p>
            <ul>
              <li>Respond to your inquiries and provide requested services</li>
              <li>Improve our website and user experience</li>
              <li>Send relevant updates about our services (with your consent)</li>
              <li>Comply with legal obligations</li>
              <li>Protect against fraudulent or unauthorized activity</li>
            </ul>
          </section>

          <section>
            <h2>Data Sharing</h2>
            <p>
              We do not sell your personal information. We may share data with trusted third-party service providers
              who assist us in operating our website and conducting business, subject to confidentiality agreements.
              We may also disclose information when required by law.
            </p>
          </section>

          <section>
            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against
              unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over
              the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2>Cookies</h2>
            <p>
              Our website may use cookies and similar tracking technologies to enhance your browsing experience.
              You can control cookie preferences through your browser settings. Essential cookies required for
              website functionality cannot be disabled.
            </p>
          </section>

          <section>
            <h2>Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing of your data</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party sites. We are not responsible for the privacy practices
              or content of these external sites. We encourage you to review the privacy policies of any site you visit.
            </p>
          </section>

          <section>
            <h2>Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. Any changes will be posted on this page with an
              updated revision date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              If you have questions about this privacy policy or our data practices, please contact us at:
            </p>
            <p className="contact-email">
              <a href="mailto:hello@degentech.dev">hello@degentech.dev</a>
            </p>
          </section>

          <div className="back-link">
            <Link to="/">← Back to Home</Link>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-pattern"></div>
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

        .privacy-page {
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
        .privacy-page::before {
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

        /* CONTENT */
        .privacy-content {
          position: relative;
          z-index: 2;
          padding: 80px 32px 120px;
        }

        .container {
          max-width: 800px;
          margin: 0 auto;
        }

        h1 {
          font-size: 48px;
          font-weight: 300;
          margin-bottom: 16px;
          letter-spacing: 1px;
          color: #fff;
        }

        .last-updated {
          font-size: 13px;
          color: #666;
          margin-bottom: 60px;
          padding-bottom: 30px;
          border-bottom: 1px solid rgba(100, 100, 255, 0.1);
        }

        section {
          margin-bottom: 48px;
        }

        h2 {
          font-size: 22px;
          font-weight: 500;
          color: #fff;
          margin-bottom: 16px;
          letter-spacing: 0.3px;
        }

        h3 {
          font-size: 16px;
          font-weight: 500;
          color: #6488ff;
          margin-top: 20px;
          margin-bottom: 12px;
        }

        p {
          font-size: 15px;
          line-height: 1.8;
          color: #aaa;
          margin-bottom: 16px;
        }

        ul {
          list-style: none;
          padding-left: 0;
          margin-bottom: 16px;
        }

        li {
          font-size: 15px;
          line-height: 1.8;
          color: #aaa;
          padding-left: 24px;
          position: relative;
          margin-bottom: 8px;
        }

        li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 10px;
          width: 6px;
          height: 6px;
          background: #6488ff;
          border-radius: 50%;
        }

        .contact-email a {
          color: #6488ff;
          text-decoration: none;
          font-size: 16px;
          transition: color 0.2s;
        }

        .contact-email a:hover {
          color: #8aa8ff;
        }

        .back-link {
          margin-top: 60px;
          padding-top: 40px;
          border-top: 1px solid rgba(100, 100, 255, 0.1);
        }

        .back-link a {
          color: #6488ff;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.2s;
        }

        .back-link a:hover {
          color: #8aa8ff;
        }

        /* FOOTER */
        .footer {
          position: relative;
          z-index: 2;
          background: rgba(20, 20, 25, 0.8);
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

        .footer-bottom {
          position: relative;
          text-align: center;
          padding: 24px 32px;
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

          .privacy-content {
            padding: 60px 24px 80px;
          }

          h1 {
            font-size: 36px;
          }

          h2 {
            font-size: 18px;
          }

          section {
            margin-bottom: 36px;
          }
        }

        @media (max-width: 480px) {
          .nav {
            gap: 16px;
          }

          .nav a {
            font-size: 12px;
          }

          h1 {
            font-size: 28px;
          }
        }
      `}</style>
    </div>
  );
}