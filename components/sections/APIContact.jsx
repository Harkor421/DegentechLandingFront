'use client';

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function APIContact({ visible }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const budget = formData.get('budget');
    const message = formData.get('message');

    const subject = encodeURIComponent(`New Project Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nBudget: ${budget}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:admin@degentech.co?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <section
      data-section="apicontact"
      className="py-[100px] md:py-[120px] px-6 md:px-8 relative z-10"
      aria-label="API-style contact form"
    >
      <div className={`max-w-[700px] mx-auto reveal ${visible ? 'visible' : ''}`}>
        <div className="mb-12 text-center">
          <span className="text-accent text-xs font-mono uppercase tracking-widest mb-3 block">
            API
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-[-0.02em]">
            Start a Project
          </h2>
        </div>

        {/* API endpoint card */}
        <div className="rounded-xl overflow-hidden border border-white/[0.06] shadow-2xl shadow-black/40">
          {/* Endpoint header */}
          <div className="flex items-center gap-3 px-5 py-3 bg-[#0D0D14] border-b border-white/[0.04]">
            <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">
              POST
            </span>
            <span className="text-xs font-mono text-body/50">
              /api/v1/project.start
            </span>
            <div className="ml-auto flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-[10px] font-mono text-body/30">200 OK</span>
            </div>
          </div>

          {/* Request body */}
          <div className="bg-[#08080E] p-5">
            <div className="text-[10px] font-mono text-body/30 mb-3 uppercase tracking-wider">
              Request Body
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              {/* name field */}
              <div className="flex items-center gap-2 font-mono text-sm">
                <span className="text-accent/60 w-20 shrink-0">&quot;name&quot;:</span>
                <input
                  name="name"
                  required
                  placeholder='"Your Name"'
                  className="flex-1 bg-white/[0.03] border border-white/[0.06] rounded-md px-3 py-2 text-heading text-sm font-mono placeholder:text-body/20 outline-none focus:border-accent/30 transition-colors"
                />
              </div>

              {/* email field */}
              <div className="flex items-center gap-2 font-mono text-sm">
                <span className="text-accent/60 w-20 shrink-0">&quot;email&quot;:</span>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder='"you@company.com"'
                  className="flex-1 bg-white/[0.03] border border-white/[0.06] rounded-md px-3 py-2 text-heading text-sm font-mono placeholder:text-body/20 outline-none focus:border-accent/30 transition-colors"
                />
              </div>

              {/* budget field */}
              <div className="flex items-center gap-2 font-mono text-sm">
                <span className="text-accent/60 w-20 shrink-0">&quot;budget&quot;:</span>
                <select
                  name="budget"
                  className="flex-1 bg-white/[0.03] border border-white/[0.06] rounded-md px-3 py-2 text-heading text-sm font-mono outline-none focus:border-accent/30 transition-colors"
                >
                  <option value="10k-25k">&quot;$10K - $25K&quot;</option>
                  <option value="25k-50k">&quot;$25K - $50K&quot;</option>
                  <option value="50k-100k">&quot;$50K - $100K&quot;</option>
                  <option value="100k+">&quot;$100K+&quot;</option>
                </select>
              </div>

              {/* message field */}
              <div className="flex items-start gap-2 font-mono text-sm">
                <span className="text-accent/60 w-20 shrink-0 pt-2">&quot;msg&quot;:</span>
                <textarea
                  name="message"
                  rows={3}
                  required
                  placeholder='"Tell us about your project..."'
                  className="flex-1 bg-white/[0.03] border border-white/[0.06] rounded-md px-3 py-2 text-heading text-sm font-mono placeholder:text-body/20 outline-none focus:border-accent/30 transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2 font-medium text-sm px-6 py-3 rounded-lg"
                >
                  {sent ? (
                    <>
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span className="font-mono">200 — Request Sent</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span className="font-mono">Send Request</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Response preview */}
          <div className="bg-[#060609] border-t border-white/[0.04] px-5 py-3">
            <div className="text-[10px] font-mono text-body/20">
              {'// Response: { "status": "received", "response_time": "< 24h" }'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
