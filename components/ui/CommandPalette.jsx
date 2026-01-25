'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, ArrowRight, Zap, Box, Link2, BarChart3, Users, Mail } from 'lucide-react';

const commands = [
  { label: 'Go to Services', section: '#capabilities', icon: Zap },
  { label: 'Go to Projects', section: '#work', icon: Box },
  { label: 'Go to Process', section: '#process', icon: Link2 },
  { label: 'Go to Team', section: '#team', icon: Users },
  { label: 'Go to Contact', section: '#contact', icon: Mail },
  { label: 'View Stats', section: '#stats', icon: BarChart3 },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    function onKeyDown(e) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setOpen(false);
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
    if (!open) setQuery('');
  }, [open]);

  const filtered = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  function navigate(section) {
    setOpen(false);
    const el = document.querySelector(section);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-start justify-center pt-[20vh]" onClick={() => setOpen(false)}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Palette */}
      <div
        className="relative w-full max-w-[520px] mx-4 bg-card border border-white/[0.08] rounded-xl shadow-2xl shadow-black/50 command-palette-enter overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.06]">
          <Search className="w-4 h-4 text-body/40 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search..."
            className="flex-1 bg-transparent text-sm text-heading placeholder:text-body/30 outline-none font-mono"
          />
          <kbd className="text-[10px] font-mono text-body/30 border border-white/[0.08] px-1.5 py-0.5 rounded">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div className="max-h-[300px] overflow-y-auto py-2">
          {filtered.length === 0 && (
            <div className="px-4 py-6 text-center text-sm text-body/40 font-mono">
              No results found
            </div>
          )}
          {filtered.map((cmd, i) => {
            const Icon = cmd.icon;
            return (
              <button
                key={i}
                onClick={() => navigate(cmd.section)}
                className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-white/[0.04] transition-colors text-left group"
              >
                <Icon className="w-4 h-4 text-accent/60 shrink-0" />
                <span className="text-sm text-body group-hover:text-heading transition-colors flex-1">
                  {cmd.label}
                </span>
                <ArrowRight className="w-3 h-3 text-body/20 group-hover:text-accent/60 transition-colors" />
              </button>
            );
          })}
        </div>

        {/* Footer hint */}
        <div className="border-t border-white/[0.06] px-4 py-2 flex items-center gap-4 text-[10px] font-mono text-body/25">
          <span>Navigate with <kbd className="border border-white/[0.08] px-1 rounded">↑↓</kbd></span>
          <span>Select with <kbd className="border border-white/[0.08] px-1 rounded">↵</kbd></span>
          <span>Close with <kbd className="border border-white/[0.08] px-1 rounded">ESC</kbd></span>
        </div>
      </div>
    </div>
  );
}
