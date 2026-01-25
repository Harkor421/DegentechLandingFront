import Link from 'next/link';

export const metadata = {
  title: 'About',
  description: 'Learn about DegenTech — the team building software and hardware for the autonomous economy.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center px-6">
      <div className="text-center max-w-[500px]">
        <span className="text-accent text-xs font-mono uppercase tracking-widest mb-3 block">
          Coming Soon
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-heading tracking-[-0.02em] mb-4">
          About DegenTech
        </h1>
        <p className="text-body text-sm leading-relaxed mb-8">
          We&apos;re crafting our story. Check back soon to learn about the team building the future of autonomous systems.
        </p>
        <Link href="/" className="btn-primary font-medium text-sm px-8 py-3.5 rounded-lg inline-block">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
