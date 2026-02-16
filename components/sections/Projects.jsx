'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';

export default function Projects({ visible }) {
  const { t } = useTranslation();

  return (
    <section
      id="work"
      data-section="work"
      className="py-16 md:py-[120px] px-6 md:px-8 relative z-10"
      aria-label="Featured projects"
    >
      <div className={`max-w-[1200px] mx-auto reveal ${visible ? 'visible' : ''}`}>
        <div className="mb-12">
          <span className="text-accent text-xs font-mono uppercase tracking-widest mb-3 block">
            {t.projects.label}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-[-0.02em]">
            {t.projects.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {t.projects.items.map((project, i) => (
            <div
              key={i}
              className="bg-card rounded-xl overflow-hidden border border-white/[0.06] group transition-all duration-300 hover:border-white/[0.10]"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[200px] md:h-[240px] object-cover object-top group-hover:scale-[1.01] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-5 md:p-6">
                <span className="inline-block text-[10px] font-mono uppercase tracking-widest text-accent mb-3">
                  {project.tag}
                </span>
                <h3 className="text-heading font-semibold text-base mb-2 tracking-[-0.01em]">
                  {project.title}
                </h3>
                <p className="text-body text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                  {project.tech.map((tech, j) => (
                    <span key={j} className="text-[10px] font-mono text-body/60 bg-elevated px-2 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-4">
                  {project.previewUrl && (
                    <a
                      href={project.previewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:text-heading transition-colors group/link"
                    >
                      <ExternalLink className="w-3 h-3" />
                      {t.projects.viewProject}
                      <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </a>
                  )}
                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-body/50 hover:text-accent transition-colors"
                    >
                      <Github className="w-3 h-3" />
                      {t.projects.viewCode}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
