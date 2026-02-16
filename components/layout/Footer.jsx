'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { footerLinks } from '@/data/content';
import { useTranslation } from '@/hooks/useTranslation';
import { Github, Twitter, Linkedin } from 'lucide-react';

const socialIcons = {
  github: <Github className="w-4 h-4" />,
  twitter: <Twitter className="w-4 h-4" />,
  linkedin: <Linkedin className="w-4 h-4" />,
};

/* ─── Seeded PRNG for deterministic heatmap ─── */
function seededRandom(seed) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

function generateHeatmapCells() {
  const weeks = 52;
  const days = 7;
  const cells = [];
  for (let w = 0; w < weeks; w++) {
    for (let d = 0; d < days; d++) {
      const rand = seededRandom(w * days + d);
      let level = 0;
      if (rand > 0.7) level = 1;
      if (rand > 0.85) level = 2;
      if (rand > 0.93) level = 3;
      if (rand > 0.97) level = 4;
      cells.push(level);
    }
  }
  return cells;
}

const HEATMAP_CELLS = generateHeatmapCells();

/* ─── GitHub-style Heatmap ─── */
function GitHubHeatmap() {
  const weeks = 52;
  const days = 7;

  const colors = [
    'bg-white/[0.03]',
    'bg-emerald-500/20',
    'bg-emerald-500/40',
    'bg-emerald-500/60',
    'bg-emerald-400/80',
  ];

  return (
    <div className="mb-8">
      <div className="text-[10px] font-mono text-body/30 mb-2 uppercase tracking-wider">
        Activity — last 52 weeks
      </div>
      <div className="flex gap-[2px] overflow-hidden">
        {Array.from({ length: weeks }, (_, w) => (
          <div key={w} className="flex flex-col gap-[2px]">
            {Array.from({ length: days }, (_, d) => (
              <div
                key={d}
                className={`w-[8px] h-[8px] rounded-[2px] heatmap-cell ${colors[HEATMAP_CELLS[w * days + d]]}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative z-10 overflow-hidden" role="contentinfo">
      {/* Background image — mirrors hero */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/background.png')" }}
        aria-hidden="true"
      />
      {/* Top fade from site bg into the image */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, #0A0A0E 0%, #0A0A0Ecc 15%, #0A0A0E99 40%, #0A0A0E66 100%)' }}
        aria-hidden="true"
      />
      {/* Gradient top border */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="relative max-w-[1200px] mx-auto px-6 md:px-8 py-16">
        {/* GitHub Heatmap */}
        <div className="mb-12 overflow-hidden">
          <GitHubHeatmap />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 md:gap-8">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-1">
            <img
              src="/logo.png"
              alt="DegenTech"
              className="h-10 w-auto mb-4 brightness-90 hover:brightness-110 transition"
            />
            <p className="text-body text-sm leading-relaxed max-w-[240px] mb-6">
              {t.footer.tagline}
            </p>
            {/* Security badges */}
            <div className="flex flex-wrap gap-2">
              {['SOC 2', 'GDPR', 'AES-256'].map((badge) => (
                <span
                  key={badge}
                  className="text-[10px] font-mono text-body/40 border border-white/[0.06] px-2 py-0.5 rounded"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-heading mb-5">
              {t.footer.products}
            </h4>
            <div className="flex flex-col gap-3">
              {footerLinks.products.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-body text-sm hover:text-heading transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-heading mb-5">
              {t.footer.company}
            </h4>
            <div className="flex flex-col gap-3">
              {footerLinks.company.map((link) =>
                link.isRoute ? (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-body text-sm hover:text-heading transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-body text-sm hover:text-heading transition-colors"
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-heading mb-5">
              {t.footer.connect}
            </h4>
            <div className="flex flex-col gap-3">
              {footerLinks.social.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body text-sm hover:text-heading transition-all duration-300 inline-flex items-center gap-2.5 group"
                >
                  <span className="text-body/50 group-hover:text-accent transition-colors duration-300">
                    {socialIcons[link.icon]}
                  </span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative border-t border-white/[0.04]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-body/40 text-xs">
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <div className="flex items-center gap-1.5 text-xs text-body/30 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            {t.footer.operational}
          </div>
        </div>
      </div>
    </footer>
  );
}
