import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy',
  description: 'DegenTech privacy policy — how we collect, use, and protect your data.',
};

export default function PrivacyPage() {
  const sections = [
    {
      title: 'Introduction',
      content:
        'DegenTech ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.',
    },
    {
      title: 'Information We Collect',
      content: null,
      subsections: [
        {
          subtitle: 'Information You Provide',
          items: [
            'Contact information (name, email address, phone number)',
            'Project details and requirements you share with us',
            'Communication records when you contact us',
          ],
        },
        {
          subtitle: 'Automatically Collected Information',
          items: [
            'Device and browser information',
            'IP address and approximate location',
            'Pages visited and time spent on our site',
            'Referring website or source',
          ],
        },
      ],
    },
    {
      title: 'How We Use Your Information',
      items: [
        'Respond to your inquiries and provide requested services',
        'Improve our website and user experience',
        'Send relevant updates about our services (with your consent)',
        'Comply with legal obligations',
        'Protect against fraudulent or unauthorized activity',
      ],
    },
    {
      title: 'Data Sharing',
      content:
        'We do not sell your personal information. We may share data with trusted third-party service providers who assist us in operating our website and conducting business, subject to confidentiality agreements. We may also disclose information when required by law.',
    },
    {
      title: 'Data Security',
      content:
        'We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.',
    },
    {
      title: 'Cookies',
      content:
        'Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie preferences through your browser settings. Essential cookies required for website functionality cannot be disabled.',
    },
    {
      title: 'Your Rights',
      items: [
        'Access the personal data we hold about you',
        'Request correction of inaccurate data',
        'Request deletion of your data',
        'Object to or restrict processing of your data',
        'Data portability',
        'Withdraw consent at any time',
      ],
    },
    {
      title: 'Changes to This Policy',
      content:
        'We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.',
    },
    {
      title: 'Contact Us',
      content: 'If you have questions about this privacy policy, contact us at:',
      email: 'admin@degentech.co',
    },
  ];

  return (
    <div className="min-h-screen bg-primary">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur-xl border-b border-white/[0.06]">
        <nav className="max-w-[800px] mx-auto px-6 md:px-8 flex items-center justify-between h-16">
          <Link href="/" className="text-heading font-bold text-lg tracking-tight hover:opacity-80 transition-opacity">
            degentech
          </Link>
          <Link href="/" className="text-body text-sm hover:text-heading transition-colors font-mono">
            &larr; Back
          </Link>
        </nav>
      </header>

      {/* Content */}
      <main className="max-w-[800px] mx-auto px-6 md:px-8 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-heading tracking-[-0.02em] mb-4">
          Privacy Policy
        </h1>
        <p className="text-xs font-mono text-body/40 mb-12 pb-8 border-b border-white/[0.06]">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>

        <div className="space-y-10">
          {sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-xl font-semibold text-heading mb-4 tracking-[-0.01em]">
                {section.title}
              </h2>

              {section.content && (
                <p className="text-body text-sm leading-relaxed mb-4">{section.content}</p>
              )}

              {section.email && (
                <a
                  href={`mailto:${section.email}`}
                  className="text-accent hover:text-cyan transition-colors text-sm font-mono"
                >
                  {section.email}
                </a>
              )}

              {section.items && (
                <ul className="space-y-2">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-body text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {section.subsections &&
                section.subsections.map((sub, k) => (
                  <div key={k} className="mb-4">
                    <h3 className="text-sm font-semibold text-accent mb-2">{sub.subtitle}</h3>
                    <ul className="space-y-1.5">
                      {sub.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-body text-sm leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-1.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </section>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.06]">
          <Link href="/" className="text-accent hover:text-cyan transition-colors text-sm font-mono">
            &larr; Back to Home
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-6">
        <p className="text-center text-body/40 text-xs">
          &copy; {new Date().getFullYear()} DegenTech. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
