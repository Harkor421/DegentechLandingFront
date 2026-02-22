'use client';

import Link from 'next/link';
import { footerLinks } from '@/data/content';
import { useTranslation } from '@/hooks/useTranslation';
import { Github, Twitter, Linkedin, Youtube } from 'lucide-react';

const socialIcons = {
  github: <Github className="w-[18px] h-[18px]" />,
  twitter: <Twitter className="w-[18px] h-[18px]" />,
  linkedin: <Linkedin className="w-[18px] h-[18px]" />,
  youtube: <Youtube className="w-[18px] h-[18px]" />,
};

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative z-10" role="contentinfo">
      {/* ── CTA Section with background image ── */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/background.png')" }}
          aria-hidden="true"
        />
        {/* Gradient overlay: fade from site bg at top, darken to footer bg at bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, #0A0A0E 0%, rgba(10,10,14,0.6) 30%, rgba(10,10,14,0.3) 50%, #1a1a1f 100%)',
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-[1200px] mx-auto px-6 md:px-8 pt-16 pb-20 md:pt-32 md:pb-40">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-heading max-w-[600px] leading-[1.1] mb-6">
            {t.footer.ctaHeading}
          </h2>
          <p className="text-body/70 text-base md:text-lg max-w-[480px] leading-relaxed mb-6">
            {t.footer.ctaSubtitle}
          </p>
          <a
            href="mailto:admin@degentech.co"
            className="text-body/50 hover:text-heading transition-colors text-sm mb-8 block font-mono"
          >
            admin@degentech.co
          </a>
          <a
            href="mailto:admin@degentech.co"
            className="inline-flex items-center px-7 py-3 rounded-full border border-white/20 text-heading text-sm font-medium backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
          >
            {t.footer.ctaButton}
          </a>
        </div>
      </div>

      {/* ── Footer links section ── */}
      <div className="bg-[#1a1a1f]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[2fr_1fr_1fr] gap-12 md:gap-8">
            {/* Brand column */}
            <div>
              <div className="flex items-baseline gap-0.5 mb-4">
                <span className="text-heading text-xl font-semibold tracking-tight">
                  DegenTech
                </span>
                <span className="text-heading/40 text-[10px] align-super">®</span>
              </div>
              <p className="text-body/50 text-sm leading-relaxed max-w-[380px] mb-8">
                {t.footer.tagline}
              </p>

              {/* Social icons */}
              <div className="flex gap-3">
                {footerLinks.social.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-body/50 hover:text-heading hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300"
                    aria-label={link.label}
                  >
                    {socialIcons[link.icon]}
                  </a>
                ))}
              </div>
            </div>

            {/* Explore column */}
            <div>
              <h4 className="text-heading text-sm font-medium mb-6">
                {t.footer.explore}
              </h4>
              <div className="flex flex-col gap-4">
                {footerLinks.explore.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-body/50 text-sm hover:text-heading transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Support column */}
            <div>
              <h4 className="text-heading text-sm font-medium mb-6">
                {t.footer.support}
              </h4>
              <div className="flex flex-col gap-4">
                {footerLinks.support.map((link) =>
                  link.isRoute ? (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-body/50 text-sm hover:text-heading transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-body/50 text-sm hover:text-heading transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-white/[0.06]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-body/30 text-xs">
              &copy; {new Date().getFullYear()} {t.footer.copyright}
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6 text-xs">
              <a href="#" className="text-body/40 hover:text-heading transition-colors duration-200">
                {t.footer.terms}
              </a>
              <a href="/privacy" className="text-body/40 hover:text-heading transition-colors duration-200">
                {t.footer.privacy}
              </a>
              <a href="#" className="text-body/40 hover:text-heading transition-colors duration-200">
                {t.footer.cookies}
              </a>
              <span className="hidden sm:block w-px h-4 bg-white/10" />
              <span className="text-body/30 hidden sm:block">
                {t.footer.designedBy}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
