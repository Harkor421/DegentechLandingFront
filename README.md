<p align="center">
  <img src="public/logo.png" alt="DegenTech" width="60" />
</p>

<h1 align="center">DegenTech</h1>

<p align="center">
  <strong>Software & hardware for the autonomous economy.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-000000?style=flat&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/GSAP-3.14-88CE02?style=flat&logo=greensock&logoColor=white" alt="GSAP" />
  <img src="https://img.shields.io/badge/JavaScript-JSX-F7DF1E?style=flat&logo=javascript&logoColor=black" alt="JavaScript" />
</p>

<p align="center">
  <a href="#overview">Overview</a> &middot;
  <a href="#tech-stack">Tech Stack</a> &middot;
  <a href="#getting-started">Getting Started</a> &middot;
  <a href="#project-structure">Project Structure</a>
</p>

---

## Overview

DegenTech is a full-stack technology company that builds custom software, manufactures precision hardware, and integrates intelligent systems for companies worldwide. This repository contains the landing page and marketing site.

**What we do:**

- **Custom Software** &mdash; SaaS platforms, APIs, and internal tools built for scale
- **3D Manufacturing** &mdash; Rapid prototyping and production-grade parts with industrial precision
- **IoT Integration** &mdash; Bridging hardware and software with connected device ecosystems
- **Product Strategy** &mdash; End-to-end guidance from concept to launch

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 16 |
| UI | React 19 |
| Styling | Tailwind CSS 4 |
| Animations | GSAP, Lenis |
| Icons | Lucide React |
| Language | JavaScript (JSX) |

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The dev server runs at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/                  # Next.js app router pages
  ├── page.js         # Landing page entry
  ├── layout.js       # Root layout & metadata
  ├── globals.css     # Design tokens & global styles
  ├── about/          # About page
  ├── services/       # Services page
  ├── projects/       # Projects page
  └── blog/           # Blog page

components/
  ├── landing/        # Landing page orchestrator
  ├── sections/       # Page sections (Hero, Capabilities, etc.)
  ├── layout/         # Navbar & Footer
  ├── ui/             # Cursor, scroll bar, overlays
  └── providers/      # Context providers

i18n/                 # Internationalization (EN / ES)
public/               # Static assets & images
```

## License

All rights reserved.
