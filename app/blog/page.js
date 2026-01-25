import Link from 'next/link';

export const metadata = {
  title: 'Blog',
  description: 'Engineering insights, project deep-dives, and industry analysis from the DegenTech team.',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center px-6">
      <div className="text-center max-w-[500px]">
        <span className="text-accent text-xs font-mono uppercase tracking-widest mb-3 block">
          Coming Soon
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-heading tracking-[-0.02em] mb-4">
          Engineering Blog
        </h1>
        <p className="text-body text-sm leading-relaxed mb-8">
          Deep dives into our tech stack, project case studies, and insights on building autonomous systems.
        </p>
        <Link href="/" className="btn-primary font-medium text-sm px-8 py-3.5 rounded-lg inline-block">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
